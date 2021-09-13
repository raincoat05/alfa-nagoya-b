var i = 0;
$(function () {
    $(".skipButton").click(function () {
        var text = eval('text' + i);
        $(i++);
        console.log(text);
        $('.speakText').html(text);
    });
});