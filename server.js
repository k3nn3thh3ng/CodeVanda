const express        = require('express'),
      app            = express(),
      port           = process.env.PORT || 3000,
      path           = require('path'),
	  throng         = require('throng');

function start(id) {
	var env = app.get("env");
	
	app.use(express.static(path.join(__dirname, 'Client', 'build')));

	app.get('/*', (req, res) => {
	  res.sendFile(path.join(__dirname, 'Client', 'build', 'index.html'));
	});

	//Server Connection
	app.listen(port, function(){
		console.log("Running in " + env +" on port " + port + " and my worker ID is " + id +".");
	})
}


var WORKERS = process.env.WEB_CONCURRENCY || 1;
throng({
    workers: WORKERS,
    lifetime: Infinity,
    start: start
});