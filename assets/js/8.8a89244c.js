(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{362:function(e,s,a){"use strict";a.r(s);var t=a(12),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("social-share"),e._v(" "),a("h1",{attrs:{id:"expose-local-service-ssh-tunnel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expose-local-service-ssh-tunnel"}},[e._v("#")]),e._v(" Expose local service (SSH tunnel)")]),e._v(" "),a("p",[e._v("Somehow, you need to expose a local service to the Internet such a webservice running in a Raspberry Pi. However, you are not able\nto do it on usual ways such as static IP address or DynDNS due to whatever reason or simply, you just want to make your own "),a("a",{attrs:{href:"https://ngrok.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ngrok"),a("OutboundLink")],1),e._v(" like system.")]),e._v(" "),a("h3",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("ul",[a("li",[e._v("Device with the webservice expected to be exposed. For our example, a Raspberry Pi 3B+ with Internet access connected to our router (it's in our local network). About $35.")]),e._v(" "),a("li",[e._v("External server with static address. For our example, an AWS t2.nano instance with Ubuntu server 18.04 installed. About $5/month.")]),e._v(" "),a("li",[e._v("Custom domain, for our example, example.com")]),e._v(" "),a("li",[e._v("Optionally, you may want to use a laptop to make things from here using SSH, but you don't really need it.")]),e._v(" "),a("li",[e._v("A little bit of Linux and networking knowledge.")])]),e._v(" "),a("h3",{attrs:{id:"server-aws-t2-nano-instance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server-aws-t2-nano-instance"}},[e._v("#")]),e._v(" Server | AWS t2.nano instance")]),e._v(" "),a("p",[e._v("Security groups:")]),e._v(" "),a("ul",[a("li",[e._v("Inbound\n"),a("ul",[a("li",[e._v("HTTP/TCP 80 from everywhere (0.0.0.0)")]),e._v(" "),a("li",[e._v("SSH/TCP 22 from everywhere (0.0.0.0)")])])]),e._v(" "),a("li",[e._v("Outbound\n"),a("ul",[a("li",[e._v("All")])])])]),e._v(" "),a("h4",{attrs:{id:"install-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-nginx"}},[e._v("#")]),e._v(" Install NGINX")]),e._v(" "),a("p",[e._v("Update the apt packages, install NGINX, enable the NGINX service, start the NGINX service.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" update\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" nginx\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("enable")]),e._v(" nginx\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl start nginx\n")])])]),a("h4",{attrs:{id:"configure-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-nginx"}},[e._v("#")]),e._v(" Configure NGINX")]),e._v(" "),a("p",[e._v("Create a server file to listen to our subdomain on port 80 (default):")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("touch")]),e._v(" /etc/nginx/sites-enabled/example-server\n")])])]),a("p",[e._v("Use a text editor such as "),a("code",[e._v("vi")]),e._v(" or "),a("code",[e._v("nano")]),e._v(" and copy and paste the next configuration, once done, save and exit:")]),e._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("server")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Our subdomain, change with your own")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("server_name")]),e._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Log file location")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("access_log")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("var"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("log"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("location")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Where to send incoming requests")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_pass")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3334")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_set_header")]),e._v(" X"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Real"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("IP "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$remote_addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_set_header")]),e._v(" Host "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_set_header")]),e._v(" X"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Forwarded"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("For "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$proxy_add_x_forwarded_for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_redirect")]),e._v(" off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Next two lines allow to proxy websocket connections :)")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_set_header")]),e._v(" Upgrade "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$http_upgrade")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_set_header")]),e._v(" Connection "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Upgrade"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("error_page")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("502")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("50")]),e._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("location")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("50")]),e._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("html "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("root")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("share"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("Our NGINX is now redirecting every request coming from "),a("code",[e._v("foo.example.com")]),e._v(" port "),a("code",[e._v("80")]),e._v(" to "),a("code",[e._v("http://localhost:3334")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"configure-domain-and-subdomain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-domain-and-subdomain"}},[e._v("#")]),e._v(" Configure domain and subdomain")]),e._v(" "),a("p",[e._v("Point both "),a("code",[e._v("example.com")]),e._v(" and "),a("code",[e._v("foo.example.com")]),e._v(" to the AWS instance address. For our example, the instance address is "),a("code",[e._v("1.1.1.1")]),e._v(". How to do it mainly depends on your domain provider but essentially you should see the next entries on your DNS configuration:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("example.com       A   1.1.1.1\nfoo.example.com   A   1.1.1.1\n")])])]),a("p",[e._v("That's two "),a("code",[e._v("A")]),e._v(" entries pointing to "),a("code",[e._v("1.1.1.1")]),e._v(".")]),e._v(" "),a("p",[e._v("At this point, and if the DNS are working properly, you can visit "),a("code",[e._v("foo.example.com")]),e._v(" on your browser and you should see a NGINX error (502 or 404), but this is good, our NGINX is properly handling our request from our subdomain.")]),e._v(" "),a("h4",{attrs:{id:"create-a-limited-user"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-limited-user"}},[e._v("#")]),e._v(" Create a limited user")]),e._v(" "),a("p",[e._v("Since we don't want to use an administrator user for our tunnels, let's create a limited user, for our example, the user will be "),a("code",[e._v("tunnel")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("useradd")]),e._v(" -m tunnel -s /bin/false\n")])])]),a("p",[e._v("Prepare the "),a("code",[e._v(".ssh")]),e._v(" directory for the user "),a("code",[e._v("tunnel")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" /home/tunnel/.ssh\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("touch")]),e._v(" /home/tunnel/.ssh/authorized_keys\n")])])]),a("h3",{attrs:{id:"client-raspberry-pi-3b"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-raspberry-pi-3b"}},[e._v("#")]),e._v(" Client | Raspberry PI 3B+")]),e._v(" "),a("h4",{attrs:{id:"create-ssh-key-pair"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-ssh-key-pair"}},[e._v("#")]),e._v(" Create SSH key pair")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("$ ssh-keygen -t rsa -b "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4096")]),e._v(" -C "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"your_email@example.com"')]),e._v("\n")])])]),a("p",[e._v("When asked, save your key pair in "),a("code",[e._v("/home/<raspberry-pi-user>/.ssh/id_rsa_tunnel_example_com")]),e._v(". Now you should see the key pair:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" /home/"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("raspberry-pi-user"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/.ssh\nid_rsa_tunnel_example_com\nid_rsa_tunnel_example_com.pub\n")])])]),a("p",[e._v("Copy the public key to the authorized keys in your server:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Copy this")]),e._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" /home/"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("raspberry-pi-user"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/.ssh/id_rsa_tunnel_example_com.pub \n")])])]),a("p",[e._v("Now, in your server (the AWS instance):")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Open authorized_keys and append your public key from the Raspberry")]),e._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("nano")]),e._v(" /home/tunnel/.ssh/authorized_keys\n")])])]),a("p",[e._v("There are plenty of ways to do the copy & paste, but this is easy to do for any kind of user.")]),e._v(" "),a("h4",{attrs:{id:"create-a-systemd-dynamic-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-systemd-dynamic-service"}},[e._v("#")]),e._v(" Create a systemd dynamic service")]),e._v(" "),a("p",[e._v("Create the service file:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("touch")]),e._v(" /etc/systemd/system/secure-tunnel@.service\n")])])]),a("p",[e._v("Open the created file and paste the next lines:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("nano")]),e._v(" /etc/systemd/system/secure-tunnel@.service\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Description")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("Setup a secure tunnel to %I\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("After")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("network.target\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Environment")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"LOCAL_ADDR=localhost"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("EnvironmentFile")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/default/secure-tunnel@%i\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/usr/bin/ssh -NT -o "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ServerAliveInterval")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("60")]),e._v(" -o "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ExitOnForwardFailure")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("yes -i "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${SSH_KEY}")]),e._v(" -R "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${TUNNEL_PORT}")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${LOCAL_ADDRESS}")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${LOCAL_PORT}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${TARGET}")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Restart every >2 seconds to avoid StartLimitInterval failure")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("RestartSec")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Restart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("always\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("WantedBy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("multi-user.target\n")])])]),a("p",[e._v("Now create a defaults file, which allows us to have a custom service for our dynamic service:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("nano")]),e._v(" /etc/default/secure-tunnel@foo_example_com\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("TARGET")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("tunnel@example.com\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("LOCAL_ADDRESS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("127.0")]),e._v(".0.1\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("LOCAL_PORT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8080")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("TUNNEL_PORT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3334")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("SSH_KEY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/home/user/.ssh/id_rsa_foo_example_com\n")])])]),a("p",[e._v("Enable the service:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("enable")]),e._v(" secure-tunnel@foo_example_com\n")])])]),a("p",[e._v("If all went fine, now you have a SSH reverse tunnel from the AWS instance to your Raspberry PI.")]),e._v(" "),a("h4",{attrs:{id:"what-is-going-on"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-going-on"}},[e._v("#")]),e._v(" What is going on?")]),e._v(" "),a("p",[e._v("Every request to "),a("code",[e._v("foo.example.com")]),e._v(" is going to the AWS instance ("),a("code",[e._v("1.1.1.1")]),e._v("), once there, NGINX is redirecting it "),a("code",[e._v("localhost:3334")]),e._v(". The Raspberry Pi has a reverse SSH tunnel which links the AWS instance port "),a("code",[e._v("3334")]),e._v(" to the Raspberry Pi port "),a("code",[e._v("8080")]),e._v(". This means, when you visit "),a("code",[e._v("foo.example.com")]),e._v(" you'll end in the port "),a("code",[e._v("8080")]),e._v(" of your Raspberry Pi.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("foo.example.com <------\x3e Raspberry Pi port 8080\n")])])]),a("h3",{attrs:{id:"test"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test"}},[e._v("#")]),e._v(" Test")]),e._v(" "),a("p",[e._v("Launch a static server in your Raspberry Pi:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("$ python -m SimpleHTTPServer "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8080")]),e._v("\n")])])]),a("p",[e._v("Now, if you visit "),a("code",[e._v("foo.example.com")]),e._v(", you'll see the content served by the Raspberry Pi on port 8080 through the Python static server we just run.")]),e._v(" "),a("h3",{attrs:{id:"adding-more-services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-more-services"}},[e._v("#")]),e._v(" Adding more services")]),e._v(" "),a("p",[e._v("This is pretty simple now:")]),e._v(" "),a("p",[e._v("Create a new "),a("code",[e._v("A")]),e._v(" entry for your domain, pointing to the AWS instance, for example "),a("code",[e._v("bar.example.com")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("example.com      A  1.1.1.1\nfoo.example.com  A  1.1.1.1\nbar.example.com  A  1.1.1.1\n")])])]),a("p",[e._v("Add a new NGINX server listening to a different domain ("),a("code",[e._v("bar.example.com")]),e._v(") and redirecting to a different port. Instead of "),a("code",[e._v("3334")]),e._v(" use "),a("code",[e._v("3335")]),e._v(" for example. Reload the NGINX configuration.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" /etc/nginx/sites-enabled/foo_example_com /etc/nginx/sites-enabled/bar_example_com\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Replace the values for the new service (subdomain and localhost port)")]),e._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("nano")]),e._v(" /etc/nginx/sites-enabled/bar_example_com\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" nginx -s reload\n")])])]),a("p",[e._v("Create a new service file in your Raspberry Pi, "),a("code",[e._v("/etc/default/secure-tunnel@bar_example_com")]),e._v(" and replace "),a("code",[e._v("TUNNEL_PORT")]),e._v(" by "),a("code",[e._v("3335")]),e._v(" and "),a("code",[e._v("LOCAL_PORT")]),e._v(" by the port of the new service. Enable the service and start it.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" /etc/default/secure-tunnel@foo_example_com /etc/default/secure-tunnel@bar_example_com\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Replace tunnel port and local port")]),e._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("nano")]),e._v(" /etc/default/secure-tunnel@bar_example_com\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("enable")]),e._v(" secure-tunnel@bar_example_com\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl start secure-tunnel@bar_example_com\n")])])]),a("h3",{attrs:{id:"tls-and-security-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tls-and-security-notes"}},[e._v("#")]),e._v(" TLS and security notes")]),e._v(" "),a("p",[e._v("Right now, you configured an architecture which works for HTTP requests, if you want to use HTTPS you'll need a certificate, configure NGINX and (probably) configure your service. The purpose of this tutorial is not to cover security concerns, just showing how to implement the solution. Security can be larger than expected to explain, but if you really know what it is, then you'll have no problem to configure it.")]),e._v(" "),a("p",[e._v("Besides that, the tunnel is secure (SSH) and your Raspberry is not exposed at all, we are mapping ports from a remote AWS instance to a local port in your Raspberry, also, we are using the user "),a("code",[e._v("tunnel")]),e._v(" which has limited privileges and has "),a("code",[e._v("/bin/false")]),e._v(" as user's shell.")]),e._v(" "),a("h3",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[e._v("As we can see, there is at least an alternative to Ngrok and for people that can't use DDNS, people under a NAT or just curious people, all of them  can expose services in a secure way.")]),e._v(" "),a("Disqus")],1)}),[],!1,null,null,null);s.default=n.exports}}]);