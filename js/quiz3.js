$(function () {
    $("#answerBtn").click(function () {
        const value = document.getElementById("answer").value;
        console.log(value);
        $(function(){
            const answer = value ;
            if (answer == '1452'){
                console.log("正解");
                $(".hide").css("display","inline");
            }else{
                console.log("不正解");
            };
        });
    });
});