const httpProxy = require("http-proxy");

var server = httpProxy.createProxyServer({
	target: "http://catalog.roblox.com"
});

server.listen(8080);