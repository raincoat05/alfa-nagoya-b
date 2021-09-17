$(function () {
    $("#answerBtn").click(function () {
        const value = document.getElementById("answer").value;
        console.log(value);
        $(function(){
            const answer = value ;
            if (answer == 'ピエロ','ぴえろ'){
                console.log("正解");
                $(".hide").css("display","inline");
                $(".quizText").css("display","none");
                $(".quizImg").css("display","none");
                $("#answerContainer").css("display","none");
                $("#quizContainer").css("height","40vh");
            }else{
                console.log("不正解");
            };
        });
    });
});