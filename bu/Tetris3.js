//Tetris bgm 引用 https://youtu.be/K3hr3kONhjw
//undertale bgm 引用 
//効果音 引用 

//-------フレーム処理
FPS = 20;
let stime,etime,ptime;

//============= この下に変数を追加 =========
let tetsize = 35;

let game = 0;

let direction = 0;

let offsetx = 0;
let offsety = 0;

let ctroll = 0;
let ctmove = 0;

let clearline = 0;

let scene = 0;

let Coffset = 0;

let gameoverword = 0;

let rndnumber = 0;
let rndn = [];
rndn[rndnumber] = 0;
let movingmino = rndmino();

let scooltime = 1;
let condition = 0;
let check = 0;

let skipkey = 0;

let soulx = 944;
let souly = 525;
let soulxv = -56.4;
let soulyv = 45;
let soulposition = 0;
let soulkoudouposition = 0;
let hp = 10;
let batasuko = 1;

const tetris_bgm = new Audio('sound/tetris_bgm.mp3');
const mn_bgm = new Audio('sound/mn_bgm.mp3');
const sound = new Audio('sound/clear.mp3');
const text = new Audio('sound/text.mp3');
const talk = new Audio('sound/talk.mp3');
const talk_slow = new Audio('sound/talk_slow.mp3');
const start_battle = new Audio('sound/start_battle.mp3');

let field = [
    ["1","1","1","1","1","1","1","1","1","1","1","1"],
    ["1","0","0","0","0","0","0","0","0","0","0","1"],
    ["1","0","0","0","0","0","0","0","0","0","0","1"],
    ["1","0","0","0","0","0","0","0","0","0","0","1"],
    ["1","0","0","0","0","0","0","0","0","0","0","1"],
    ["1","0","0","0","0","0","0","0","0","0","0","1"],
    ["1","0","0","0","0","0","0","0","0","0","0","1"],
    ["1","0","0","0","0","0","0","0","0","0","0","1"],
    ["1","0","0","0","0","0","0","0","0","0","0","1"],
    ["1","0","0","0","0","0","0","0","0","0","0","1"],
    ["1","0","0","0","0","0","0","0","0","0","0","1"],
    ["1","0","0","0","0","0","0","0","0","0","0","1"],
    ["1","0","0","0","0","0","0","0","0","0","0","1"],
    ["1","0","0","0","0","0","0","0","0","0","0","1"],
    ["1","0","0","0","0","0","0","0","0","0","0","1"],
    ["1","0","0","0","0","0","0","0","0","0","0","1"],
    ["1","0","0","0","0","0","0","0","0","0","0","1"],
    ["1","0","0","0","0","0","0","0","0","0","0","1"],
    ["1","0","0","0","0","0","0","0","0","0","0","1"],
    ["1","0","0","0","0","0","0","0","0","0","0","1"],
    ["1","0","0","0","0","0","0","0","0","0","0","1"],
    ["1","1","1","1","1","1","1","1","1","1","1","1"],
];

