var express = require('express');
var cors = require('cors');
var app = express();

function isValidDate(inputDate) {
	return inputDate && inputDate.getTime && !isNaN(inputDate.getTime());
}

// Some legacy browsers choke on HTTP 204
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static('public'));

app.get("/api/", function (req, res) {
	
	let today = new Date()
	
	res.json({ unix: today.valueOf(), utc: today.toGMTString() });
});

// Return index.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(process.env.PORT || 8080, function () {
  console.log('App is listening on port ' + (process.env.PORT || 8080));
});