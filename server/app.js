var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var drew = new TeamMember("DrewWiskus", "Hey this is my bio", "./assets/imgs/Drew Wiskus.jpg");
var tyler = new TeamMember("TylerRapson", "Hey this TYLERSZ is my bio", "./assets/imgs/Tyler Rapson 2.jpg");
var josh = new TeamMember("JoshGressman", "Hey this JOSH is my bio", "./assets/imgs/Josh Gressman 2.jpg");
var jerry = new TeamMember("JerryLee", "Hey this JERRRY is my bio", "./assets/imgs/Jerry Lee 2.jpg");

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

var likeUpdate = {
    name: "Drew",
    likes: 4
};
app.post('/likes', function(req, res) {
    //res.head(201);
    console.log("post /likes req", req.body);

    incLikes(req.body);
    res.send(likeUpdate);

});

function incLikes(personObject) {
    console.log("works?");
    console.log(personObject);

    team.forEach(function(teamMember, i) {
        if (personObject.name == teamMember.name) {
            team[i].likes++;
            console.log(team[i].likes);
            likeUpdate.name = teamMember.name;
            likeUpdate.likes = teamMember.likes;
        }
    });


}
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
