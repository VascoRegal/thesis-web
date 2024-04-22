"use strict";(self.webpackChunkvregal_tese=self.webpackChunkvregal_tese||[]).push([[748],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>g});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=n.createContext({}),c=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=c(e.components);return n.createElement(o.Provider,{value:a},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=l,g=p["".concat(o,".").concat(m)]||p[m]||d[m]||r;return t?n.createElement(g,i(i({ref:a},u),{},{components:t})):n.createElement(g,i({ref:a},u))}));function g(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[p]="string"==typeof e?e:l,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6845:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=t(7462),l=(t(7294),t(3905));const r={sidebar_position:1.5},i="Guia Instala\xe7\xe3o",s={unversionedId:"guia_instalacao",id:"guia_instalacao",title:"Guia Instala\xe7\xe3o",description:"Table of Contents",source:"@site/docs/guia_instalacao.md",sourceDirName:".",slug:"/guia_instalacao",permalink:"/thesis-web/docs/guia_instalacao",draft:!1,tags:[],version:"current",sidebarPosition:1.5,frontMatter:{sidebar_position:1.5},sidebar:"tutorialSidebar",previous:{title:"Introdu\xe7\xe3o",permalink:"/thesis-web/docs/intro"},next:{title:"Pesquisa",permalink:"/thesis-web/docs/category/pesquisa"}},o={},c=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Headscale",id:"headscale",level:2},{value:"Installation",id:"installation",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Server URL (where clients will connect to) and Listening Interfaces",id:"server-url-where-clients-will-connect-to-and-listening-interfaces",level:4},{value:"DERP Servers Configuration",id:"derp-servers-configuration",level:4},{value:"Clients",id:"clients",level:2},{value:"Tailscale CLI Installation",id:"tailscale-cli-installation",level:3},{value:"Client Authentication",id:"client-authentication",level:2}],u={toc:c},p="wrapper";function d(e){let{components:a,...t}=e;return(0,l.kt)(p,(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"guia-instala\xe7\xe3o"},"Guia Instala\xe7\xe3o"),(0,l.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#headscale"},"Headscale"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#configuration"},"Configuration")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#clients"},"Clients"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#tailscale-cli-installation"},"Tailscale CLI Installation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#authentication"},"Authentication"))))),(0,l.kt)("h2",{id:"headscale"},"Headscale"),(0,l.kt)("h3",{id:"installation"},"Installation"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Download latest stable package")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget --output-document=headscale.deb \\\n    https://github.com/juanfont/headscale/releases/download/v0.22.3/headscale_0.22.3_linux_amd64.deb\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Install the package")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install headscale.deb\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Enable and start the Headscale service")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable headscale\nsudo systemctl start headscale\n")),(0,l.kt)("h3",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"All configurations files available online ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/VascoRegal/ua-overlays-automation"},"here")),(0,l.kt)("h4",{id:"server-url-where-clients-will-connect-to-and-listening-interfaces"},"Server URL (where clients will connect to) and Listening Interfaces"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vim /etc/headscale/config.yaml\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"server_url: http://iris-lab.ua.pt:8080\n\n...\n\nlisten_addr: 0.0.0.0:8080\nmetrics_listen_addr: 127.0.0.1:9090\ngrpc_listen_addr: 127.0.0.1:50443\n")),(0,l.kt)("h4",{id:"derp-servers-configuration"},"DERP Servers Configuration"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create a configuration file for the Embedded DERP server")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vim /etc/headscale/derp_config.yaml\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'regions:\n  900:\n    regionid: 900\n    regioncode: EMBD\n    regionname: Embedded Servers\n    nodes:\n      - name: 900a\n        regionid: 900\n        hostname: iris-lab.ua.pt\n        ipv4: 192.168.160.160\n        #ipv6: "fe80::eea8:6bff:fefb:3d25"\n        stunport: 3478\n        stunonly: false\n        derpport: 8080\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Enable Headscale's embedded DERP server ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vim /etc/headscale/config.yaml\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'derp:\n    server:\n        enabled: true\n\n        region_id: 900\n\n        region_code: "EMBD"\n        region_name: "Embedded Servers"\n        stun_listen_addr: "0.0.0.0:3478"\n\n')),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Disable externally available servers and load the embedded from the config file")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"derp:\n    urls: []\n\n    paths:\n      - /etc/headscale/derp_config.yml\n\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Restart the service")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo service restart headscale\n")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Create a user for development")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"headscale users create dev\n")),(0,l.kt)("h2",{id:"clients"},"Clients"),(0,l.kt)("h3",{id:"tailscale-cli-installation"},"Tailscale CLI Installation"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Run the Tailscale installation script")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://tailscale.com/install.sh | sh\n")),(0,l.kt)("h2",{id:"client-authentication"},"Client Authentication"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Generate a pre-authenticated key in the Headscale instance")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"headscale --user dev preauthkeys create --reusable --expiration 24h\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Clients can now login with the pre-authenticated key generated")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'tailscale up --login-server "http://iris-lab.ua.pt:8080" --authkey <generated_key>\n')))}d.isMDXComponent=!0}}]);