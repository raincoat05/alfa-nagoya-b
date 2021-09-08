class Sean{
    constructor(speakerName,speakText,background,character1){
        this.speakerName = speakerName;
        this.speakText = speakText;
        this.background = background;
        this.character1 = character1;
    };
};

var data= [];
data.push(new Sean('speaker','text','sss.jpg','blanc'));
data.push(new Sean('speaker','text','sss.jpg','noir,blanc'));
data.push(new Sean('speaker','text','sss.jpg','noir'));

var count = 0;

var skip = function(){
    document.getElementsByClassName("speakerName")[0].innerHTML=data[count].speakerName;
    document.getElementsByClassName("speakText")[0].innerHTML=data[count].speakText;
    document.getElementById("background").src='../img/background/'+ data[count].background;
    document.getElementById("character1").src='../img/character/'+ data[count].character1+ '.png';
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