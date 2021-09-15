class Sean{
    constructor(speakerName,speakText,background,character1){
        this.speakerName = speakerName;
        this.speakText = speakText;
        this.background = background;
        this.character1 = character1;
    };
};

var data= [];
data.push(new Sean('探偵ブラン','ふむふむ......なるほど！きみのおかげで怪盗Noirの目的は、ルーブル美じゅつ館の絵画、「モナ・リザ」だと分かった！君のおかげだ','background','blanc'));
data.push(new Sean('探偵ブラン','それでは早速現地に向かう','background','blanc'));
data.push(new Sean('探偵ブラン','きみはそこからわたしをサポートしてくれ！','background','blanc'));
//ここから美術館
data.push(new Sean('ルーブル美術館','ルーヴル美じゅつ館は、パリにあるフランスの国立美じゅつ館。<br>世界最大級の美じゅつ館（博物館）であるとともに世界最大級の史跡(しせき)のひとつで、パリ中心部1区のセーヌ川の右岸に位置する。','museumOutside.jpg','null'));
data.push(new Sean('ルーブル美術館','収蔵(しゅうぞう)品38万点以上。先史(せんし)時代から19世紀までのさまざまな美じゅつ品3万5,000点近くが、総(そう)面積6万600平方メートルの展示(てんじ)場所で公開されている。<br>世界でもっとも入場者数の多い美じゅつ館で、毎年800万人をこえる入場者が訪(おとず)れ、2018年は初めて1,000万人をこえた。','museumOutside.jpg','null'));
data.push(new Sean('ルーブル美術館','フランスの世界遺産(いさん)であるパリのセーヌ河岸(かがん)にも包括(ほうかつ)登録されている。<br>そのコレクションの一部は、日本を含(ふく)め海外へ貸(か)し出されることも多い。(「"ルーヴル美術館"」『フリー百科事典　ウィキペディア日本語版』より。)','museumOutside.jpg','null'));
data.push(new Sean('探偵','もしもし、私だ。たった今ルーブル美じゅつ館にとう着した。今から調さを行う。','background','blanc'));
data.push(new Sean('探偵','こちらの様子はつねに私のカメラで見れるはずだし、何かあり次第連らくするのでよろしく。','background','blanc'));
data.push(new Sean('主人公','はい！','background','blanc'));
data.push(new Sean('副館長','あなたが探偵(たんてい)のブラン氏ですね。お話はうかがっています。ただいま館長がバカンス中のため、私が案内させていただきます。','background','fukukan'));
data.push(new Sean('探偵','こんにちは、はじめまして。本日はよろしくお願いします。','background','blanc,fukukan.png'));
data.push(new Sean('副館長','こちらこそ。早速当館を案内しましょう。今回ねらわれている美じゅつ品「モナ・リザ」もごしょうかいします。','background','blanc,fukukan'));
data.push(new Sean('探偵','おお、これが。','background','blanc'));
data.push(new Sean('副館長','はい、これが "世界で最も有名で、多くの人にかんしょうされ、書かれ、歌にされ、パロディ化された" と言われる有名な絵画「モナ・リザ」です。','background','fukukan'));
data.push(new Sean('副館長','「モナ・リザ」はもともとそこまで有名な作品ではありませんでした。','background','fukukan'));
data.push(new Sean('副館長','しかし、かの有名な画家のピカソもまきこんだ盗なん事けんによって、世界から大きく注目され、今では世界で最も有名な絵画とよばれるようになったのです。','background','fukukan'));
data.push(new Sean('副館長','その価値(かち)はげんざい約900億円以上にもなると言われています。','background','fukukan'));
data.push(new Sean('主人公','900億円？！？？！？？？！？','background','blanc,fukukan'));
data.push(new Sean('探偵ブラン','なるほど。芸じゅつ的にも金せん的にも価値があるということですね。','background','blanc,fukukan'));
data.push(new Sean('副館長','そうなのです。今回の予告状を受けて、当館もセキュリティを強化しました。いくら怪盗Noirでも、かんたんにぬすむことはできないでしょう。','background','blanc,fukukan'));
data.push(new Sean('探偵','それはそれは！','background','blanc,fukukan'));
data.push(new Sean('全員','？？！','background','character'));
data.push(new Sean('探偵','みなさん、無事ですか？','background','blanc'));
data.push(new Sean('副館長','私は大じょう夫です。','background','fukukan'));
data.push(new Sean('副館長','ああーーーーっ！！！','background','fukukan'));
data.push(new Sean('探偵','どうされたのですか？','background','blanc'));
data.push(new Sean('副館長','「モナ・リザ」が、','background','fukukan'));
data.push(new Sean('副館長','失くなっている！','background','fukukan'));
data.push(new Sean('探偵','なんてことだ！','background','blanc'));
data.push(new Sean('副館長','ああ、どうすればいいんだ......。けい察だ！けい察に連らくしてくれ！早く！','background','fukukan'));
data.push(new Sean('探偵','もうだめだ、またぬすまれてしまった。','background','blanc'));
data.push(new Sean('主人公','ブランさん？','background','blanc,fukukan'));
data.push(new Sean('探偵','私は、私はなんて役立たずなんだ！','background','blanc'));
data.push(new Sean('探偵','もうあきらめよう、怪盗なんてつかまえられるわけがないんだ。','background','blanc'));
data.push(new Sean('主人公','ブランさん！？！どうして、まだ始まったばかりじゃないですか！あきらめないでください！','background','blanc'));
data.push(new Sean('探偵','できるわけない。','background','blanc'));
data.push(new Sean('探偵','そもそも世界的な大怪盗に私がいどむ方がおかしかったんだ。','background','blanc'));
data.push(new Sean('探偵','申しわけないけど、帰らせてもらおう。もう探偵はやめるよ。','background','blanc'));
data.push(new Sean('主人公','(ブランさんの様子がおかしい......どうしたんだろう？)','background','blanc'));
data.push(new Sean('主人公','(ブランさんは何度もあきらめずに怪盗にいどんできたはず......急にあきらめるなんておかしい。)','background','blanc'));
data.push(new Sean('主人公','(ブランさんは何度もあきらめずに怪盗にいどんできたはず......急にあきらめるなんておかしい。)','background','blanc'));
data.push(new Sean('主人公','(ブランさんの様子がおかしい......どうしたんだろう？)','background','blanc'));
data.push(new Sean('主人公','(ブランさんの様子がおかしい......どうしたんだろう？)','background','blanc'));
data.push(new Sean('主人公','(ブランさんの様子がおかしい......どうしたんだろう？)','background','blanc'));
data.push(new Sean('主人公','(ブランさんは何度もあきらめずに怪盗にいどんできたはず......急にあきらめるなんておかしい。)','background','blanc'));
data.push(new Sean('主人公','(！！！)','background','blanc'));
data.push(new Sean('主人公','(まさか！！！)','background','blanc'));
data.push(new Sean('主人公','(この人は探偵ブランではない......？)','background','blanc'));
//ブランをタップすると進むようにできますか？？？
data.push(new Sean('主人公','あなたは、ブランさんではない！だれだ！','background','blanc'));
data.push(new Sean('？？？','クックック...。ばれてしまったのか。ブランのやつもゆうしゅうな助手をやとったものだ。','background','blacknoir'));
data.push(new Sean('怪盗Noir','やぁ、私は怪盗Noir。君のすい理通りモナリザをぬすみにきたんだ。','background','noir'));
data.push(new Sean('怪盗Noir','私の変そうを見ぬくとはすばらしい。どうだい？私の助手にねがえるというのは？世界各地の美じゅつ品をながめながら楽しむティータイムというのもいいものだよ。','background','noir'));
data.push(new Sean('主人公','そんなことするわけない！','background','noir'));
data.push(new Sean('？？？','やめろ！私の助手に手を出すな！','background','blackblanc'));
data.push(new Sean('怪盗Noir','おやおや、これはこれは。ブラン君ではないか。君の助手はとてもゆうしゅうだね！おかげで楽しかったよ。','background','noir,blanc'));
data.push(new Sean('探偵ブラン','おい！モナ・リザを返せ！','background','noir,blanc'));
data.push(new Sean('怪盗Noir','それはいただいていくよ。せいぜい私に助手までとられないように気をつけているんだね。','background','noir,blanc'));
data.push(new Sean('怪盗Noir','それでは、Adieu！(さようなら！)','background','noir,blanc'));
data.push(new Sean('探偵ブラン','よけいなお世話だ！','background','blanc'));
data.push(new Sean('探偵ブラン','うっ、まぶしいっ','background','blanc'));
data.push(new Sean('主人公','うわあああ！目が！目が！','background',''));
data.push(new Sean('探偵ブラン','にげられてしまったか......','background','blanc'));
data.push(new Sean('主人公','ブランさん！なんとかつかままえる方法はないんですか！？','background','blanc'));
data.push(new Sean('探偵ブラン','うーむ、今Noirがどこにいるのかが分からないときびしいんだ。この美じゅつ館内にいるとは思うのだが......','background','blanc'));
data.push(new Sean('主人公','そんな......','background','blanc'));
data.push(new Sean('主人公','(まてよ......？)','background','blanc'));
data.push(new Sean('主人公','！！！','background','blanc'));
data.push(new Sean('主人公','そうだ！副館長さん、ここの出入り口は1つだけですよね？','background','blanc'));
data.push(new Sean('副館長','そのはずですが。','background','blanc,fukukan'));
data.push(new Sean('探偵ブラン','何か思いついたのか？きみの考えを聞かせてくれ！','background','blanc,fukukan'));
data.push(new Sean('主人公','その出入り口をふさげば、Noirのとうぼうをそ止できると思います！','background','blanc,fukukan'));
data.push(new Sean('探偵ブラン','たしかに......！その方法ならNoirをつかまえることができるかもしれない','background','blanc,fukukan'));
data.push(new Sean('探偵ブラン','いい考えだ','background','blanc,fukukan'));
data.push(new Sean('主人公','副館長さん！今すぐここの出入り口をロックしてください！早く！','background','blanc,fukukan'));
data.push(new Sean('副館長','は、はい！たしか、けいび室のぼうはんシステムを起動すれば出入り口をロックできます。しかし......','background','blanc,fukukan'));
data.push(new Sean('探偵ブラン','しかし......？','background','blanc,fukukan'));
data.push(new Sean('副館長','ぼうはんシステムを起動させるにはパスワードを入力しなければいけません。ですがパスワードを知っているのは館長だけなのです......','background','blanc,fukukan'));
data.push(new Sean('主人公','なんで副館長なのに知らされてないんですか？！？！','background','blanc,fukukan'));
data.push(new Sean('副館長','館長はこのようなことをおそれて、自分以外のだれにも知らせていなかったのでしょう。館長の器としては正しいあり方なのでしょうが......','background','blanc,fukukan'));
data.push(new Sean('探偵ブラン','なるほど......それはこまりましたね','background','blanc,fukukan'));
data.push(new Sean('副館長','ただ、このようなひじょう事たいにそなえて館長がパスワードのヒントとしていくつかのなぞを用意していました。それがとければぼうはんシステムを起動できます。','background','blanc,fukukan'));
data.push(new Sean('探偵ブラン','それではわたしたちはけいび室にい動する','background','blanc,fukukan'));
data.push(new Sean('探偵ブラン','きみにも手伝ってもらうことがあるかもしれないがその時はよろしく','background','blanc'));
data.push(new Sean('主人公','お気をつけて！','background','blanc'));
data.push(new Sean('副館長','ここがけいび室です。これがぼうはんシステム起動のスイッチのようですね。','background','fukukan'));
data.push(new Sean('探偵ブラン','8けたの数字を入力する必要があるようですね......４けたずつで分けてとけそうだな、君は前の4けたをといてくれ！わたしは後の4けたをとく！','background','blanc'));
data.push(new Sean('探偵ブラン','8けたの数字を入力する必要があるようですね......４けたずつで分けてとけそうだな、君は前の4けたをといてくれ！わたしは後の4けたをとく！','background','blanc'));

var count = 0;

var skip = function(){
    document.getElementsByClassName("speakerName")[0].innerHTML=data[count].speakerName;
    document.getElementsByClassName("speakText")[0].innerHTML=data[count].speakText;
    document.getElementById("background").src='./img/background/'+ data[count].background;
    document.getElementById("character1").src='./img/character/'+ data[count].character1+ '.png';
    count++;
    if(count == 4,5,6){
        $(".background").css("filter","none");
    }
    if(count == 87){
        window.location.href = "/beta-nagoya-b/quiz3.html";
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