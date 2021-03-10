const express        = require('express');
const app            = express();
const port           = process.env.PORT || 3001;


app.get('/', function (req, res) {
  res.send('Hello World')
})

//Server Connection
app.listen(port, function(){
	console.log(`app.js server listening at http://localhost:${port}`)
})
