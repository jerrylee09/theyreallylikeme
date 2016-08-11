$(document).ready(function() {
    appendDom();
    $('#container').on("click", "button", function() {
        // teamMemberName = this.id;
        // teamMemberInc();
    });

    function appendDom() {
        console.log("works");
        $.ajax({
            type: 'GET',
            url: '/bios',
            success: function(team) {
                team.forEach(function(person, i) {
                    $("#container").append('<div class="teamMember"> <img src="' + person.img + '"/><h3>' + person.name + '</h3><p>' + person.bios + '</p><button id="' + person.name + '">LIKE MEE</button></div>');

                });
            },
            error: function() {
                console.log('/GET Bios Didnt Work');
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
