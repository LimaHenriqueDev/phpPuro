$(document).ready(function(){
function getMenus() {
    $.ajax({
        url: 'http://camerascomputex.ddns.net:8080/escola/mobile_login.php?matricula=2011004&senha=99999999&token=X&so=ios',
        method: 'GET',
        dataType: 'json'
    }).done(function(response){
        console.log(response);
        
        // $(".nav flex-column")
        // for (var i = 0; i < response.length; i++) {
        //     $('.box_comment').prepend('<div class="b_comm"><h4>' + response[i].name + '</h4><p>' + response[i].comment + '</p></div>');
        // }
    });
}
getMenus();

})