let m =
    [
        //i
        [
            [
                ["0","0","0","0"],
                ["1","1","1","1"],
                ["0","0","0","0"],
                ["0","0","0","0"],
            ],
            [
                ["0","0","1","0"],
                ["0","0","1","0"],
                ["0","0","1","0"],
                ["0","0","1","0"],
            ],
            [
                ["0","0","0","0"],
                ["0","0","0","0"],
                ["1","1","1","1"],
                ["0","0","0","0"],
            ],
            [
                ["0","1","0","0"],
                ["0","1","0","0"],
                ["0","1","0","0"],
                ["0","1","0","0"],
            ],
        ],
        //t
        [
            [
                ["0","1","0","0"],
                ["1","1","1","0"],
                ["0","0","0","0"],
                ["0","0","0","0"],
            ],
            [
                ["0","1","0","0"],
                ["0","1","1","0"],
                ["0","1","0","0"],
                ["0","0","0","0"],
            ],
            [
                ["0","0","0","0"],
                ["1","1","1","0"],
                ["0","1","0","0"],
                ["0","0","0","0"],
            ],
            [
                ["0","1","0","0"],
                ["1","1","0","0"],
                ["0","1","0","0"],
                ["0","0","0","0"],
            ],
        ],
        //j
        [
            [
                ["1","0","0","0"],
                ["1","1","1","0"],
                ["0","0","0","0"],
                ["0","0","0","0"],
            ],
            [
                ["0","1","1","0"],
                ["0","1","0","0"],
                ["0","1","0","0"],
                ["0","0","0","0"],
            ],
            [
                ["0","0","0","0"],
                ["1","1","1","0"],
                ["0","0","1","0"],
                ["0","0","0","0"],
            ],
            [
                ["0","1","0","0"],
                ["0","1","0","0"],
                ["1","1","0","0"],
                ["0","0","0","0"],
            ],
        ],
        //l
        [
            [
                ["0","0","1","0"],
                ["1","1","1","0"],
                ["0","0","0","0"],
                ["0","0","0","0"],
            ],
            [
                ["0","1","0","0"],
                ["0","1","0","0"],
                ["0","1","1","0"],
                ["0","0","0","0"],
            ],
            [
                ["0","0","0","0"],
                ["1","1","1","0"],
                ["1","0","0","0"],
                ["0","0","0","0"],
            ],
            [
                ["1","1","0","0"],
                ["0","1","0","0"],
                ["0","1","0","0"],
                ["0","0","0","0"],
            ],
        ],
        //s
        [
            [
                ["0","1","1","0"],
                ["1","1","0","0"],
                ["0","0","0","0"],
                ["0","0","0","0"],
            ],
            [
                ["0","1","0","0"],
                ["0","1","1","0"],
                ["0","0","1","0"],
                ["0","0","0","0"],
            ],
            [
                ["0","0","0","0"],
                ["0","1","1","0"],
                ["1","1","0","0"],
                ["0","0","0","0"],
            ],
            [
                ["1","0","0","0"],
                ["1","1","0","0"],
                ["0","1","0","0"],
                ["0","0","0","0"],
            ],
        ],
        //z
        [
            [
                ["1","1","0","0"],
                ["0","1","1","0"],
                ["0","0","0","0"],
                ["0","0","0","0"],
            ],
            [
                ["0","0","1","0"],
                ["0","1","1","0"],
                ["0","1","0","0"],
                ["0","0","0","0"],
            ],
            [
                ["0","0","0","0"],
                ["1","1","0","0"],
                ["0","1","1","0"],
                ["0","0","0","0"],
            ],
            [
                ["0","1","0","0"],
                ["1","1","0","0"],
                ["1","0","0","0"],
                ["0","0","0","0"],
            ],
        ],
        //o
        [
            [
                ["0","1","1","0"],
                ["0","1","1","0"],
                ["0","0","0","0"],
                ["0","0","0","0"],
            ],
            [
                ["0","1","1","0"],
                ["0","1","1","0"],
                ["0","0","0","0"],
                ["0","0","0","0"],
            ],
            [
                ["0","1","1","0"],
                ["0","1","1","0"],
                ["0","0","0","0"],
                ["0","0","0","0"],
            ],
            [
                ["0","1","1","0"],
                ["0","1","1","0"],
                ["0","0","0","0"],
                ["0","0","0","0"],
            ],
        ],
    ];

init();
loop();

