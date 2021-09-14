class Sean{
    constructor(speakerName,speakText,background,character1){
        this.speakerName = speakerName;
        this.speakText = speakText;
        this.background = background;
        this.character1 = character1;
    };
};

var data= [];
data.push(new Sean('主人公','ブランさん！パスワードが分かりました！','background','blanc'));
data.push(new Sean('探偵ブラン','本当かい？私もだ！','background','blanc'));
data.push(new Sean('主人公','パスワードは「1452」です！','background','blanc'));
data.push(new Sean('探偵ブラン','ありがとう！私の分と合わせると......','background','blanc'));
data.push(new Sean('探偵ブラン','「14520415」','background','blanc'));
data.push(new Sean('探偵ブラン','「モナ・リザ」の作者であるレオナルド・ダ・ヴィンチの生年月日じゃないか！','background','blanc'));
data.push(new Sean('主人公','館長はどれだけ「モナ・リザ」が好きなんだ......','background','blanc,fukukan'));
data.push(new Sean('副館長','それでは、ぼうはんシステムを起動します。','background','fukukan'));
data.push(new Sean('副館長','......よし！出入り口のふうさに成功しました。','background','fukukan'));
data.push(new Sean('探偵ブラン','副館長、ありがとうございます。君もありがとう、たよりになるな。','background','blanc'));
data.push(new Sean('主人公','光栄です。さあ、Noirは必ずこの付近に必ずいるはずです。さがしましょう！','background','blanc,fukukan'));
data.push(new Sean('探偵ブラン','この付近にNoirはいるはずだが......','background','blanc,fukukan'));
data.push(new Sean('副館長','見当たりませんね。','background','blanc,fukukan'));
data.push(new Sean('主人公','ブランさん、そこに何か落ちてませんか？','background','blanc,fukukan'));
data.push(new Sean('探偵ブラン','お、なんだこれは？','background','blanc,fukukan'));
data.push(new Sean('探偵ブラン','くっ、また　Noirをのがしたか......','background','blanc,fukukan'));
data.push(new Sean('主人公','おしいところまでは行ったみたいですけどね','background','blanc,fukukan'));
data.push(new Sean('探偵ブラン','次こそはつかまえてやる！ところで、今回ここまで追いつめることができたのもきみのおかげだ　感しゃしている','background','blanc'));
data.push(new Sean('主人公','こちらこそです、ブランさん。それではモナ・リザが無事か確認に行きましょう！','background','blanc'));
data.push(new Sean('探偵ブラン','そうしよう！','background','blanc'));
data.push(new Sean('探偵ブラン','そうしよう！これにて事件解決だ！','background','blanc'));
//エンディング
data.push(new Sean('主人公','ところでブランさん、入れかわっていた時を思い返すと、Noirとやけに顔にてませんか......？','background','blanc'));
data.push(new Sean('探偵ブラン','ああそれは、ふたごなんだよ','background','blanc'));
data.push(new Sean('主人公','え？','background','blanc'));
data.push(new Sean('探偵ブラン','おっと、いらい人によばれてしまった　少し席を外すよ　それでは失礼','background','blanc'));
data.push(new Sean('主人公','ちょっとブランさん？！','background','null'));
//家にて
data.push(new Sean('主人公','ふぅ......','background','null'));
data.push(new Sean('主人公','すごく大変だったなぁー。まさかブランさんと怪盗Noirがふたごだったなんて。','background','null'));
data.push(new Sean('主人公','......どっちが姉なんだ？','background','null'));
data.push(new Sean('メールの着信音','〜♪','background','null'));
data.push(new Sean('主人公','？？？','background','null'));
data.push(new Sean('主人公','Noir......Noir！？','background','null'));
//メールの画像表示、真のエンディング？

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