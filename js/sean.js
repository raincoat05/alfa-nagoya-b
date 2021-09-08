class Sean{
    constructor(speakerName,speakText,background,character1){
        this.speakerName = speakerName;
        this.speakText = speakText;
        this.background = background;
        this.character1 = character1;
    };
};

var data= [];
data.push(new Sean('探偵ブラン','おめでとう！！きみが最初の正かい者だ','sss.jpg','blanc'));
data.push(new Sean('探偵ブラン','ぜひともわたしの助手になってくれ！','sss.jpg','blanc'));
data.push(new Sean('主人公','もちろんです！','sss.jpg','blanc'));
data.push(new Sean('探偵ブラン','ありがとう！早速だが説明させてもらおう','sss.jpg','blanc'));
data.push(new Sean('探偵ブラン','まず、きみにはこの予告状をみてもらいたい','sss.jpg','blanc'));
data.push(new Sean('探偵ブラン','見ての通りこの予告状は暗号になっている','sss.jpg','blanc'));
data.push(new Sean('探偵ブラン','この内ようがわからないとわたしたちは怪盗のはん行を止めることができない','sss.jpg','blanc'));
data.push(new Sean('探偵ブラン','そこで、試験を見事とっぱしたきみに、ぜひこれをといてもらいたい','sss.jpg','blanc'));
data.push(new Sean('主人公','わかりました！がんばります！','sss.jpg','blanc'));
data.push(new Sean('探偵ブラン','ふむふむ......なるほど！きみのおかげで怪盗Noirの目的は、ルーブル美術館の絵画、「モナ・リザ」だと分かった！君のおかげだ','sss.jpg','blanc'));
data.push(new Sean('探偵ブラン','それでは早速現地に向かう','sss.jpg','blanc'));
data.push(new Sean('探偵ブラン','きみはそこからわたしをサポートしてくれ！','sss.jpg','blanc'));
data.push(new Sean('探偵ブラン','もしもし、私だ。たった今ルーブル美じゅつ館にとう着した。今から調さを行う。','sss.jpg','blanc'));
data.push(new Sean('探偵ブラン','こちらの様子はつねに私のカメラで見れるはずだし、何かあればずい時連らくするのでよろしく。','sss.jpg','blanc'));
data.push(new Sean('主人公','はい！','sss.jpg','blanc'));
data.push(new Sean('副館長','あなたが探偵のブラン氏ですね。お話はうかがっています。ただいま館長がバカンス中のため、私が案内させていただきます。','sss.jpg','fukukan'));
data.push(new Sean('探偵ブラン','こんにちは、はじめまして。本日はよろしくお願いします。','sss.jpg','blanc,fukukan.png'));
data.push(new Sean('副館長','こちらこそ。早速当館を案内しましょう。今回ねらわれている美じゅつ品「モナ・リザ」もごしょうかいします。','sss.jpg','blanc,fukukan'));
data.push(new Sean('探偵ブラン','おお、これが。','sss.jpg','blanc'));
data.push(new Sean('副館長','はい、これが "世界で最も有名で、多くの人にかんしょうされ、書かれ、歌にされ、パロディ化された" と言われる有名な絵画「モナ・リザ」です。','sss.jpg','fukukan'));
data.push(new Sean('副館長','「モナ・リザ」はもともとそこまで有名な作品ではありませんでした。','sss.jpg','fukukan'));
data.push(new Sean('副館長','しかし、かの有名な画家のピカソもまきこんだとうなん事けんによって、世界から大きく注目され、今では世界で最も有名な絵画とよばれるようになったのです。','sss.jpg','fukukan'));
data.push(new Sean('副館長','そのかちはげんざい約900億円以上にもなると言われています。','sss.jpg','fukukan'));
data.push(new Sean('主人公','900億円？！？？！？？？！？','sss.jpg','blanc,fukukan'));
data.push(new Sean('探偵ブラン','なるほど。芸じゅつ的にも金せん的にもかちがあるということですね。','sss.jpg','blanc,fukukan'));
data.push(new Sean('副館長','そうなのです。今回の予告状を受けて、当館もセキュリティを強化しました。いくら怪盗Noirでも、かんたんにぬすむことはできないでしょう。','sss.jpg','blanc,fukukan'));
data.push(new Sean('探偵ブラン','それはそれは！','sss.jpg','blanc,fukukan'));

var count = 0;

var skip = function(){
    document.getElementsByClassName("speakerName")[0].innerHTML=data[count].speakerName;
    document.getElementsByClassName("speakText")[0].innerHTML=data[count].speakText;
    document.getElementById("background").src='./img/background/'+ data[count].background;
    document.getElementById("character1").src='./img/character/'+ data[count].character1+ '.png';
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