function init(){
    setCanvas(1920, 1080);

    setInterval(fall,800);
    rndnumber++;

    loadImg(0, "image/ms.png");
    loadpicture(1,20,1);
    loadpicture(2,18,21);
    loadpicture(3,8,39);
    loadpicture(4,23,47);
    loadpicture(5,17,70);
    loadpicture(6,12,87);
    loadpicture(7,13,99);
    loadpicture(8,26,112);
    loadpicture(9,29,138);
    loadpicture(10,49,167);
    loadpicture(11,20,216);
    loadImg(236, "image/soul.png");
    loadImg(237, "image/option/tatakau/1.png");
    loadImg(238, "image/option/tatakau/2.png");
    loadImg(239, "image/option/tatakau/3.png");
    loadImg(240, "image/option/koudou/1.png");
    loadImg(241, "image/option/koudou/2.png");
    loadImg(242, "image/option/koudou/3.png");
    loadImg(243, "image/option/item/1.png");
    loadImg(244, "image/option/item/2.png");
    loadImg(245, "image/option/item/3.png");
    loadImg(246, "image/option/minogasu/1.png");
    loadImg(247, "image/option/minogasu/2.png");
    loadImg(248, "image/option/minogasu/3.png");
    //loadImg(249, "image/option/message.png");
    loadImg(250, "image/player_lv1.png");
    loadImg(251, "image/hp_gauge.png");
    loadImg(252, "image/null.png");
    loadImg(253, "image/option/koudou/mi-go.png");
    loadImg(254, "image/option/koudou/bunseki.png");
    loadImg(255, "image/option/koudou/hanasu.png");
    loadImg(256, "image/option/item/batasuko.png");
    loadImg(257, "image/option/minogasu/nigasu.png");
    for(let i = 0; i < 21; i++){
        loadImg(258+i, "image/number/"+i+".png");
    }
    loadpicture(12,16,279);
}

