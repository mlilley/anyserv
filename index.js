require('http').createServer(function (req, res) {
    console.log(req.url, req.socket.remoteAddress, req.headers['x-forwarded-for']);
    res.write(req.url + " -> " + ['yo dawg!', 'hot diggity!', 'ringadingding!'][Math.floor(Math.random()*3)]); 
    res.end();
}).listen(4099);
