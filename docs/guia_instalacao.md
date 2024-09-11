---
sidebar_position: 1.5
---

# Guia Instalação

All installation scripts publicly available in the [automation repository](https://github.com/VascoRegal/ua-overlays-automation) 

## Table of Contents
<!-- TOC -->
- [Headscale](#headscale)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Clients](#clients)
  - [Tailscale CLI Installation](#tailscale-cli-installation)
  - [Authentication](#authentication)

## Headscale

### Installation

1. Download latest stable package

```bash
wget --output-document=headscale.deb \
    https://github.com/juanfont/headscale/releases/download/v0.22.3/headscale_0.22.3_linux_amd64.deb
```

2. Install the package

```bash
sudo apt install headscale.deb
```

3. Enable and start the Headscale service

```bash
sudo systemctl enable headscale
sudo systemctl start headscale
```

### Configuration

#### Server URL (where clients will connect to) and Listening Interfaces


```bash
vim /etc/headscale/config.yaml
```

```yaml
server_url: https://iris-lab.ua.pt:8080

...

listen_addr: 0.0.0.0:8080
metrics_listen_addr: 127.0.0.1:9090
grpc_listen_addr: 127.0.0.1:50443
```

#### DERP Servers Configuration

1. Enable Headscale's embedded DERP server 

```bash
vim /etc/headscale/config.yaml
```

```yaml
derp:
    server:
        enabled: true

        region_id: 900

        region_code: "EMBD"
        region_name: "Embedded Servers"
        stun_listen_addr: "0.0.0.0:3478"

```

2. Disable externally available servers 

```yaml
derp:
    urls: []
```

3. Add Headscale's certificate

```yaml
tls_cert_path: "/etc/headscale/certs/headscale.crt"
tls_key_path: "/etc/headscale/certs/headscale.key"
```

Note: these certificates were generated with openssl. For deployments with a public Headscale instance, using let's encrypt or caddy through Headscale's config file is probably better.

4. Restart the service

```bash
sudo service restart headscale
```

5. Create a user for development

```bash
headscale users create dev
```

## Clients

### Tailscale CLI Installation

1. Run the Tailscale installation script

```bash
wget -q https://raw.githubusercontent.com/VascoRegal/ua-overlays-automation/main/scripts/install_tailscale.sh
sudo chmod u+x ./install_tailscale.sh
sudo ./install_tailscale.sh
```

2. Reboot the machine

```
sudo reboot
```

## Client Authentication

1. Generate a pre-authenticated key in the Headscale instance

```bash
headscale --user dev preauthkeys create --reusable --expiration 24h
```

2. Clients can now login with the pre-authenticated key generated

```bash
tailscale up --login-server "https://iris-lab.ua.pt:8080" --authkey <genrated_key> 
```