function loop(){
    stime = Date.now();	//処理開始時刻を取得

    //========= ここからフレーム内の処理を追加 =========
    if(game == 0){
        if(scene == 0){
            writeblack();

            ctx.fillStyle = "white";
            writeword(104,"Tetris",820,cvs.height/2);
            writeword(60,"Play",900,750)
            writeword(60,"Chapter",845,820);

            cursor();
            writecursor();
            enter();
        }
        if(scene == 1){
            writeblack();

            ctx.fillStyle = "white";
            writeword(60,"Press Enter",790,570);

            if(key[13] > 0){
                offsety = 0;
                scene = 2;
                tetris_bgm.play();
                tetris_bgm.loop = true;
            }
        }
        if(scene == 2){
            writeblack();
            write();
            spawn();
            move();

            clearcheck();
            
            gameover();

            ctx.fillStyle = "white";
            writeword(40,'Score : '+ clearline,1300,300);
            writeword(40,"Move  :  → ↓ ←",1300,700);
            writeword(40,"Roll  :  z or x",1300,800);

            if(clearline > 9){
                game = 1;
            }
        }
        if(gameoverword == 1){
            ctx.fillStyle = "white";
            writeword(60,"Game Over",200,200);
            writeword(60,"press f5 key",200,300);
        }
        if(scene == 4){
            writeblack();
        }
    }else if(game == 1){
        tetris_bgm.pause();
        if(key[66] > 0 && scooltime == 0 && skipkey == 0){
            condition = 12;
        }
        if(condition == 0){
            condition = 1;
            setTimeout(black,200,1);
            setTimeout(black,400,2);
            setTimeout(black,600,3);
            setTimeout(writeframe,1400);
            setTimeout(drawImg,1400,0,700,100);
            setTimeout(talkplay,2500);
            setTimeout(talkpause,3450)
            for(let i = 0; i < 20; i++){
                setTimeout(drawImg,2500+i*50,1+i,335,735);
            }
            setTimeout(cooltime0,3950);
        }
        if(condition == 1 && scooltime == 0){
            if(key[32] > 0 || key[90] > 0 || key[13] > 0){
                conditioncheck();
            }
        }
        if(condition == 2){
            talkmessage(3,0,17,50,21,735,1850);
        }
        if(condition == 3 && scooltime == 0){
            if(key[32] > 0 || key[90] > 0 || key[13] > 0){
                conditioncheck();
            }
        }
        if(condition == 4){
            talkmessage(5,0,8,300,39,735,3400);
        }
        if(condition == 5 && scooltime == 0){
            if(key[32] > 0 || key[90] > 0 || key[13] > 0){
                conditioncheck();
            }
        }
        if(condition == 6){
            talkmessage(7,0,23,50,47,735,2150);
        }
        if(condition == 7 && scooltime == 0){
            if(key[32] > 0 || key[90] > 0 || key[13] > 0){
                conditioncheck();
            }
        }
        if(condition == 8){
            talkmessage(9,0,17,50,70,735,1850);
        }
        if(condition == 9 && scooltime == 0){
            if(key[32] > 0 || key[90] > 0 || key[13] > 0){
                conditioncheck();
            }
        }
        if(condition == 10){
            talkmessage(11,0,12,50,87,735,1600);
        }
        if(condition == 11 && scooltime == 0){
            if(key[32] > 0 || key[90] > 0 || key[13] > 0){
                conditioncheck();
            }
        }
        if(condition == 12){
            skipkey = 1;
            scooltime = 1;
            talkmessage(13,0,13,50,99,790,1650);
        }
        if(condition == 13 && scooltime == 0){
            if(key[32] > 0 || key[90] > 0 || key[13] > 0){
                conditioncheck();
                writeblack();
                drawImg(236,944,525);
                start_battle.play();
            }
        }
        if(condition == 14){
            condition = 15;
            setTimeout(writeblack,150);
            setTimeout(drawImg,300,236,944,525);
            setTimeout(cooltime0,300);
        }
        if(condition == 15 && scooltime == 0){
            writeblack();
            drawImg(236,soulx,souly);
            if(soulx <= 381 && souly >= 975){
                condition = 99;
                setTimeout(gamechange,200);
                //mn_bgm.play();
                //mn_bgm.loop = true;
            }
            if(condition == 15){
                soulx = soulx + soulxv;
                souly = souly + soulyv;
            }
        }
    }else if(game == 2){
        if(condition == 0){
            condition = 11;
            writeblack();
            drawImg(0,700,50);
            drawImg(250,364,850);
            writeframeup();
            hpdraw(hp);
            for(let i = 0; i < 16; i++){
                setTimeout(drawImg,500+i*50,279+i,379,565);
            }
            setTimeout(textplay,500);
            setTimeout(textpause,1250);
            scooltime = 1;
            setTimeout(cooltime0,300);
        }
        if(condition == 11){
            sentaku(1);
            sentaku(2);
            sentaku(3);
            sentaku(4);
            soulmove();
        }
        if(condition == 1){
            writeblack();
            drawImg(0,700,50);
            drawImg(250,364,850);
            writeframeup();
            hpdraw(hp);
            soulback(0);
            movesoul(239,240,243,246);
        }
        if(condition == 2){
            soulkoudouposition = 0;
            condition = 9;
            scooltime = 1;
            writeblack();
            drawImg(0,700,50);
            drawImg(250,364,850);
            writeframeup();
            hpdraw(hp);
            movesoul(237,242,243,246);
            drawImg(253,379,565);
            setTimeout(cooltime0,300);
        }
        if(condition == 9){
            soulback(0);
            if(scooltime == 0){
                if(key[32] > 0 || key[90] > 0 || key[13] > 0){
                    condition = 10;
                    scooltime = 1;
                    writeblack();
                    drawImg(0,700,50);
                    drawImg(250,364,850);
                    writeframeup();
                    hpdraw(hp);
                    movesoul(237,241,243,246);
                    drawImg(254,379,565);
                    setTimeout(cooltime0,300);
                }
            }
        }
        if(condition == 10){
            soulback(2);
            soulkoudou();
            if(soulkoudouposition == 0){
                drawImg(254,379,565);
                if(scooltime == 0){
                    if(key[32] > 0 || key[90] > 0 || key[13] > 0){
                        writeblack();
                        drawImg(0,700,50);
                        drawImg(250,364,850);
                        writeframeup();
                        hpdraw(hp);
                        movesoul(237,241,243,246);
                        drawImg(252,379,565);
                        condition = 6;
                        scooltime = 1;
                        for(let i = 0; i < 49; i++){
                            setTimeout(drawImg,500+i*50,167+i,379,565);
                        }
                        setTimeout(textplay,500);
                        setTimeout(textpause,2900);
                        setTimeout(cooltime0,3400);
                    }
                }
            }else{
                drawImg(255,379,565);
                if(scooltime == 0){
                    if(key[32] > 0 || key[90] > 0 || key[13] > 0){
                        writeblack();
                        drawImg(0,700,50);
                        drawImg(250,364,850);
                        writeframeup();
                        hpdraw(hp);
                        movesoul(237,241,243,246);
                        drawImg(252,379,565);
                        condition = 6;
                        scooltime = 1;
                        for(let i = 0; i < 20; i++){
                            setTimeout(drawImg,500+i*50,216+i,379,565);
                        }
                        setTimeout(textplay,500);
                        setTimeout(textpause,1450);
                        setTimeout(cooltime0,2000);
                    }
                }
            }
        }
        if(condition == 3){
            condition = 7;
            writeblack();
            drawImg(0,700,50);
            drawImg(250,364,850);
            writeframeup();
            hpdraw(hp);
            movesoul(237,240,245,246);
            drawImg(256,379,565);
            setTimeout(cooltime0,300);
        }
        if(condition == 7){
            soulback(0);
            if(scooltime == 0){
                if(key[32] > 0 || key[90] > 0 || key[13] > 0){
                    batasuko = 0;
                    hp = 20;
                    writeblack();
                    drawImg(0,700,50);
                    drawImg(250,364,850);
                    writeframeup();
                    hpdraw(hp);
                    movesoul(237,240,244,246);
                    drawImg(252,379,565);
                    condition = 6;
                    scooltime = 1;
                    for(let i = 0; i < 29; i++){
                        setTimeout(drawImg,500+i*50,138+i,379,565);
                    }
                    setTimeout(textplay,500);
                    setTimeout(textpause,1900);
                    setTimeout(cooltime0,2450);
                }
            }
        }
        if(condition == 4){
            condition = 5;
            writeblack();
            drawImg(0,700,50);
            drawImg(250,364,850);
            writeframeup();
            hpdraw(hp);
            movesoul(237,240,243,248);
            drawImg(257,379,565);
            setTimeout(cooltime0,300);
        }
        if(condition == 5){
            soulback(0);
            if(scooltime == 0){
                if(key[32] > 0 || key[90] > 0 || key[13] > 0){
                    writeblack();
                    drawImg(0,700,50);
                    drawImg(250,364,850);
                    writeframeup();
                    hpdraw(hp);
                    movesoul(237,240,243,247);
                    drawImg(252,379,565);
                    condition = 6;
                    scooltime = 1;
                    for(let i = 0; i < 26; i++){
                        setTimeout(drawImg,500+i*50,112+i,379,565);
                    }
                    setTimeout(textplay,500);
                    setTimeout(textpause,1750);
                    setTimeout(cooltime0,2300);
                }
            }
        }
        if(condition == 6 && scooltime == 0){
            if(key[32] > 0 || key[90] > 0 || key[13] > 0){
                condition = 0;
                scooltime = 1;
                setTimeout(cooltime0,200);
            }
        }
    }

    //========= ここまでフレーム内の処理を追加 ========= 
    
    etime = Date.now(); //処理終了時刻を取得
    ptime = etime - stime;  //処理にかかった時間
    setTimeout("loop()", parseInt(1000/FPS) - ptime);//再呼び出し
}

