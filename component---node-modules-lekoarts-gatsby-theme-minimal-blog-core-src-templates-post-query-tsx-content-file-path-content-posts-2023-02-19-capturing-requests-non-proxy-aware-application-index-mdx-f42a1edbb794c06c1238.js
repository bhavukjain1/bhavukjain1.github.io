"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[769],{5885:function(e,t,n){var a=n(7294),l=n(5596);t.Z=e=>{let{text:t,url:n}=e;const{0:o,1:i}=(0,a.useState)(!1),s=o?"underline":"none",{0:r,1:c}=(0,a.useState)("");(0,a.useEffect)((()=>{const e=e=>{const t=localStorage.getItem("theme-ui-color-mode");t&&(console.log(t),c(t))};window.addEventListener("click",e);const t=localStorage.getItem("theme-ui-color-mode");return t&&c(t),()=>{window.removeEventListener("click",e)}}),[]);const u={color:"dark"===r?l.ZP.colors.purple[5]:l.ZP.colors.purple[7],textDecoration:s};return a.createElement("a",{style:u,href:n,target:"_blank",rel:"nofollow noopener noreferrer",onMouseEnter:()=>{i(!0)},onMouseLeave:()=>{i(!1)}},t)}},4052:function(e,t,n){n.r(t),n.d(t,{Head:function(){return r.F},default:function(){return c}});var a=n(7294),l=n(1151),o=n(5885);function i(e){const t=Object.assign({blockquote:"blockquote",p:"p",strong:"strong",ol:"ol",li:"li",ul:"ul",pre:"pre",code:"code",span:"span"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"UPDATE")," - This post has been updated to include a stable set of NAT rules for iptables."),"\n"),"\n",a.createElement(t.p,null,"Mobile applications are becoming increasingly popular, with many developers choosing to build them using frameworks such as Xamarin. However, there are times when these applications do not follow device proxy settings, making it difficult to capture the HTTP requests on Burp Suite or any other proxy tool."),"\n",a.createElement(t.p,null,"In such cases, it is essential to find a solution that allows for the capture of this data. One effective solution is to create a custom OpenVPN. This process involves directing all traffic originating from the device to the VPN, which then routes it to the Burp Suite IP address. This method has been thoroughly tested and proven to be effective."),"\n",a.createElement(t.p,null,"Detailed steps on setting up the environment:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Setting up a custom OpenVPN. Here, we will be leveraging Digital Ocean (DO) to host our VPN. We will also use droplets with Ubuntu 22.04 installed. Set up two droplets - one for hosting our OpenVPN and the other, a private Certificate Authority (CA). Recommended droplets:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"For hosting OpenVPN - $10 droplet"),"\n",a.createElement(t.li,null,"For hosting a private CA - $5 droplet"),"\n"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Follow this documentation to setup OpenVPN on DO: ",a.createElement(o.Z,{text:"https://www.digitalocean.com/community/tutorials/how-to-set-up-and-configure-an-openvpn-server-on-ubuntu-22-04",url:"https://www.digitalocean.com/community/tutorials/how-to-set-up-and-configure-an-openvpn-server-on-ubuntu-22-04"})," (",a.createElement(t.strong,null,"Please be careful and complete all the steps. Otherwise, the VPN will not work."),")"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Create two clients for OpenVPN - one will be installed on a mobile device, and the other will be installed on the system where Burp is installed."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"After setting up the OpenVPN, we will need to create NAT rules for routing the traffic onto the Burp Suite. Create the following rules (the port number should be of the Burp):"),"\n"),"\n"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},"iptables -t nat -A PREROUTING -p tcp --dport 443 -s 10.8.0.6 -j DNAT --to-destination 10.8.0.10:8081\niptables -t nat -A POSTROUTING -p tcp --dport 8081 -d 10.8.0.10 -j SNAT --to-source 10.8.0.10\n")),"\n",a.createElement(t.p,null,"Here, 10.8.0.6 is the local IP on the mobile device and 10.8.0.10 is the local IP on which burp suite is installed."),"\n",a.createElement(t.ol,{start:"5"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"The NAT policy should look like this below:\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 23.333333333333332%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA2ElEQVR42m2Qy1JCQQxE8+jM3IsPHldERUAtq2CBG///39qaCbBykUoqlZzuROoxOP4EywcYL85yAGNtxJMRkxHPTjGhiNBXxnh1KqT37F5pD0q70177XCllC9ads2ydmJzx5sTSibnRhoSKJtAelT5ZAkWoRTPikmsD7sGyA8veGZurQ+8O25CN2pc7cKYdKi633i0uojIcweEUrJ9geXfWL3SX7bSWm5giof2s5jD+AV6h4zk4+w22XA8JjcnpCyPWxnpCr9sCNsby7QlUobcXrCyFFvmKP+kua9pbdwwPAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="image"\n        title=""\n        src="/static/fd02828677c7a37c0a1dde9ffe26f9c9/7d769/nat.png"\n        srcset="/static/fd02828677c7a37c0a1dde9ffe26f9c9/5243c/nat.png 240w,\n/static/fd02828677c7a37c0a1dde9ffe26f9c9/ab158/nat.png 480w,\n/static/fd02828677c7a37c0a1dde9ffe26f9c9/7d769/nat.png 960w,\n/static/fd02828677c7a37c0a1dde9ffe26f9c9/87339/nat.png 1440w,\n/static/fd02828677c7a37c0a1dde9ffe26f9c9/900a5/nat.png 1762w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}})),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Enable invisible proxy on the Burp Suite:\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 57.08333333333333%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABl0lEQVR42nWS6ZKcMAyEef/Hy99hgQk3w2VbNjbHdEqa9dTuJlFVF8JYn1o2Sd7OWLWFIQeyHkYT1kXD0obgA4LfRf5LHsIP+YB5WjAMI5KsakDzgKBGXG6FNRpFUaCuayilsa4rxnHENE5Y5gXLsmCeZ3nGXCmFrh9wb3okYUhhil/AnANTBj09UFUlmuKOJi/Q1C2K/I709oG6amAUyRRkLObxBT72Hb+7B7QhJG7zaLsB13WBgx31Xf9yuK7SXWstMmQQ9oDj2HGeB7RW2Pdd6o7zkvET56wUveIpOUPbroO1FiEEeO+/iSFsgMfl45CGSoGMQcIFTdO8O4nDx4iyLFGXpXxj8WjczBjzBvJehjHDbRvIOiS8gTvF4I6GCLvfEMh83m4QyHmeouM45MlAnuK6TljnUfUTknhGMdgJd2QHEfAvPZ9PqWNgbMJKeJEhvBiBvOac+6+ISEbvPs/5G5CdcBJv2RIhvd3wkabyP+Z5/lZ8z7IMaZrKOfM0ESZA/IjzvNCPk1wEO4hq2/YvN1/zCPwDjaJNPTbjMWcAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="image"\n        title=""\n        src="/static/f270ceabbd3199a3105fb902b2dec763/7d769/burp.png"\n        srcset="/static/f270ceabbd3199a3105fb902b2dec763/5243c/burp.png 240w,\n/static/f270ceabbd3199a3105fb902b2dec763/ab158/burp.png 480w,\n/static/f270ceabbd3199a3105fb902b2dec763/7d769/burp.png 960w,\n/static/f270ceabbd3199a3105fb902b2dec763/87339/burp.png 1440w,\n/static/f270ceabbd3199a3105fb902b2dec763/88b03/burp.png 1920w,\n/static/f270ceabbd3199a3105fb902b2dec763/53d8f/burp.png 2566w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}})),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Now connect to the VPN on the mobile device and the system. This connection should capture the HTTP requests and responses."),"\n"),"\n"),"\n",a.createElement(t.p,null,"Thank you for stopping by! If you have any questions, comments, or suggestions, please don't hesitate to reach out."))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(i,e)):i(e)},r=n(534);function c(e){return a.createElement(r.Z,e,a.createElement(s,e))}r.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-2023-02-19-capturing-requests-non-proxy-aware-application-index-mdx-f42a1edbb794c06c1238.js.map