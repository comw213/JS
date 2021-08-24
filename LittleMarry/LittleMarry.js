 //將top跟left 跟各國文字 音檔 ,國旗照片 放進object 在帶入array方便取用
 var tolf = [
    { left: '0px', top: '0px', loc: '台灣', wel: "歡迎 <i class='fas fa-handshake'>", pic: './flag/Taiwan.png', oral: "./oral/roc_welcome.mp3", value: 0 },
    { left: '151px', top: '0px', loc: '日本', wel: "ようこそ <i class='fas fa-handshake'>", pic: './flag/japan2.png', oral: "./oral/jpn_welcome.mp3", value: 1 },
    { left: '302px', top: '0px', loc: '法國', wel: "Bienvenue <i class='fas fa-handshake'>", pic: './flag/French2.png', oral: "./oral/fre_welcome.mp3", value: 2 },
    { left: '453px', top: '0px', loc: '德國', wel: "Willkommen <i class='fas fa-handshake'>", pic: './flag/Germany2.png', oral: "./oral/ger_welcome.mp3", value: 3 },
    { left: '453px', top: '101px', loc: '荷蘭', wel: "welkom <i class='fas fa-handshake'>", pic: './flag/Holland2.png', oral: "./oral/hol_welcome.mp3", value: 4 },
    { left: '453px', top: '202px', loc: '馬來西亞', wel: "Selamat Datang <i class='fas fa-handshake'>", pic: './flag/malaishia2.png', oral: "./oral/mal_welcome.mp3", value: 5 },
    { left: '453px', top: '303px', loc: '泰國', wel: "ยินดีต้อนรับ <i class='fas fa-handshake'>", pic: './flag/Thai2.png', oral: "./oral/tai_welcome.mp3", value: 6 },
    { left: '302px', top: '303px', loc: '墨西哥', wel: "Bienvenido <i class='fas fa-handshake'>", pic: './flag/Mexico2.png', oral: "./oral/mex_welcome.mp3", value: 7 },
    { left: '151px', top: '303px', loc: '美國', wel: "Welcome <i class='fas fa-handshake'>", pic: './flag/USA2.png', oral: "./oral/usa_welcome.mp3", value: 8 },
    { left: '0px', top: '303px', loc: '韓國', wel: "어서오세요 <i class='fas fa-handshake'>", pic: './flag/Korea2.png', oral: "./oral/kor_welcome.mp3", value: 9 },
    { left: '0px', top: '202px', loc: '加拿大', wel: "Welcome <i class='fas fa-handshake'>", pic: './flag/Canada2.png', oral: "./oral/can_welcome.mp3", value: 10 },
    { left: '0px', top: '101px', loc: '瑞士', wel: "Benvenuto <i class='fas fa-handshake'>", pic: './flag/Switzerland2.png', oral: "./oral/swi_welcome.mp3", value: 11 }
]



var but = document.getElementById("but"); //獲取貓掌按鈕

var cmusic = document.getElementById("cmusic"); //獲取背景音樂
cmusic.volume = 0.3; //設定背景音樂開始的音量


var pop = document.getElementById("popup");//獲取全畫面彈出中間國家介紹視窗
var country = document.getElementById("country");//獲取全畫面中間卡片國旗
var loc = document.getElementById("loc");//獲取全畫面中間卡片國家名稱
var wel = document.getElementById("wel");//獲取全畫面中間卡片各國歡迎文字

var index; //設定array index 剛開始位置


//設定定時器,起點隨機跳動
var timer1 = setInterval(function () {
    var index123 = Math.floor(Math.random() * 11); //隨機index位置
    shadow.style.left = tolf[index123].left;    //使left改變值
    shadow.style.top = tolf[index123].top;  //使top改變值

}, 500);


