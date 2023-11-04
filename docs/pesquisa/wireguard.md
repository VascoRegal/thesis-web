# Wireguard Whitepaper

**Titulo:** WireGuard: Next Generation Kernel Network Tunnel

**Autor:** Jason A. Donenfeld

**URL:** [https://www.wireguard.com/papers/wireguard.pdf](https://www.wireguard.com/papers/wireguard.pdf)

---

## WireGuard

- **Layer 3** (network / packets) network tunnel implemented at **kernel level**
- Tunnel works by associating peers with a **public key** and a **source IP**
- OpenSSH style mutual authentication
- As it uses UDP, **sessions are managed transparently** with state machines

---

### Cryptokey routing

- Peers are identified by a **public key** - a 32 byte Curve25519.
- Each interface keeps a data structure with its own public and private keys, listening port and a **list of public key / allowed source ips** associations for each peer
- Optionally, peers can also **define an internet endpoint**, to where it is listening for packets. If not defined, wireguard uses the incoming packets’ source IP
- An **outgoing wireguard packet** will **consult the table** and use the respective IP’s public key for encryption
- An **incoming packet**, after being decrypted will only be accepted if there’s a match, after decryption, between the source IP and the allowed IPs in the table.

![Untitled](WireGuard%20Whitepaper%20f34273d5acde43ac901c5dce85af1416/Untitled.png)

---

### Send / Recv flow

**Send**

1. plain text reaches the wg interface
2. **destination IP** is consulted from the routing table
3. plain text is encrypted with the peer’s public key and nouce counter, using ChaCha20Poly1305
4. **Wireguard headers** are added to the encrypted package
5. The header + encrypted packet are sent as a **UDP/IP packet to the peer’s endpoint** (either peer defined or determined by the last received authentication packet from destination peer)

**Recv**

1. The header + encrypted UDP packet reaches the wg interface
2. By reading the header, WireGuard identifies the peer associated with the packet, checks the validity of the counter and **perfroms authentication and decryption**.
3. The source IP in the packet is used to **update the peer’s endpoint**
4. After decryption, wireguard checks **if the source IP matches the allowed IPs** from the source peer. If not, it is dropped.
5. Plain text packet is **inserted in the wg queue**

---

### Protocol and Cryptography

Before any encrypted communication, wireguard **enforces a 1-RTT handshake for symmetric key exchange** - one for sending and one for receiving.

Only after the initiator send an encrypted message will the receiver be able to start sending encrypted messages.

This ordering restriction is to require confirmation as described for KEA+C, as well as allowing handshake message to be processed asynchronously to transport data messages. 

These messages use the “IK” pattern from Noise, in addition to a novel cookie construction to mitigate denial of service attacks. 

One characteristic of wireguard is its **Silence** - which means that wireguard is invisible to ilegitimate peers and network packets, since these packets are just dropped.

To prevent an attacker to interfere with sessions (for example, by sending multiple session initiating messages to peer to force key regeneration), wireguard provides a timestamp, a 12-byte TAI64N - encrypted and authenticated - in the first message by the initiator. The receiver will keep track of this value, and discard packets with timestamp values lesser or equal than the registered.

This first message relies only the Diffie-Helman result of both peers keys. If one is compromised, an attacker could forge an initiating message - but could not complete the handshake.

**Optional pre-shared symmetric key mode**

Peers can add an extra layer of encryption - a single 256-bit symmetric encryption key. This extra layer assumes the cracking of the Curve2551 - which is a process, at the time of writting, that requires capture of a substantial ammount of traffic.

**Denial of Service mitigation**

To determine the authenticity of handshake message, a Curve25519 multiplication must be computed, requiring considerable CPU usage.

This could allow for an attack vector by cpu-exhausting. Hence, if under load, a receiver may reply with a cookie - which the initiator will then use on its initiating message to proceed with the handshake.

---

### Messages

- Handshake initiation
- Handshake response
- Cookie message - reply to handshake initiation or response with a cookie to resend messages
- Encrypted IP Packet using negotiatied ciphers in the handshake

**i →** initiator

**r →** responder

Both peers hold a structure with such variables:

![Untitled](WireGuard%20Whitepaper%20f34273d5acde43ac901c5dce85af1416/Untitled%201.png)

The handshake executes as following:

![Untitled](WireGuard%20Whitepaper%20f34273d5acde43ac901c5dce85af1416/Untitled%202.png)

---

### Timers and Stateless UX

- Wireguard manages session state using methods transparent to the user.
- Employs a tested, robust state machine, due to the simplicity of a 1-RTT

For this process, wireguard keeps the following constants:

![Untitled](WireGuard%20Whitepaper%20f34273d5acde43ac901c5dce85af1416/Untitled%203.png)

- Wireguard will not send initiation messages more than once every **REKEY-TIMEOUT**
- Reinitiations are attempted for **REKEY-ATTEMPT-TIME** seconds. The process restarts after this timeout when the initiator wants to send a new data packet.
- When an initiation message is sent due to end of timer, a small ammount of jitter is added so they don’t do it simultaneously
- After **REKEY-AFTER-MESSAGES** messages, WireGuard will start a new initiation process
- After **REJECT-AFTER-MESSAGES** transport data messages or after the current secure session is **REJECT-AFTER-TIME** seconds old, whichever comes first, WireGuard will refuse to send or receive any more transport data until a new session is created.

**Key Rotation**

WireGuard keeps in memory the current secure session, the previous secure session, and the next secure session for the case of an unconfirmed session. Every time a new secure session is created, the existing one rotates into the “previous” slot, and the new one occupies the “current” slot, for the initiator, and for the responder, the “next” slot is used interstitially until the handshake is confirmed

**Keepalive**

- If a peer receives a data message but has nothing to reply within the **KEEPALIVE-TIMEOUT** seconds, it will send a zero-length keepalive packets to maintain the session.
- Hence, wireguard considers a session broken if it has not received a data message or a keepalive within **KEEPALIVE-TIMEOUT** + **REKEY-TIMEOUT** seconds

**interaction with cookie system**

- Upon receiving a cookie to prceed with the handshake later, the peer should only send the initiating with the handshake message after **REKEY-TIMEOUT**
