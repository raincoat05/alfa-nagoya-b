class Sean{
    constructor(speakerName,speakText,background,character1){
        this.speakerName = speakerName;
        this.speakText = speakText;
        this.background = background;
        this.character1 = character1;
    };
};

var data= [];
//*********************************************
//BGM探偵のテーマ
//*********************************************
data.push(new Sean('主人公','ブランさん！パスワードが分かりました！','securityRoom','blanc'));
data.push(new Sean('探偵ブラン','本当かい？私もだ！','securityRoom','blanc'));
data.push(new Sean('主人公','パスワードは「1452」です！','securityRoom','blanc'));
data.push(new Sean('探偵ブラン','ありがとう！私の分と合わせると......','securityRoom','blanc'));
data.push(new Sean('探偵ブラン','「14520415」','securityRoom','blanc'));
data.push(new Sean('探偵ブラン','「モナ・リザ」の作者であるレオナルド・ダ・ヴィンチの生年月日じゃないか！','securityRoom','blanc'));
data.push(new Sean('主人公','館長はどれだけ「モナ・リザ」が好きなんだ......','securityRoom','blanc,fukukan'));
data.push(new Sean('副館長','それでは、ぼうはんシステムを起動します。','securityRoom','fukukan'));
data.push(new Sean('副館長','......よし！出入り口のふうさに成功しました。','securityRoom','fukukan'));
data.push(new Sean('探偵ブラン','副館長、ありがとうございます。君もありがとう、たよりになるな。','securityRoom','blanc'));
data.push(new Sean('主人公','光栄です。さあ、Noirは必ずこの付近に必ずいるはずです。さがしましょう！','securityRoom','blanc,fukukan'));
data.push(new Sean('探偵ブラン','この付近にNoirはいるはずだが......','artmuseumInside','blanc,fukukan'));
data.push(new Sean('副館長','見当たりませんね。','artmuseumInside','blanc,fukukan'));
data.push(new Sean('主人公','ブランさん、そこに何か落ちてませんか？','artmuseumInside','blanc,fukukan'));
data.push(new Sean('探偵ブラン','お、なんだこれは？','artmuseumInside','blanc,fukukan'));
//*********************************************
//手紙を表示
//BGM怪盗のテーマ
//*********************************************
data.push(new Sean('探偵ブラン','くっ、また　Noirをのがしたか......','artmuseumInside','blanc,fukukan'));
data.push(new Sean('主人公','おしいところまでは行ったみたいですけどね','artmuseumInside','blanc,fukukan'));
data.push(new Sean('探偵ブラン','次こそはつかまえてやる！ところで、今回ここまで追いつめることができたのもきみのおかげだ　感しゃしている','artmuseumInside','blanc'));
data.push(new Sean('主人公','こちらこそです、ブランさん。それではモナ・リザが無事か確認に行きましょう！','artmuseumInside','blanc'));
data.push(new Sean('探偵ブラン','そうしよう！','artmuseumInside','blanc'));
data.push(new Sean('null','〜END〜','monalisaUp','null'));
data.push(new Sean('null','〜END〜','monalisaUp','null'));
//メールの画像表示、真のエンディング？

var count = 0;

var skip = function(){
    document.getElementsByClassName("speakerName")[0].innerHTML=data[count].speakerName;
    document.getElementsByClassName("speakText")[0].innerHTML=data[count].speakText;
    document.getElementById("background").src='./img/background/'+ data[count].background + '.jpg';
    document.getElementById("character1").src='./img/character/'+ data[count].character1+ '.png';
    count++;
    if(count == 21){
        window.location.href = "/beta-nagoya-b/ending.html";
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