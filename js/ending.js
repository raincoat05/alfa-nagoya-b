class Sean{
    constructor(speakerName,speakText,background,character1){
        this.speakerName = speakerName;
        this.speakText = speakText;
        this.background = background;
        this.character1 = character1;
    };
};

var data= [];
//エンディング
data.push(new Sean('事件解決後',' ','monalisa','null'));
data.push(new Sean('主人公','ところでブランさん、入れかわっていた時を思い返すと、Noirとやけに顔にてませんか......？','monalisa','blanc'));
data.push(new Sean('探偵ブラン','ああそれは、ふたごなんだよ','monalisa','blanc'));
data.push(new Sean('主人公','え？','monalisa','blanc'));
data.push(new Sean('探偵ブラン','おっと、次のいらい人によばれてしまった　少し席を外すよ　それでは失礼','monalisa','blanc'));
data.push(new Sean('主人公','ちょっとブランさん？！','monalisa','null'));
//家にて
data.push(new Sean('自宅にて',' ','room','null'));
data.push(new Sean('主人公','ふぅ......','room','null'));
data.push(new Sean('主人公','すごく大変だったなぁー。まさかブランさんと怪盗Noirがふたごだったなんて。','room','null'));
data.push(new Sean('主人公','......どっちが姉なんだ？','room','null'));
data.push(new Sean('メールの着信音','〜♪','room','null'));
data.push(new Sean('主人公','？？？','room','null'));
data.push(new Sean('主人公','Noir......Noir！？','room','null'));
data.push(new Sean('主人公','Noir......Noir！？','clear','null'));
//メールの画像表示、真のエンディング？

var count = 0;

var skip = function(){
    document.getElementsByClassName("speakerName")[0].innerHTML=data[count].speakerName;
    document.getElementsByClassName("speakText")[0].innerHTML=data[count].speakText;
    document.getElementById("background").src='./img/background/'+ data[count].background + '.jpg';
    document.getElementById("character1").src='./img/character/'+ data[count].character1 + '.png';
    count++;
    if(count == 1){
        document.getElementById("audio").src = './audio/ending.mp3';
        var media = document.getElementById("audio");
        media.volume = 0.5
    }
    if(count == 14){
        $("#textBox").css("display","none");
        $("#background").css("filter", "none");
        $("#characterBox").css("display","none");
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