$(function () {
    $("#answerBtn").click(function () {
        const value = document.getElementById("answer").value;
        console.log(value);
        $(function (

        ) {
            const answer = value;
            if (answer == 'モナリザ' || answer == 'もなりざ') {
                $(".clear").html("正解!!")
                $(".clearText").html("次のストーリーに進む");
                $(".notClearHint").css("display", "none");
                $(".clear").css("display", "inline");
                $(".quizText").css("display", "none");
                $(".quizImg").css("display", "none");
                $("#answerContainer").css("display", "none");
                $(".logLink").css("display","none");
            } else {
                $(".notClear").html("不正解");
                $(".notClearText").html("もう一度");
                $(".notClearHint").html("50音表に当てはめてみると...");
                $(".notClearHint").css("display", "inline");
                $(".notClear").css("display", "inline");
                $(".quizText").css("display", "none");
                $(".quizImg").css("display", "none");
                $("#answerContainer").css("display", "none");
                $(".logLink").css("display","none");
            };
        });
    });
});
window.onload = function () {
    document.getElementById("audio").src = './audio/quiz.mp3';
    var media = document.getElementById("audio");
    media.volume = 1
}