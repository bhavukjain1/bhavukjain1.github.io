---
layout: post
title: Capturing HTTP Requests from a Non-proxy-aware Mobile Application
date:   2023-02-20 15:30:00 +0530
categories: [Mobile Security]
---


Mobile applications are becoming increasingly popular, with many developers choosing to build them using frameworks such as Xamarin. However, there are times when these applications do not follow device proxy settings, making it difficult to capture the HTTP requests on Burp Suite or any other proxy tool.

In such cases, it is essential to find a solution that allows for the capture of this data. One effective solution is to create a custom OpenVPN. This process involves directing all traffic originating from the device to the VPN, which then routes it to the Burp Suite IP address. This method has been thoroughly tested and proven to be effective.

Detailed steps on setting up the environment:

1. Setting up a custom OpenVPN. Here, we will be leveraging Digital Ocean (DO) to host our VPN. We will also use droplets with Ubuntu 22.04 installed. Set up two droplets - one for hosting our OpenVPN and the other, a private Certificate Authority (CA). Recommended droplets:
	- For hosting OpenVPN - $10 droplet
	- For hosting a private CA - $5 droplet
2. Follow this documentation to setup OpenVPN on DO: https://www.digitalocean.com/community/tutorials/how-to-set-up-and-configure-an-openvpn-server-on-ubuntu-22-04
**Please be careful and complete all the steps. Otherwise, the VPN will not work.**
3. Create two clients for OpenVPN - one will be installed on a mobile device, and the other will be installed on the system where Burp is installed.
4. After setting up the OpenVPN, we will need to create NAT rules for routing the traffic onto the Burp Suite. Create the following rules (the port number should be of the Burp):
```sh
	iptables -t nat -A PREROUTING -i tun0 -p tcp --dport 80 -j REDIRECT --to-port 8080 
	iptables -t nat -A PREROUTING -i tun0 -p tcp --dport 443 -j REDIRECT --to-port 8080
```
5. The NAT policy should look like this below:
	![image](/assets/images/nat.png)
6. Enable invisible proxy on the Burp Suite:
	![image](/assets/images/burp.png)
7. Now connect to the VPN on the mobile device and the system. This connection should capture the HTTP requests. There may be issues with the responses (requests not revolving to responses due to NAT rules that we set up earlier). Once the requests are captured, send them to the repeater tab. Disconnect the VPN and replay the requests from the repeater tab.

Thank you for stopping by! If you have any questions, comments or suggestions, please don't hesitate to reach out. 

