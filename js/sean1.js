class Sean {
    constructor(speakerName, speakText, background, character1) {
        this.speakerName = speakerName;
        this.speakText = speakText;
        this.background = background;
        this.character1 = character1;
    };
};

var data = [];
//**
//謎1正解後
//**
data.push(new Sean('受信音','〜♪','bookshelf','null'));
data.push(new Sean('探偵ブラン','おめでとう！！きみが最初の正かい者だ','bookshelf','blanc'));
data.push(new Sean('探偵ブラン','ぜひともわたしの助手になってくれ！','bookshelf','blanc'));
data.push(new Sean('主人公','もちろんです！','bookshelf','blanc'));
data.push(new Sean('探偵ブラン','ありがとう！早速だが説明させてもらおう','bookshelf','blanc'));
data.push(new Sean('探偵ブラン','まず、きみにはこの予告状をみてもらいたい','bookshelf','blanc'));
data.push(new Sean('探偵ブラン','まず、きみにはこの予告状をみてもらいたい','preview','blanc'));
data.push(new Sean('探偵ブラン','見ての通りこの予告状は暗号になっている','bookshelf','blanc'));
data.push(new Sean('探偵ブラン','この内ようがわからないとわたしたちは怪盗のはん行を止めることができない','bookshelf','blanc'));
data.push(new Sean('探偵ブラン','そこで、試験を見事とっぱしたきみに、ぜひこれをといてもらいたい','bookshelf','blanc'));
data.push(new Sean('主人公','わかりました！がんばります！','bookshelf','blanc'));
data.push(new Sean('主人公','わかりました！がんばります！','bookshelf','blanc'));
//**
//謎2
//**

var count = 0;

var skip = function () {
    document.getElementsByClassName("speakerName")[0].innerHTML = data[count].speakerName;
    document.getElementsByClassName("speakText")[0].innerHTML = data[count].speakText;
    document.getElementById("background").src = './img/background/' + data[count].background + '.jpg';
    document.getElementById("character1").src = './img/character/' + data[count].character1 + '.png';
    count++;

    if (count == 1) {
        var media = document.getElementById("audio");
        media.volume = 0.12
    }
    if (count == 7) {
        $("#textBox").css("display", "none");
        $("#background").css("filter", "none");
        $("#characterBox").css("display", "none");
    } else {
        $("#textBox").css("display", "block");
        $("#background").css("filter", "blur(2px) grayscale(90%)");
        $("#characterBox").css("display", "block");
    }
    if (count == 12) {
        window.location.href = "/beta-nagoya-b/quiz2.html";
    };
};


$(function () {
    $(skip);
});

$(function () {
    $(".skipButton").click(function () {
        $(skip);
        $(".skipButton").css("display", "none");
        setTimeout(() => {
            $(".skipButton").css("display", "block");
        }, 500);
    });
});

$(function () {
    $(".exskip").click(function () {
        if (count == 7) {
            $(skip);
        }
    });
});

var media = document.getElementById("audio");
media.volume = 0.14