but.onclick = function () {  //貓掌按鈕動作

    clearInterval(timer1);  //清除定時器,起點隨機跳動

    var cmusic = document.getElementById("cmusic"); //獲取背景音樂
    cmusic.pause(); //按鈕按下 , 背景音樂暫停

    var catsound = document.getElementById("catsound"); //獲取按鈕貓迷叫聲
    catsound.volume = 0.5;  //設定貓咪叫聲開始的音量
    catsound.play();    //按鈕按下 , 貓叫音效

    var ding = document.getElementById("ding"); //獲取轉動音效
    ding.volume = 0.3; //設定轉動音效開始的音量
    ding.play(); //按鈕按下 , 轉動音效

    but.setAttribute("disabled", "disabled");   //設定增加屬性 , 按鈕點擊後不能再按

    var shadow = document.getElementById("shadow");     //獲取選中背景影子div
    shadow.style.display = "block";     //選中背景影子div顯現

    var go = document.getElementById("go");    //獲取按鈕底下文字
    go.style.right = "85px"         //按按鈕後文字稍微偏移置中
    go.innerHTML = "～～～出發囉～～～"     //按按鈕後改變文字



    var index = 0;  //起點為0


    //設定步數 , 使shadow 轉兩圈後 , 隨機停在在0-11 flags.
    var steps = (tolf.length * 2) + parseInt(Math.random() * tolf.length); 
    


    //設定function for  setTimeout 一次性延時定時器,讓轉動變慢
    var slow = function () {
        shadow.style.left = tolf[index].left; // 使left改變值
        shadow.style.top = tolf[index].top; //  使top改變值

        steps--; //使步數自減使其為0,不在轉動
        
        if (steps == 0) {  //if步數自減使其為0,不在轉動

            // but.removeAttribute("disabled"); //使步數為0停止後按鈕再次啟用


            //停止轉動後,如index停在該陣列位置,js更改其內容樣式
            if (index == 0) {
                pop.style.display = "block";
                loc.innerText = tolf[index].loc;
                wel.innerHTML = tolf[index].wel;
                country.src = tolf[index].pic;
                osound.src = tolf[index].oral;
                osound.play();
                return;

            //停止轉動後,如index停在該陣列位置,js更改其內容樣式
            } else if (index == 1) {
                pop.style.display = "block";
                loc.innerText = tolf[index].loc;
                wel.innerHTML = tolf[index].wel;
                country.src = tolf[index].pic;
                osound.src = tolf[index].oral;
                osound.play();
                return;

            //停止轉動後,如index停在該陣列位置,js更改其內容樣式
            } else if (index == 2) {
                pop.style.display = "block";
                loc.innerText = tolf[index].loc;
                wel.innerHTML = tolf[index].wel;
                country.src = tolf[index].pic;
                osound.src = tolf[index].oral;
                osound.play();
                return;
            //停止轉動後,如index停在該陣列位置,js更改其內容樣式
            } else if (index == 3) {
                pop.style.display = "block";
                loc.innerText = tolf[index].loc;
                wel.innerHTML = tolf[index].wel;
                country.src = tolf[index].pic;
                osound.src = tolf[index].oral;
                osound.play();
                return;
            //停止轉動後,如index停在該陣列位置,js更改其內容樣式
            } else if (index == 4) {
                pop.style.display = "block";
                loc.innerText = tolf[index].loc;
                wel.innerHTML = tolf[index].wel;
                country.src = tolf[index].pic;
                osound.src = tolf[index].oral;
                osound.play();
                return;
            //停止轉動後,如index停在該陣列位置,js更改其內容樣式
            } else if (index == 5) {
                pop.style.display = "block";
                loc.innerText = tolf[index].loc;
                wel.innerHTML = tolf[index].wel;
                country.src = tolf[index].pic;
                osound.src = tolf[index].oral;
                osound.play();
                return;
            //停止轉動後,如index停在該陣列位置,js更改其內容樣式
            } else if (index == 6) {
                pop.style.display = "block";
                loc.innerText = tolf[index].loc;
                wel.innerHTML = tolf[index].wel;
                country.src = tolf[index].pic;
                osound.src = tolf[index].oral;
                osound.play();
                return;
            //停止轉動後,如index停在該陣列位置,js更改其內容樣式
            } else if (index == 7) {
                pop.style.display = "block";
                loc.innerText = tolf[index].loc;
                wel.innerHTML = tolf[index].wel;
                country.src = tolf[index].pic;
                osound.src = tolf[index].oral;
                osound.play();
                return;
            //停止轉動後,如index停在該陣列位置,js更改其內容樣式
            } else if (index == 8) {
                pop.style.display = "block";
                loc.innerText = tolf[index].loc;
                wel.innerHTML = tolf[index].wel;
                country.src = tolf[index].pic;
                osound.src = tolf[index].oral;
                osound.play();
                return;
            //停止轉動後,如index停在該陣列位置,js更改其內容樣式
            } else if (index == 9) {
                pop.style.display = "block";
                loc.innerText = tolf[index].loc;
                wel.innerHTML = tolf[index].wel;
                country.src = tolf[index].pic;
                osound.src = tolf[index].oral;
                osound.play();
                return;
            //停止轉動後,如index停在該陣列位置,js更改其內容樣式
            } else if (index == 10) {
                pop.style.display = "block";
                loc.innerText = tolf[index].loc;
                wel.innerHTML = tolf[index].wel;
                country.src = tolf[index].pic;
                osound.src = tolf[index].oral;
                osound.play();
                return;
            //停止轉動後,如index停在該陣列位置,js更改其內容樣式
            } else if (index == 11) {
                pop.style.display = "block";
                loc.innerText = tolf[index].loc;
                wel.innerHTML = tolf[index].wel;
                country.src = tolf[index].pic;
                osound.src = tolf[index].oral;
                osound.play();
                return;
            }

        }

        index++; //index自增 , 使shadow跑遍每個flag 

        //if index 跑完陣列長度 , index 使變為0,從頭開始在跑一次
        if (index == tolf.length) { 
            index = 0;
        }

        //setTimeout 一次性延時定時器, 使其轉動速率依照剩餘步數
        setTimeout(slow, (1000 / steps))
    }
    
    //執行slow此函數
    slow();
}

