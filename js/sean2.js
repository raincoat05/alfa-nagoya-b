class Sean {
    constructor(speakerName, speakText, background, character1) {
        this.speakerName = speakerName;
        this.speakText = speakText;
        this.background = background;
        this.character1 = character1;
    };
};

var data = [];

data.push(new Sean('探偵ブラン', 'ふむふむ......なるほど！きみのおかげで怪盗Noirの目的は、ルーブル美じゅつ館の絵画、「モナ・リザ」だと分かった！君のおかげだ', 'bookshelf', 'blanc'));
data.push(new Sean('探偵ブラン', 'それでは早速現地に向かう', 'bookshelf', 'blanc'));
data.push(new Sean('探偵ブラン', 'きみはそこからわたしをサポートしてくれ！', 'bookshelf', 'blanc'));
//*********************************************
//ここから美術館
//BGM美術館
//*********************************************
data.push(new Sean('ルーブル美術館', 'ルーヴル美じゅつ館はフランスのパリにある、世界最大の美じゅつ館。所蔵している作品は38万点以上。', 'artmuseumOutside', 'null'));
data.push(new Sean('ルーブル美術館', '5000年以上前から19世紀までのさまざまな美じゅつ品計3万5,000点近くを、そう面積約7万平方メートル(東京ドームの約1.5倍)の広さがある展示(てんじ)場所で見学することができる。', 'artmuseumOutside', 'null'));
data.push(new Sean('ルーブル美術館', '世界でもっとも入場者数の多い美じゅつ館で、毎年800万人をこえる入場者が訪おとずれる。', 'artmuseumOutside', 'null'));
data.push(new Sean('探偵', 'もしもし、私だ。たった今ルーブル美じゅつ館にとう着した。今から調さを行う。', 'artmuseumInside', 'blanc'));
data.push(new Sean('探偵', 'こちらの様子はつねに私のカメラで見れるはずだし、何かあり次第連らくするのでよろしく。', 'artmuseumInside', 'blanc'));
data.push(new Sean('主人公', 'はい！', 'artmuseumInside', 'blanc'));
data.push(new Sean('副館長', 'あなたが探偵(たんてい)のブラン氏ですね。お話はうかがっています。ただいま館長がバカンス中のため、私が案内させていただきます。', 'artmuseumInside', 'fukukan'));
data.push(new Sean('探偵', 'こんにちは、はじめまして。本日はよろしくお願いします。', 'artmuseumInside', 'blanc,fukukan'));
data.push(new Sean('副館長', 'こちらこそ。早速当館を案内しましょう。今回ねらわれている美じゅつ品「モナ・リザ」もごしょうかいします。', 'artmuseumInside', 'blanc,fukukan'));
//*********************************************
//モナリザをカラーに
//*********************************************
data.push(new Sean('探偵', 'おお、これが。', 'monalisa', 'blanc'));
data.push(new Sean('副館長', 'はい、これが "世界で最も有名で、多くの人にかんしょうされ、書かれ、歌にされ、パロディ化された" と言われる有名な絵画「モナ・リザ」です。', 'monalisaUp', 'null'));
data.push(new Sean('副館長', '「モナ・リザ」はもともとそこまで有名な作品ではありませんでした。', 'monalisaUp', 'null'));
data.push(new Sean('副館長', 'しかし、かの有名な画家のピカソもまきこんだ盗なん事けんによって、世界から大きく注目され、今では世界で最も有名な絵画とよばれるようになったのです。', 'monalisaUp', 'null'));
data.push(new Sean('副館長', 'その価値(かち)はげんざい約900億円以上にもなると言われています。', 'monalisaUp', 'null'));
//*********************************************
//モノクロに
//*********************************************
data.push(new Sean('主人公', '900億円？！？？！？？？！？', 'monalisa', 'blanc,fukukan'));
data.push(new Sean('探偵ブラン', 'なるほど。芸じゅつ的にも金せん的にも価値があるということですね。', 'monalisa', 'blanc,fukukan'));
data.push(new Sean('副館長', 'そうなのです。今回の予告状を受けて、当館もセキュリティを強化しました。いくら怪盗Noirでも、かんたんにぬすむことはできないでしょう。', 'monalisa', 'blanc,fukukan'));
data.push(new Sean('探偵', 'それはそれは！', 'monalisa', 'blanc,fukukan'));
//*********************************************
//暗転(無音)
//*********************************************
data.push(new Sean('全員', '？？！', 'black', 'null'));
data.push(new Sean('探偵', 'みなさん、無事ですか？', 'noMonalisa', 'blanc'));
data.push(new Sean('副館長', '私は大じょう夫です。', 'noMonalisa', 'fukukan'));
data.push(new Sean('副館長', 'ああーーーーっ！！！', 'noMonalisa', 'fukukan'));
data.push(new Sean('探偵', 'どうされたのですか？', 'noMonalisa', 'blanc'));
data.push(new Sean('副館長', '「モナ・リザ」が、', 'noMonalisa', 'fukukan'));
data.push(new Sean('副館長', '失くなっている！', 'noMonalisa', 'fukukan'));
//*********************************************
//BGM入れ替わりのテーマ
//*********************************************
data.push(new Sean('探偵', 'なんてことだ！', 'noMonalisa', 'blanc'));
data.push(new Sean('副館長', 'ああ、どうすればいいんだ......。けい察だ！けい察に連らくしてくれ！早く！', 'noMonalisa', 'fukukan'));
data.push(new Sean('探偵', 'もうだめだ、またぬすまれてしまった。', 'noMonalisa', 'blanc'));
data.push(new Sean('主人公', 'ブランさん？', 'noMonalisa', 'blanc,fukukan'));
data.push(new Sean('探偵', '私は、私はなんて役立たずなんだ！', 'noMonalisa', 'blanc'));
data.push(new Sean('探偵', 'もうあきらめよう、怪盗なんてつかまえられるわけがないんだ。', 'noMonalisa', 'blanc'));
data.push(new Sean('主人公', 'ブランさん！？！どうして、まだ始まったばかりじゃないですか！あきらめないでください！', 'noMonalisa', 'blanc'));
data.push(new Sean('探偵', 'できるわけない。', 'noMonalisa', 'blanc'));
data.push(new Sean('探偵', 'そもそも世界的な大怪盗に私がいどむ方がおかしかったんだ。', 'noMonalisa', 'blanc'));
data.push(new Sean('探偵', '申しわけないけど、帰らせてもらおう。もう探偵はやめるよ。', 'noMonalisa', 'blanc'));
data.push(new Sean('主人公', '(ブランさんの様子がおかしい......どうしたんだろう？)', 'noMonalisa', 'blanc'));
//*********************************************
//BGM無音
//*********************************************
data.push(new Sean('主人公', '(ブランさんは何度もあきらめずに怪盗にいどんできたはず......急にあきらめるなんておかしい。)', 'noMonalisa', 'blanc'));
data.push(new Sean('主人公', '(ブランさんは何度もあきらめずに怪盗にいどんできたはず......急にあきらめるなんておかしい。)', 'noMonalisa', 'blanc'));
data.push(new Sean('主人公', '(ブランさんの様子がおかしい......どうしたんだろう？)', 'noMonalisa', 'blanc'));
data.push(new Sean('主人公', '(ブランさんの様子がおかしい......どうしたんだろう？)', 'noMonalisa', 'blanc'));
data.push(new Sean('主人公', '(ブランさんの様子がおかしい......どうしたんだろう？)', 'noMonalisa', 'blanc'));
data.push(new Sean('主人公', '(ブランさんは何度もあきらめずに怪盗にいどんできたはず......急にあきらめるなんておかしい。)', 'noMonalisa', 'blanc'));
data.push(new Sean('主人公', '(！！！)', 'noMonalisa', 'blanc'));
data.push(new Sean('主人公', '(まさか！！！)', 'noMonalisa', 'blanc'));
data.push(new Sean('主人公', '(この人は探偵ブランではない......？)', 'noMonalisa', 'glowBlanc'));
//*********************************************
//ブランをタップすると進むようにできますか？？？
//*********************************************
data.push(new Sean('主人公', 'あなたは、ブランさんではない！だれだ！', 'noMonalisa', 'blanc'));
data.push(new Sean('？？？', 'クックック...。ばれてしまったのか。ブランのやつもゆうしゅうな助手をやとったものだ。', 'noMonalisa', 'silhouetteNoir'));
//*********************************************
//BGM怪盗のテーマ
//*********************************************
data.push(new Sean('怪盗Noir', 'やぁ、私は怪盗Noir。君のすい理通りモナリザをぬすみにきたんだ。', 'noMonalisa', 'noir'));
data.push(new Sean('怪盗Noir', '私の変そうを見ぬくとはすばらしい。どうだい？私の助手にねがえるというのは？世界各地の美じゅつ品をながめながら楽しむティータイムというのもいいものだよ。', 'noMonalisa', 'noir'));
data.push(new Sean('主人公', 'そんなことするわけない！', 'noMonalisa', 'noir'));
data.push(new Sean('？？？', 'やめろ！私の助手に手を出すな！', 'noMonalisa', 'silhouetteBlanc'));
data.push(new Sean('怪盗Noir', 'おやおや、これはこれは。ブラン君ではないか。君の助手はとてもゆうしゅうだね！おかげで楽しかったよ。', 'noMonalisa', 'noir,blanc'));
data.push(new Sean('探偵ブラン','おい！モナ・リザを返せ！','noMonalisa','noir,blanc'));
data.push(new Sean('怪盗Noir','それはいただいていくよ。せいぜい私に助手までとられないように気をつけているんだね。','noMonalisa','noir,blanc'));
data.push(new Sean('探偵ブラン','よけいなお世話だ！','noMonalisa','blanc'));
data.push(new Sean('怪盗Noir','それでは、Adieu！(さようなら！)','noMonalisa','noir,blanc'));
//鬼くそ光る
data.push(new Sean('探偵ブラン','うっ、まぶしいっ','noMonalisa','blanc'));
data.push(new Sean('主人公','うわあああ！目が！目が！','noMonalisa','null'));
//鬼くそ光るとこから戻る
data.push(new Sean('探偵ブラン', 'にげられてしまったか......', 'noMonalisa', 'blanc'));
data.push(new Sean('主人公', 'ブランさん！なんとかつかままえる方法はないんですか！？', 'noMonalisa', 'blanc'));
data.push(new Sean('探偵ブラン', 'うーむ、今Noirがどこにいるのかが分からないときびしいんだ。この美じゅつ館内にいるとは思うのだが......', 'noMonalisa', 'blanc'));
data.push(new Sean('主人公', 'そんな......', 'noMonalisa', 'blanc'));
data.push(new Sean('主人公', '(まてよ......？)', 'noMonalisa', 'blanc'));
data.push(new Sean('主人公', '！！！', 'noMonalisa', 'blanc'));
data.push(new Sean('主人公', 'そうだ！副館長さん、ここの出入り口は1つだけですよね？', 'noMonalisa', 'blanc'));
data.push(new Sean('副館長', 'そのはずですが。', 'noMonalisa', 'blanc,fukukan'));
data.push(new Sean('探偵ブラン', '何か思いついたのか？きみの考えを聞かせてくれ！', 'noMonalisa', 'blanc,fukukan'));
data.push(new Sean('主人公', 'その出入り口をふさげば、Noirのとうぼうをそ止できると思います！', 'noMonalisa', 'blanc,fukukan'));
data.push(new Sean('探偵ブラン', 'たしかに......！その方法ならNoirをつかまえることができるかもしれない', 'noMonalisa', 'blanc,fukukan'));
data.push(new Sean('探偵ブラン', 'いい考えだ', 'noMonalisa', 'blanc,fukukan'));
data.push(new Sean('主人公', '副館長さん！今すぐここの出入り口をロックしてください！早く！', 'noMonalisa', 'blanc,fukukan'));
data.push(new Sean('副館長', 'は、はい！たしか、けいび室のぼうはんシステムを起動すれば出入り口をロックできます。しかし......', 'noMonalisa', 'blanc,fukukan'));
data.push(new Sean('探偵ブラン', 'しかし......？', 'noMonalisa', 'blanc,fukukan'));
data.push(new Sean('副館長', 'ぼうはんシステムを起動させるにはパスワードを入力しなければいけません。ですがパスワードを知っているのは館長だけなのです......', 'noMonalisa', 'blanc,fukukan'));
data.push(new Sean('主人公', 'なんで副館長なのに知らされてないんですか？！？！', 'noMonalisa', 'blanc,fukukan'));
data.push(new Sean('副館長', '館長はこのようなことをおそれて、自分以外のだれにも知らせていなかったのでしょう。館長の器としては正しいあり方なのでしょうが......', 'noMonalisa', 'blanc,fukukan'));
data.push(new Sean('探偵ブラン', 'なるほど......それはこまりましたね', 'noMonalisa', 'blanc,fukukan'));
data.push(new Sean('副館長', 'ただ、このようなひじょう事たいにそなえて館長がパスワードのヒントとしていくつかのなぞを用意していました。それがとければぼうはんシステムを起動できます。', 'noMonalisa', 'blanc,fukukan'));
data.push(new Sean('探偵ブラン', 'それではわたしたちはけいび室にい動する', 'noMonalisa', 'blanc,fukukan'));
data.push(new Sean('探偵ブラン', 'きみにも手伝ってもらうことがあるかもしれないがその時はよろしく', 'noMonalisa', 'blanc'));
data.push(new Sean('主人公', 'お気をつけて！', 'noMonalisa', 'blanc'));
//*********************************************
//暗転
//*********************************************
data.push(new Sean(' ', '移動中', 'black', 'null'));
data.push(new Sean('副館長', 'ここがけいび室です。これがぼうはんシステム起動のスイッチのようですね。', 'securityRoom', 'fukukan'));
data.push(new Sean('探偵ブラン', '8けたの数字を入力する必要があるようですね......４けたずつで分けてとけそうだな、君は前の4けたをといてくれ！わたしは後の4けたをとく！', 'securityRoom', 'blanc'));
data.push(new Sean('探偵ブラン', '8けたの数字を入力する必要があるようですね......４けたずつで分けてとけそうだな、君は前の4けたをといてくれ！わたしは後の4けたをとく！', 'securityRoom', 'blanc'));

