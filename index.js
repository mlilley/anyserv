require('http').createServer(function (req, res) {
    res.write(['yo dawg!', 'hot diggity!', 'ringadingding!'][Math.floor(Math.random()*3)]); 
    res.end();
}).listen(8080);