var oral = document.getElementById("oral"); //獲取全畫面中間卡片播放input
var osound = document.getElementById("osound");//獲取歡迎口說音效


//全畫面中間卡片播放input按鈕動作
oral.onclick = function () { 
    osound.play(); //播放歡迎口說音效
    cmusic.pause();
}

//設定各國全畫面中間卡片內容 and 口說播放內容  for jQuery
function allWindow0() {
    loc.innerText = tolf[0].loc;
    wel.innerHTML = tolf[0].wel;
    country.src = tolf[0].pic;
    osound.src = tolf[0].oral;
}
function allWindow1() {
    loc.innerText = tolf[1].loc;
    wel.innerHTML = tolf[1].wel;
    country.src = tolf[1].pic;
    osound.src = tolf[1].oral;
}
function allWindow2() {
    loc.innerText = tolf[2].loc;
    wel.innerHTML = tolf[2].wel;
    country.src = tolf[2].pic;
    osound.src = tolf[2].oral;
}
function allWindow3() {
    loc.innerText = tolf[3].loc;
    wel.innerHTML = tolf[3].wel;
    country.src = tolf[3].pic;
    osound.src = tolf[3].oral;
}
function allWindow4() {
    loc.innerText = tolf[4].loc;
    wel.innerHTML = tolf[4].wel;
    country.src = tolf[4].pic;
    osound.src = tolf[4].oral;
}
function allWindow5() {
    loc.innerText = tolf[5].loc;
    wel.innerHTML = tolf[5].wel;
    country.src = tolf[5].pic;
    osound.src = tolf[5].oral;
}
function allWindow6() {
    loc.innerText = tolf[6].loc;
    wel.innerHTML = tolf[6].wel;
    country.src = tolf[6].pic;
    osound.src = tolf[6].oral;
}
function allWindow7() {
    loc.innerText = tolf[7].loc;
    wel.innerHTML = tolf[7].wel;
    country.src = tolf[7].pic;
    osound.src = tolf[7].oral;
}
function allWindow8() {
    loc.innerText = tolf[8].loc;
    wel.innerHTML = tolf[8].wel;
    country.src = tolf[8].pic;
    osound.src = tolf[8].oral;
}
function allWindow9() {
    loc.innerText = tolf[9].loc;
    wel.innerHTML = tolf[9].wel;
    country.src = tolf[9].pic;
    osound.src = tolf[9].oral;
}
function allWindow10() {
    loc.innerText = tolf[10].loc;
    wel.innerHTML = tolf[10].wel;
    country.src = tolf[10].pic;
    osound.src = tolf[10].oral;
}
function allWindow11() {
    loc.innerText = tolf[11].loc;
    wel.innerHTML = tolf[11].wel;
    country.src = tolf[11].pic;
    osound.src = tolf[11].oral;
}


 