var express = require('express');
var cors = require('cors');
var app = express();

// Some legacy browsers choke on HTTP 204
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static('public'));

app.get("/api/whoami", function (req, res) {
	
	let ip = req.socket.remoteAddress
	let lang = req.headers["accept-language"];
	let userAgent = req.headers['user-agent'];
	
	res.json({ ipaddress: ip, language: lang, software: userAgent });
});

// Return index.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(process.env.PORT || 8080, function () {
  console.log('App is listening on port ' + (process.env.PORT || 8080));
});