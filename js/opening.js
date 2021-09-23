$(function(){
    $("#titlevisual").click(function(){
        $("#titlevisual").css("display","none");
        $("#opening").show();
        $("#startGame").css("display","flex");
        setTimeout(() => {
            $("#footer").show();
        }, 90000);
    });
});