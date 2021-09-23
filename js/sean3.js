class Sean{
    constructor(speakerName,speakText,background,character1){
        this.speakerName = speakerName;
        this.speakText = speakText;
        this.background = background;
        this.character1 = character1;
    };
};

var data= [];
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
data.push(new Sean('主人公','光栄です。','securityRoom','blanc,fukukan'));
data.push(new Sean('探偵ブラン','よし、ついにNoirをつかまえるときがきた　Noirは美じゅつ館の中に必ずいるはずだ　みんな、いそごう','securityRoom','blanc'));
data.push(new Sean('主人公','さがしましょう！','securityRoom','blanc,fukukan'));
data.push(new Sean(' ', '〜移動中〜', 'black', 'null'));
data.push(new Sean('探偵ブラン','この付近にNoirはいるはずだが......','artmuseumInside','blanc,fukukan'));
data.push(new Sean('副館長','見当たりませんね。','artmuseumInside','blanc,fukukan'));
data.push(new Sean('主人公','！！！','artmuseumInside','blanc,fukukan'));
data.push(new Sean('主人公','ブランさん、そこに何か落ちてませんか？','artmuseumInside','blanc,fukukan'));
data.push(new Sean('探偵ブラン','お、なんだこれは？','artmuseumInside','blanc,fukukan'));
data.push(new Sean('探偵ブラン','お、なんだこれは？','letter','blanc,fukukan'));
data.push(new Sean('探偵ブラン','くっ、また　Noirをのがしたか......　インクがにじんでいるということは、ついさっきまでここにいたみたいだな','artmuseumInside','blanc,fukukan'));
data.push(new Sean('主人公','おしいところまでは行ったみたいですが、くやしいですね......。','artmuseumInside','blanc,fukukan'));
data.push(new Sean('探偵ブラン','ああ......　だが、次こそはつかまえてやる！','artmuseumInside','blanc'));
data.push(new Sean('探偵ブラン','ところで、今回ここまで追いつめることができたのもきみのおかげだ　心から、感しゃしている','artmuseumInside','blanc'));
data.push(new Sean('主人公','こちらこそです、ブランさん。','artmuseumInside','blanc'));
data.push(new Sean('探偵ブラン','それではモナ・リザが無事か確認に行こう！','artmuseumInside','blanc'));
data.push(new Sean('主人公','はい！','artmuseumInside','blanc'));
data.push(new Sean(' ','〜END〜','monalisaUp',' '));
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
data.push(new Sean('メールの受信音','〜♪','room','null'));
data.push(new Sean('主人公','？？？','room','null'));
data.push(new Sean('主人公','Noir......Noir！？','room','null'));
data.push(new Sean('主人公','Noir......Noir！？','finalletter','null'));
data.push(new Sean('主人公','Noir......Noir！？','clear','null'));

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
    if(count == 29){
        document.getElementById("audio").src = './audio/ending.mp3';
        var media = document.getElementById("audio");
        media.volume = 0.5
    };

    if(count == 20){
        $("#textBox").css("display","none");
        $("#background").css("filter", "none");
        $("#characterBox").css("display","none");
    }else{
        $("#textBox").css("display","block");
        $("#background").css("filter", "blur(2px) grayscale(90%)");
        $("#characterBox").css("display","block");
    }
    
    if(count == 42 ||count == 43){
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
        $(".skipButton").css("display", "none");
        setTimeout(() => {
            $(".skipButton").css("display", "block");
        }, 500);
    });
});

$(function () {
    $(".exskip").click(function () {
        if (count == 20 ||count == 42) {
            $(skip);
        }
    });
});