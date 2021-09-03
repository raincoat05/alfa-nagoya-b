class Seen{
    constructor(speakerName,speakText,background,character1,character2,sideCharacter,){
        this.speakerName = speakerName;
        this.speakText = speakText;
        this.background = background;
        this.character1 = character1;
        this.character2 = character2;
        this.sideCharacter = sideCharacter;
    };
};

var data= [];
data.push(new Seen('hanako','iiiiii','th.jpeg'));
data.push(new Seen('tarou','こんにちは','th2.jpeg'));
data.push(new Seen('hanako','やあ','th.jpeg'));
data.push(new Seen('tarou','こんにちは','th.jpeg'));

var count = 0;

var skip = function(){
    document.getElementsByClassName("speaker")[0].innerHTML=data[count].name;
    document.getElementsByClassName("speakText")[0].innerHTML=data[count].text;
    document.getElementById("background").src='./img/background/'+ data[count].background;
    document.getElementById("mainCharacter").src='./img/character/'+ data[count].name+ '.png';
    console.log(data[count].name);
    console.log(data[count].text);
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