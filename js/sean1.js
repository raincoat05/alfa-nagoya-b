class Sean{
    constructor(speakerName,speakText,background,character1){
        this.speakerName = speakerName;
        this.speakText = speakText;
        this.background = background;
        this.character1 = character1;
    };
};

var data= [];
//謎1正解後
data.push(new Sean('受信音','〜♪','museumOutside.jpg','null'));
data.push(new Sean('探偵ブラン','おめでとう！！きみが最初の正かい者だ','museumOutside.jpg','blanc'));
data.push(new Sean('探偵ブラン','ぜひともわたしの助手になってくれ！','museumOutside.jpg','blanc'));
data.push(new Sean('主人公','もちろんです！','museumOutside.jpg','blanc'));
data.push(new Sean('探偵ブラン','ありがとう！早速だが説明させてもらおう','museumOutside.jpg','blanc'));
data.push(new Sean('探偵ブラン','まず、きみにはこの予告状をみてもらいたい','museumOutside.jpg','blanc'));
data.push(new Sean('探偵ブラン','見ての通りこの予告状は暗号になっている','museumOutside.jpg','blanc'));
data.push(new Sean('探偵ブラン','この内ようがわからないとわたしたちは怪盗のはん行を止めることができない','museumOutside.jpg','blanc'));
data.push(new Sean('探偵ブラン','そこで、試験を見事とっぱしたきみに、ぜひこれをといてもらいたい','museumOutside.jpg','blanc'));
data.push(new Sean('主人公','わかりました！がんばります！','museumOutside.jpg','blanc'));
data.push(new Sean('主人公','わかりました！がんばります！','museumOutside.jpg','blanc'));
//謎2に飛ぶ

var count = 0;

var skip = function(){
    document.getElementsByClassName("speakerName")[0].innerHTML=data[count].speakerName;
    document.getElementsByClassName("speakText")[0].innerHTML=data[count].speakText;
    document.getElementById("background").src='./img/background/'+ data[count].background;
    document.getElementById("character1").src='./img/character/'+ data[count].character1+ '.png';
    count++;
    console.log(count);
    if(count == 11){
        window.location.href = "/quiz1.html";
    };
};


$(function(){
    $(skip);
});

$(function () {
    $(".skipButton").click(function () {
        $(skip);
    });
});