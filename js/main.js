// $(function () {
//     $(".speaker").html(text000);
//     console.log(text000);
// });

var i = 0;
$(function () {
    $(".skipButton").click(function () {
        var text = eval('text' + i);
        $(i++);
        console.log(text);
        $('.speakText').html(text);
    });
});
