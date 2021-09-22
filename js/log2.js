class Sean {
    constructor(speakerName, speakText, background, character1) {
        this.speakerName = speakerName;
        this.speakText = speakText;
        this.background = background;
        this.character1 = character1;
    };
};

var data = [];

data.push(new Sean('受信音','〜♪','bookshelf','null'));
data.push(new Sean('探偵ブラン','おめでとう！！きみが最初の正かい者だ','bookshelf','blanc'));
data.push(new Sean('探偵ブラン','ぜひともわたしの助手になってくれ！','bookshelf','blanc'));
data.push(new Sean('主人公','もちろんです！','bookshelf','blanc'));
data.push(new Sean('探偵ブラン','ありがとう！早速だが説明させてもらおう','bookshelf','blanc'));
data.push(new Sean('探偵ブラン','まず、きみにはこの予告状をみてもらいたい','bookshelf','blanc'));
data.push(new Sean('探偵ブラン','見ての通りこの予告状は暗号になっている','bookshelf','blanc'));
data.push(new Sean('探偵ブラン','この内ようがわからないとわたしたちは怪盗のはん行を止めることができない','bookshelf','blanc'));
data.push(new Sean('探偵ブラン','そこで、試験を見事とっぱしたきみに、ぜひこれをといてもらいたい','bookshelf','blanc'));
data.push(new Sean('主人公','わかりました！がんばります！','bookshelf','blanc'));
data.push(new Sean('主人公','わかりました！がんばります！','bookshelf','blanc'));

var count = 0;

var skip = function () {
    var speakerName = document.getElementsByClassName("speakerName")[0].innerHTML = data[count].speakerName;
    var speakText = document.getElementsByClassName("speakText")[0].innerHTML = data[count].speakText;
    var add_contents = '<tr><td class="tableLeft">'+ speakerName +'</td><td class="tableRight">'+speakText +'</td></tr>'
    $('#log').append(add_contents);
    count++
    if(count == 10){
        $(".speakerName").css("display","none");
        $(".speakText").css("display","none");
    };
};

for(let count = 0 ;count < 10 ;count++){
    $(skip);
};