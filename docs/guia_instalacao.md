---
sidebar_position: 5
---

# Deployment Manual

## Table of Contents
<!-- TOC -->
- [Headscale](#headscale)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Clients](#clients)
  - [Tailscale CLI Installation](#tailscale-cli-installation)

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
server_url: http://iris-lab.ua.pt:8080

...

listen_addr: 0.0.0.0:8080
metrics_listen_addr: 127.0.0.1:9090
grpc_listen_addr: 127.0.0.1:50443
```

#### DERP Servers Configuration

1. Create a configuration file for the Embedded DERP server

```bash
vim /etc/headscale/derp_config.yaml
```

```yaml
regions:
  900:
    regionid: 900
    regioncode: EMBD
    regionname: Embedded Servers
    nodes:
      - name: 900a
        regionid: 900
        hostname: iris-lab.ua.pt
        ipv4: 192.168.160.160
        #ipv6: "fe80::eea8:6bff:fefb:3d25"
        stunport: 3478
        stunonly: false
        derpport: 8080
```

2. Enable Headscale's embedded DERP server 

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

3. Disable externally available servers and load the embedded from the config file

```yaml
derp:
    urls: []

    paths:
      - /etc/headscale/derp_config.yml

```

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
curl -fsSL https://tailscale.com/install.sh | sh
```

## Client Authentication

1. Generate a pre-authenticated key in the Headscale instance

```bash
headscale --user dev preauthkeys create --reusable --expiration 24h
```

2. Clients can now login with the pre-authenticated key generated

```bash
tailscale up --login-server "http://iris-lab.ua.pt:8080" --authkey <generated_key>
```

