$(function () {
    $(".answerBtn").click(function () {
        const value = document.getElementById("answer").value;
        console.log(value);
        $(function(){
            const answer = value ;
            if (answer == 'aaa'){
                console.log("正解");
                $("a").css("display","block");
            }else{
                console.log("不正解");
            };
        });
    });
});