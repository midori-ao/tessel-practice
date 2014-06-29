var tessel = require('tessel');
var express = require("express");
var app = express();

var led1 = tessel.led[0].output(1);
var led2 = tessel.led[1].output(0);

app.get("/toggle", function(req,res){
  res.writeHead(200, {"Content-Type": "text/plain"});
    res.write('OK');
    res.end();

    setInterval(function() {
      console.log("I'm blinking! (Press CTRL+ C to stop)");
      led1.toggle();
      led2.toggle();

    }, 300);
});

app.listen(4002);
console.log('Server is listening');