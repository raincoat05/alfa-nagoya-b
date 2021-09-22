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
data.push(new Sean('探偵ブラン','お、なんだこれは？','letter','blanc,fukukan'));
//*********************************************
//手紙を表示
//BGMはそのままの方がいいと思いましたので、エンディングまでは探偵のテーマ
//*********************************************
data.push(new Sean('探偵ブラン','くっ、また　Noirをのがしたか......','artmuseumInside','blanc,fukukan'));
data.push(new Sean('主人公','おしいところまでは行ったみたいですけどね','artmuseumInside','blanc,fukukan'));
data.push(new Sean('探偵ブラン','次こそはつかまえてやる！ところで、今回ここまで追いつめることができたのもきみのおかげだ　感しゃしている','artmuseumInside','blanc'));
data.push(new Sean('主人公','こちらこそです、ブランさん。それではモナ・リザが無事か確認に行きましょう！','artmuseumInside','blanc'));
data.push(new Sean('探偵ブラン','そうしよう！','artmuseumInside','blanc'));
//*********************************************
//メールの画像表示、真のエンディング？
//エンディング
//*********************************************
data.push(new Sean('事件解決後',' ','monalisa','null'));
data.push(new Sean('主人公','ところでブランさん、入れかわっていた時を思い返すと、Noirとやけに顔にてませんか......？','monalisa','blanc'));
data.push(new Sean('探偵ブラン','ああそれは、ふたごなんだよ','monalisa','blanc'));
data.push(new Sean('主人公','え？','monalisa','blanc'));
data.push(new Sean('探偵ブラン','おっと、次のいらい人によばれてしまった　少し席を外すよ　それでは失礼','monalisa','blanc'));
data.push(new Sean('主人公','ちょっとブランさん？！','monalisa','null'));
data.push(new Sean('自宅にて',' ','room','null'));
data.push(new Sean('主人公','ふぅ......','room','null'));
data.push(new Sean('主人公','すごく大変だったなぁー。まさかブランさんと怪盗Noirがふたごだったなんて。','room','null'));
data.push(new Sean('主人公','......どっちが姉なんだ？','room','null'));
data.push(new Sean('メールの着信音','〜♪','room','null'));
data.push(new Sean('主人公','？？？','room','null'));
data.push(new Sean('主人公','Noir......Noir！？','finalletter','null'));
data.push(new Sean('主人公','Noir......Noir！？','room','null'));
data.push(new Sean('主人公','Noir......Noir！？','clear','null'));
//*********************************************
//クリア画像
//*********************************************

var count = 0;

var skip = function(){
    document.getElementsByClassName("speakerName")[0].innerHTML=data[count].speakerName;
    document.getElementsByClassName("speakText")[0].innerHTML=data[count].speakText;
    document.getElementById("background").src='./img/background/'+ data[count].background + '.jpg';
    document.getElementById("character1").src='./img/character/'+ data[count].character1+ '.png';
    count++;
    if(count == 1){
        var media = document.getElementById("audio");
        media.volume = 0.3 
    };
    if(count == 22){
        document.getElementById("audio").src = './audio/ending.mp3';
        var media = document.getElementById("audio");
        media.volume = 0.5
    };

    if(count == 16){
        $("#textBox").css("display","none");
        $("#background").css("filter", "none");
        $("#characterBox").css("display","none");
    }else{
        $("#textBox").css("display","block");
        $("#background").css("filter", "blur(2px) grayscale(90%)");
        $("#characterBox").css("display","block");
    }
    
    if(count == 34 ||count == 36){
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

$(function () {
    $(".exskip").click(function () {
        if (count == 16 ||count == 34) {
            $(skip);
        }
    });
});