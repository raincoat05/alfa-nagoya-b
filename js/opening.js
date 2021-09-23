$(function(){
    $("#titlevisual").click(function(){
        $("#titlevisual").css("display","none");
        $("#opening").show();
        setTimeout(() => {
            $("#startGame").css("display","flex");
            $("#footer").show();
        }, 90000);
    });
});