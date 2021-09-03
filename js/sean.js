class Sean{
    constructor(speakerName,speakText,background,character1,character2){
        this.speakerName = speakerName;
        this.speakText = speakText;
        this.background = background;
        this.character1 = character1;
        this.character2 = character2;
    };
};

var data= [];
data.push(new Sean('hanako','iiiiii','th.jpeg','character1','character2'));
data.push(new Sean('hanako','iiiiii','th.jpeg','character2','character2'));
data.push(new Sean('hanako','iiiiii','th.jpeg','character1','character1'));

var count = 0;

var skip = function(){
    document.getElementsByClassName("speakerName")[0].innerHTML=data[count].speakerName;
    document.getElementsByClassName("speakText")[0].innerHTML=data[count].speakText;
    document.getElementById("background").src='../img/background/'+ data[count].background;
    document.getElementById("character1").src='../img/character/'+ data[count].character1+ '.png';
    document.getElementById("character2").src='../img/character/'+ data[count].character2+ '.png';
    count++;
};

$(function(){
    $(skip);
});

$(function () {
    $(".skipButton").click(function () {
        $(skip);
    });
});