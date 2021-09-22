$(function () {
    $("#answerBtn").click(function () {
        const value = document.getElementById("answer").value;
        console.log(value);
        $(function (
        ){
            const answer = value;
            if (answer == '1452') {
                $(".clear").html("正解!!")
                $(".clearText").html("次のストーリーに進む");
                $(".clear").css("display", "inline");
                $(".quizText").css("display", "none");
                $(".quizImg").css("display", "none");
                $("#answerContainer").css("display", "none");
            } else {
                $(".notClear").html("不正解");
                $(".notClearText").html("もう一度");
                $(".notClear").css("display", "inline");
                $(".quizText").css("display", "none");
                $(".quizImg").css("display", "none");
                $("#answerContainer").css("display", "none");
            };
        });
    });
});

var media = document.getElementById("audio");
media.volume = 1