var count = 0;

var skip = function () {
    document.getElementsByClassName("speakerName")[0].innerHTML = data[count].speakerName;
    document.getElementsByClassName("speakText")[0].innerHTML = data[count].speakText;
    document.getElementById("background").src = './img/background/' + data[count].background + '.jpg';
    document.getElementById("character1").src = './img/character/' + data[count].character1 + '.png';
    count++;

    if (count == 4 || count == 5 || count == 6) {
        $("#background").css("filter", "none");
    } else {
        $("#background").css("filter", "blur(2px) grayscale(90%)");
    };

    if(count == 1){
        var media = document.getElementById("audio");
        media.volume = 0.12
    }
    if (count == 4) {
        document.getElementById("audio").src = './audio/museum.mp3';
        var media = document.getElementById("audio");
        media.volume = 1
    }
    if(count == 22){
        var media = document.getElementById("audio");
        media.volume = 0
    };
    if(count == 29){
        document.getElementById("audio").src = './audio/tounan.mp3';
        var media = document.getElementById("audio");
        media.volume = 1
    };
    if(count == 40){
        var media = document.getElementById("audio");
        media.volume = 0
    };
    if(count == 51){
        document.getElementById("audio").src = './audio/tounan.mp3';
        var media = document.getElementById("audio");
        media.volume = 1
    };

    if (count == 48) {
        $(".skipButton").css("display", "none");
    } else {
        $(".skipButton").css("display", "block");
    };

    if (count == 88) {
        window.location.href = "/beta-nagoya-b/quiz3.html";
    };
};

$(function () {
    $(skip);
});

$(function () {
    $(".skipButton").click(function () {
        $(skip);
    });
});

$(function () {
    $(".exskip").click(function () {
        if (count == 48) {
            $(skip);
        }
    });
});