//============= この下に関数を追加 =========
function talkplay(){
    talk.play();
}
function talkpause(){
    talk.pause();
}
function textplay(){
    text.play();
}
function textpause(){
    text.pause();
}
function soulback(nextnumber){
    if(key[88] > 0 && scooltime == 0){
        condition = nextnumber;
        scooltime = 1;
        setTimeout(cooltime0,300);
    }
}
function sentaku(i){
    if(soulposition == i-1 && scooltime == 0){
        if(key[32] > 0 || key[90] > 0 || key[13] > 0){
            condition = i;
            scooltime = 1;
        }
    }
}
function soulkoudou(){
    if(soulkoudouposition == 0 && scooltime == 0){
        if(key[39] > 0){
            soulkoudouposition = 1;
            scooltime = 1;
            setTimeout(cooltime0,300);
        }
    }else if(soulkoudouposition == 1 && scooltime == 0){
        if(key[37] > 0){
            soulkoudouposition = 0;
            scooltime = 1;
            setTimeout(cooltime0,300);
        }
    }
}
function hpdraw(nowhp){
    if(hp > 20){
        hp = 20;
    }
    for(let i = 0; i < nowhp; i++){
        drawImg(251,895+i*3,874);
    }
    drawImg(258+nowhp,971,886);
}
function gamechange(){
    game = 2;
    condition = 0;

}
function soulmove(){
    if(soulposition == 0){
        movesoul(238,240,243,246);
    }
    if(soulposition == 1){
        movesoul(237,241,243,246);
    }
    if(soulposition == 2){
        movesoul(237,240,244,246);
    }
    if(soulposition == 3){
        movesoul(237,240,243,247);
    }
    //右
    if(key[39] > 0){
        if (soulposition != 3 && ctmove == 0){
            soulposition ++;
            ctmove = 1;
            setTimeout(Mcooltime,100);
        }
    }
    //左
    if(key[37] > 0){
        if (soulposition != 0 && ctmove == 0){
            soulposition --;
            ctmove = 1;
            setTimeout(Mcooltime,100);
        }
    }
}
function movesoul(n0,n1,n2,n3){
    drawImg(n0,364,947);
    drawImg(n1,684,947);
    drawImg(n2,1004,947);
    drawImg(n3,1324,947);
}
function talkmessage(nextconditionnumber,drawImgnumber,mojisu,kankaku,startImgnumber,y,nextcooltime){
    condition = nextconditionnumber;
    writeblack();
    writeframe();
    drawImg(drawImgnumber,700,100);
    if(condition == 5){
        talk_slow.play();
    }else{
        setTimeout(talkplay,500);
        setTimeout(talkpause,nextcooltime-500);
    }
    for(let i = 0; i < mojisu; i++){
        setTimeout(drawImg,500+i*kankaku,startImgnumber+i,335,y);
    }
    setTimeout(cooltime0,nextcooltime);
}
function loadpicture(messagenumber,mojisu,startnumber){
    for(let i = 1; i <= mojisu; i++){
        loadImg(startnumber+i-1, "image/message"+messagenumber+"/"+i+".png");
    }
}
function cooltime0(){
    scooltime = 0;
}
function conditioncheck(){
    condition++;
    scooltime = 1;
}
function black(i){
    ctx.fillStyle = '#000000';
    ctx.fillRect(0,0,cvs.width,cvs.height/3*i);
}
function writeframe(){
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(300,700,1320,300);
    ctx.fillStyle = '#000000';
    ctx.fillRect(320,720,1280,260);
}
function writeframeup(){
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(364,550,1192,300);
    ctx.fillStyle = '#000000';
    ctx.fillRect(379,565,1162,270);
}
function writeblack(){
    ctx.fillStyle = '#000000';
    ctx.fillRect(0,0,cvs.width,cvs.height);
}
function writeword(size,word,x,y){
    ctx.font = parseInt(size) + "px bold monospace";
    ctx.fillText(word,x,y);
}
function writewordf(size,font,word,x,y){
    ctx.font = parseInt(size) + font;
    ctx.fillText(word,x,y);
}
function write(){
    for(let i=0; i<22; i++){
        for(let j=0; j<12; j++){
            if(field[i][j] == 1){
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(750+tetsize*j,155+tetsize*i,tetsize,tetsize);
            }
        }
    }
}
function spawn(){
    for(let k=0; k<4; k++){
        for(let l=0; l<4; l++){
            if(m[movingmino][direction][k][l] == 1){
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(890+tetsize*l+offsetx*tetsize,190+tetsize*k+offsety*tetsize,tetsize,tetsize);
                ctx.fillStyle = '#000000';
                ctx.strokeRect(890+tetsize*l+offsetx*tetsize,190+tetsize*k+offsety*tetsize,tetsize,tetsize);
            }
        }
    }
}
function Rcooltime(){
    ctroll = 0;
}
function Mcooltime(){
    ctmove = 0;
}
function move(){
    //右
    if(key[39] > 0){
        if (canmove(1,0) && ctmove == 0){
            offsetx ++;
            ctmove = 1;
            setTimeout(Mcooltime,100);
        }
    }
    //左
    if(key[37] > 0){
        if (canmove(-1,0) && ctmove == 0){
            offsetx --;
            ctmove = 1;
            setTimeout(Mcooltime,100);
        }
    }
    //上
    /*
    if(key[38] > 0){
        if (canmove(0,-1)){
            offsety --;
        }
    }
    */
    //下
    if(key[40] > 0){
        if (canmove(0,1)){
            offsety ++;
        }
    }
    if(key[90] > 0){
        if(canroll(1) == 1 && ctroll == 0){
            direction++;
            if(direction == 4){
                direction = 0;
            }
            ctroll = 1;
            setTimeout(Rcooltime,150);
        }
    }
    if(key[88] > 0){
        if(canroll(-1) == 1 && ctroll == 0){
            direction--;
            if(direction == -1){
                direction = 3;
            }
            ctroll = 1;
            setTimeout(Rcooltime,150);
        }
    }
    //skip
    if(key[65] > 0){
        game = 1;
    }
}
function canmove(dx,dy){
    for(let y = 0; y < 4; y++){
        for(let x = 0; x < 4; x++){
            if(m[movingmino][direction][y][x] == 1){
                //結果=mino上の座標+現在の座標+移動する分
                let nx = x + offsetx + dx + 4;
                let ny = y + offsety + dy + 1;
                if(nx <= -1 || ny <= -1 || nx >= 11 || ny >= 21 || field[ny][nx] == 1){
                    return false;
                }
            }
        }
    }
    return true;
}
function canroll(d){
    d += direction;
    if(d == -1){
        d = 3;
    }else if(d == 4){
        d = 0;
    }
    for(let y = 0; y < 4; y++){
        for(let x = 0; x < 4; x++){
            if(m[movingmino][d][y][x] == 1){
                //結果=mino上の座標+現在の座標とのずれ
                let nx = x + offsetx + 4;
                let ny = y + offsety + 1;
                if(nx <= -1 || ny <= -1 || nx >= 11 || ny >= 21 || field[ny][nx] == 1){
                    return false;
                }
            }
        }
    }
    return true;
}
function fall(){
    if(canfall() && scene == 2 && gameoverword == 0){
        for(let y = 0; y < 4; y++){
            for(let x = 0; x < 4; x++){
                if(m[movingmino][direction][y][x] == 1){
                    let nx = x + offsetx + 4;
                    let ny = y + offsety + 1;
                    field[ny][nx] = 1;
                }
            }
        }
        direction = 0;
        movingmino = rndmino();
        if(rndnumber == 6){
            rndnumber = 0;
            for(let i = 0; i<7; i++){
                rndn[i] = 7;
            }
        }else{
            rndnumber++;
        }
        offsetx = 0;
        offsety = 0;
    }else if(gameoverword == 0){
        offsety++;
    }
}
function rndmino(){
    rndn[rndnumber] = rnd(7);
    while(true){
        switch(rndnumber){
            case 0:
                return rndn[rndnumber];
            case 1:
                if(rndn[rndnumber] == rndn[0]){
                    rndn[rndnumber] = rnd(7);
                    break;
                }else{
                    return rndn[rndnumber];
                }
            case 2:
                if(rndn[rndnumber] == rndn[0] || rndn[rndnumber] == rndn[1]){
                    rndn[rndnumber] = rnd(7);
                    break;
                }else{
                    return rndn[rndnumber];
                }
            case 3:
                if(rndn[rndnumber] == rndn[0] || rndn[rndnumber] == rndn[1] || rndn[rndnumber] == rndn[2]){
                    rndn[rndnumber] = rnd(7);
                    break;
                }else{
                    return rndn[rndnumber];
                }
            case 4:
                if(rndn[rndnumber] == rndn[0] || rndn[rndnumber] == rndn[1] || rndn[rndnumber] == rndn[2] || rndn[rndnumber] == rndn[3]){
                    rndn[rndnumber] = rnd(7);
                    break;
                }else{
                    return rndn[rndnumber];
                }
            case 5:
                if(rndn[rndnumber] == rndn[0] || rndn[rndnumber] == rndn[1] || rndn[rndnumber] == rndn[2] || rndn[rndnumber] == rndn[3] || rndn[rndnumber] == rndn[4]){
                    rndn[rndnumber] = rnd(7);
                    break;
                }else{
                    return rndn[rndnumber];
                }
            case 6:
                if(rndn[rndnumber] == rndn[0] || rndn[rndnumber] == rndn[1] || rndn[rndnumber] == rndn[2] || rndn[rndnumber] == rndn[3] || rndn[rndnumber] == rndn[4] || rndn[rndnumber] == rndn[5]){
                    rndn[rndnumber] = rnd(7);
                    break;
                }else{
                    return rndn[rndnumber];
                }
        }
    }
}
function canfall(){
    for(let y = 0; y < 4; y++){
        for(let x = 0; x < 4; x++){
            if(m[movingmino][direction][y][x] == 1){
                //結果=mino上の座標+現在の座標+移動する分
                let nx = x + offsetx + 4;
                let ny = y + offsety + 2;
                if(ny >= 21 || field[ny][nx] == 1){
                    return true;
                }
            }
        }
    }
    return false;
}
function clearcheck(){
    for(let y = 1; y < 21; y++){
        let n = 0;
        for(let x = 1; x < 11; x++){
            if(field[y][x] == 1){
                n++;
            }
        }
        if(n == 10){
            sound.play();
            for(let ny = y; ny > 0; ny--){
                for(let nx = 1; nx < 11; nx++){
                    if(ny == 1){
                        field[ny][nx] = 0;
                    }else{
                        field[ny][nx] = field[ny - 1][nx];
                    }
                }
            }
            clearline ++;
        }
    }
}
function gameover(){
    if(gameovercheck() == 1){
        gameoverword = 1;
    }
}
function gameovercheck(){
    for(let y = 0; y < 4; y++){
        for(let x = 0; x < 4; x++){
            if(m[movingmino][direction][y][x] == 1){
                let nx = x + 4;
                let ny = y + 1;
                if(field[ny][nx] == 1){
                    return true;
                }
            }
        }
    }
    return false;
}
function cursor(){
    //上
    if(key[38] > 0){
        if(Coffset > 0){
            Coffset --;
        }
    }
    //下
    if(key[40] > 0){
        if (Coffset < 1){
            Coffset ++;
        }
    }
}
function writecursor(){
    if(Coffset == 0){
        writeword(60,"▶            ◀",780,750);
    }else if(Coffset == 1){
        writeword(60,"▶            ◀",780,820);
    }

}
function enter(){
    if(key[32] > 0 || key[90] > 0 || key[13] > 0){
        if(Coffset == 0){
            flash(750,1);
        }else if(Coffset == 1){
            flash(820,4);
        }
    }
}
function flash(y,afterscene){
    Coffset = 2;
    setTimeout(writeword,200,60,"▶            ◀",785,y);
    setTimeout(changescene,450,afterscene);
}
function changescene(afterscene){
    scene = afterscene;
}