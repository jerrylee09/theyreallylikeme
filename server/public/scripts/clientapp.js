$(document).ready(function() {
    appendDom();

    var teamMates = [];
    $('#container').on("click", "button", function() {
        var memberid = this.id;
        //console.log(this.id);
        var teamMember = {
            name: memberid
        };
        postLikes(teamMember);
        updateLikes();


    });

    function appendDom() {
        console.log("works");
        $.ajax({
            type: 'GET',
            url: '/bios',
            success: function(team) {

                team.forEach(function(person, i) {
                    $("#container").append('<div class="teamMember"> <img src="' + person.img + '"/><h3>' + person.name + '</h3><p>' + person.bios + '</p><button id="' + person.name + '">LIKE MEE</button><p>Likes: <span id="' + person.name + 'likes">' + person.likes + '</span></p></div>');

                });
            },
            error: function() {
                console.log('/GET Bios Didnt Work');
            }
        });
    }



    function updateLikes() {
        $.ajax({
            type: 'GET',
            url: '/likes',
            success: function(data) {
                data.forEach(function(teammember, i) {

                });
            },
            error: function() {
                console.log("/likes get didnt work");
            }
        });
        //console.log(theTeam);
    }

    function postLikes(memberName) {

        $.ajax({
            type: 'POST',
            url: '/likes',
            data: memberName,
            success: function(data) {

                $("#" + data.name + "likes").text(data.likes);

            }
        });
    }



    //
    // function likes() {
    //
    //     $.ajax({
    //         type: 'GET',
    //         url: '/likes',
    //         success: function(data) {
    //             console.log(data);
    //             data.forEach(function(teamMember, i) {
    //                 if (teamMember.name == teamMemberName) {
    //                     teamMemberInc(data);
    //                     console.log(teamMember.name + "likes = " + teamMember.likes);
    //
    //                 }
    //             });
    //         },
    //         error: function() {
    //             console.log("likeGET didntwork");
    //         }
    //     });
    //
    //     function teamMemberInc(team) {
    //         $.ajax({
    //             type: 'POST',
    //             url: '/likes',
    //             success: function(data) {
    //                 likes();
    //             }
    //         });
    //     }
    // }
});
