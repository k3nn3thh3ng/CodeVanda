const express        = require('express');
const app            = express();
const port           = process.env.PORT || 3000;
const path           = require('path');

app.use(express.static(path.join(__dirname, 'Client', 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'Client', 'build', 'index.html'));
});

//Server Connection
app.listen(port, function(){
	console.log(`app.js server listening at http://localhost:${port}`)
})
