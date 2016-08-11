var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var drew = new TeamMember("Drew", "Hey this is my bio", "./assets/imgs/Drew Wiskus.jpg");
var tyler = new TeamMember("Tyler", "Hey this TYLERSZ is my bio", "./assets/imgs/Tyler Rapson 2.jpg");
var josh = new TeamMember("Josh", "Hey this JOSH is my bio", "./assets/imgs/Josh Gressman 2.jpg");
var jerry = new TeamMember("Jerry", "Hey this JERRRY is my bio", "./assets/imgs/Jerry Lee 2.jpg");

var team = [drew, tyler, josh, jerry];

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/bios', function(req, res) {
    console.log("works?");
    res.send(team);
});

app.get('/likes', function(req, res) {
    res.send(team);
});

app.post('/likes', function(req, res) {
    console.log('prereq:', team);
    team = req.body;
    console.log('postreq', team);
});


app.get('/*', function(req, res) {
    var file = req.params[0] || '/view/index.html';
    res.sendFile(path.join(__dirname, './public', file));
});



app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
    console.log('server is running on port', app.get('port'));
});

function TeamMember(name, bio, img) {
    this.name = name;
    this.bios = bio;
    this.img = img;
    this.likes = 0;
}
