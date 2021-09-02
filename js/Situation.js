class Seen{
    constructor(name, text, background){
        this.name = name;
        this.text = text;
        this.background = background;
    };
};

var data= [];
data.push(new Seen('hanako','やあa','th.jpeg'));
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