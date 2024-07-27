//Tetris bgm 引用 https://youtu.be/K3hr3kONhjw
//undertale bgm 引用 https://www.youtube.com/watch?v=94JDIBZhSBM
//効果音 引用 https://soundeffect-lab.info/

//フレーム処理
FPS = 20;
let stime,etime,ptime;

//変数
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
let hp = 20;
let mn_hp = 500;
let batasuko = 1;
let bar = 0;
let barx = 0;
let barxv = 62.78;
let stage = 0;
let dcooltaime = 0;
let soulcolor = 0;
let course = 0;

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
    loadImg(295, "image/option/tatakau/mi-go.png");
    loadImg(296, "image/option/tatakau/fight_memory.png");
    loadImg(297, "image/option/tatakau/fight_bar.png");
    for(let i = 1; i <= 6; i++){
        loadImg(297+i, "image/option/tatakau/kougeki/"+i+".png");
    }
    loadImg(304, "image/option/tatakau/fight_bar_null.png");
    loadImg(305, "image/option/tatakau/hp.png");
    loadImg(306, "image/ms_up.png");
    loadImg(307, "image/ms_black.png");
    loadImg(308, "image/option/tatakau/damage/16.png");
    loadImg(309, "image/option/tatakau/damage/20.png");
    loadImg(310, "image/option/tatakau/damage/24.png");
    loadImg(311, "image/option/tatakau/damage/30.png");
    loadImg(312, "image/option/tatakau/mn_hp_bar.png");
    loadImg(313, "image/option/tatakau/mn_hp_bar_null.png");
    loadImg(314, "image/mn_attak/4i.png");
    loadImg(315, "image/soul_dark.png");
    loadImg(316, "image/mn_attak/3i.png");
    loadImg(317, "image/mn_attak/2i.png");
    loadImg(318, "image/mn_attak/1i.png");
    loadImg(319, "image/soul_break.png");
    for(let i = 1; i <= 8; i++){
        loadImg(319+i, "image/soul_"+i+".png");
    }
    loadImg(328, "image/gameover.png");
    loadpicture(13,12,329);
    loadpicture(14,15,341);
    loadpicture(15,46,356);
    loadpicture(16,27,402);
    loadpicture(17,32,429);
}

function loop(){
    stime = Date.now();	//処理開始時刻を取得

    //フレーム内処理
    if(game == 0){
        if(key[69] > 0 && key[82] > 0 && key[84] > 0 && key[89] > 0 && Coffset == 1){
            game = 1;
            condition = 12;
        }
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
                enter_sound1.play();
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
            if(key[80] > 0){
                clearline = 10;
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
            damage.play();
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
                setTimeout(gamechange,200,2);
                mn_bgm.play();
                mn_bgm.loop = true;
            }
            soulx = soulx + soulxv;
            souly = souly + soulyv;
        }
    }else if(game == 2){
        if(condition == 0){
            course = 0;
            condition = 11;
            writeblack();
            drawImg(0,700,50);
            drawImg(250,364,850);
            writeframeup();
            hpdraw(hp);
            soulmove();
            for(let i = 0; i < 16; i++){
                setTimeout(drawImg,500+i*50,279+i,379,565);
            }
            setTimeout(textplay,500);
            setTimeout(() => {
                textpause();
                cooltime0();
            },1300);
            scooltime = 1;
        }
        if(condition == 11 && scooltime == 0){
            sentaku(1);
            sentaku(2);
            item();
            sentaku(4);
            soulmove();
        }
        if(condition == 1){
            bar = 0;
            barx = 0;
            condition = 12;
            scooltime = 1;
            writeblack();
            drawImg(0,700,50);
            drawImg(250,364,850);
            writeframeup();
            hpdraw(hp);
            movesoul(239,240,243,246);
            drawImg(295,379,565);
            for(let i = 0; i <= mn_hp/2; i++){
                drawImg(305,379+i,565);
            }
            setTimeout(cooltime0,200);
        }
        if(condition == 12 && scooltime == 0){
            soulback(0);
            if(key[32] > 0 || key[90] > 0 || key[13] > 0){
                enter_sound1.play();
                condition = 13;
                scooltime = 1;
            }
        }
        if(condition == 13 && (key[32] > 0 || key[90] > 0 || key[13] > 0)){
            enter_sound2.play();
            condition = 14;
            writeblack();
            drawImg(0,700,50);
            drawImg(250,364,850);
            writeframeup();
            hpdraw(hp);
            movesoul(237,240,243,246);
            drawImg(296,379,565);
            setTimeout(cooltime0,200);
        }
        if(condition == 14 && scooltime == 0){
            writeblack();
            drawImg(0,700,50);
            drawImg(250,364,850);
            writeframeup();
            hpdraw(hp);
            movesoul(237,240,243,246);
            drawImg(296,379,565);
            drawImg(297,barx+379,565);
            if(barx > 1130){
                condition = 99;
                setTimeout(changecondition,200,20);
                setTimeout(cooltime0,1500);
            }
            if((key[32] > 0 || key[90] > 0 || key[13] > 0)){
                attack.play();
                condition = 15;
            }
            barx = barx + barxv;
            bar++;
        }
        if(condition == 15){
            scooltime = 1;
            bar--;
            condition = 99;
            setTimeout(changecondition,2500,20);
            if(bar <= 2 || bar >= 16){
                drawdamage(16);
            }else if((bar >= 3 && bar <= 5) || (bar <= 15 && bar >= 13)){
                drawdamage(20);
            }else if((bar >= 6 && bar <= 8) || (bar <= 12 && bar >= 10)){
                drawdamage(24);
            }else if(bar == 9){
                drawdamage(30);
            }
            if(mn_hp < 1){
                setTimeout(gamechange,2500,5);
            }
        }
        if(condition == 20){
            soulx = 944;
            souly = 684;
            drawImg(236,soulx,souly);
            condition = 21;
            if(stage == 0){
                for(let i = 1; i < 56; i++){
                    setTimeout(coursechange,300+100*i,i);
                }
                for(let j = 24; j < 56; j++){
                    setTimeout(coursechange,3500+100*j,j);
                }
                for(let i = 24; i < 53; i++){
                    setTimeout(coursechange,6700+100*i,i);
                }
                setTimeout(coursechange,12000,79);
                setTimeout(coursechange,12100,78);
                setTimeout(coursechange,12200,77);
                for(let i = 56; i < 77; i++){
                    setTimeout(coursechange,6700+100*i,i);
                }
                setTimeout(() => {
                    changecondition(0);
                    //changestage(1);
                },15300);
            }else if(stage == 1){
                setTimeout(() => {
                    changecondition(0);
                    changestage(1);
                },5000);
            }
        }
        if(condition == 21){
            if(stage == 0){
                fightsoul();
                imove();
            }else if(stage == 1){
                fightsoul();
                iattack();
            }
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
        if(condition == 9 && scooltime == 0){
            soulback(0);
            if(key[32] > 0 || key[90] > 0 || key[13] > 0){
                enter_sound1.play();
                condition = 10;
                scooltime = 1;
                writeblack();
                drawImg(0,700,50);
                drawImg(250,364,850);
                writeframeup();
                hpdraw(hp);
                movesoul(237,242,243,246);
                drawImg(254,379,565);
                setTimeout(cooltime0,300);
            }
        }
        if(condition == 10){
            soulback(2);
            soulkoudou();
            if(soulkoudouposition == 0){
                drawImg(254,379,565);
                if(scooltime == 0){
                    if(key[32] > 0 || key[90] > 0 || key[13] > 0){
                        enter_sound2.play();
                        writeblack();
                        drawImg(0,700,50);
                        drawImg(250,364,850);
                        writeframeup();
                        hpdraw(hp);
                        movesoul(237,242,243,246);
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
                if(scooltime == 0 && (key[32] > 0 || key[90] > 0 || key[13] > 0)){
                    enter_sound2.play();
                    writeblack();
                    drawImg(0,700,50);
                    drawImg(250,364,850);
                    writeframeup();
                    hpdraw(hp);
                    movesoul(237,242,243,246);
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
        if(condition == 3){
            condition = 7;
            scooltime = 1;
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
                    eat_sound.play();
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
                    setTimeout(cooltime0,2450);
                }
            }
        }
        if(condition == 4){
            condition = 5;
            scooltime = 1;
            writeblack();
            drawImg(0,700,50);
            drawImg(250,364,850);
            writeframeup();
            hpdraw(hp);
            movesoul(237,240,243,248);
            drawImg(257,379,565);
            setTimeout(cooltime0,300);
        }
        if(condition == 5 && scooltime == 0){
            soulback(0);
            if(key[32] > 0 || key[90] > 0 || key[13] > 0){
                enter_sound1.play();
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
        if(condition == 6 && scooltime == 0 && (key[32] > 0 || key[90] > 0 || key[13] > 0)){
            enter_sound2.play();
            condition = 20;
            scooltime = 1;
            setTimeout(cooltime0,1300);
        }
    }else if(game == 3){
        writeblack();
        if(scene == 0){
            drawImg(319,soulx-5,souly);
        }
        if(scene == 1){
            drawImg(320,soulx-14,souly-10);
        }        
        if(scene == 2){
            drawImg(321,soulx-34,souly-30);
        }
        if(scene == 3){
            drawImg(322,soulx-84,souly-80);
        }
        if(scene == 4){
            drawImg(323,soulx-84,souly-80);
        }
        if(scene == 5){
            drawImg(324,soulx-134,souly-130);
        }
        if(scene == 6){
            drawImg(325,soulx-184,souly-230);
        }
        if(scene == 7){
            drawImg(326,soulx-234,souly-230);
        }
        if(scene == 8){
            drawImg(327,soulx-284,souly-230);
        }
        if(scene == 9){
            drawImg(328,544,200);
            game = 4;
        }
    }else if(game == 5){
        if(condition == 0){
            writeblack();
            drawImg(0,700,50);
            writeframeup();
            for(let i = 0; i < 27; i++){
                setTimeout(drawImg,500+i*100,402+i,380,590);
            }
            condition = 1;
            scooltime = 1;
            setTimeout(cooltime0,4100);
        }else if(condition == 1 && (key[32] > 0 || key[90] > 0 || key[13] > 0) && scooltime == 0){
            writeblack();
            drawImg(0,700,50);
            writeframeup();
            for(let i = 0; i < 32; i++){
                setTimeout(drawImg,500+i*100,429+i,380,590);
            }
            condition = 2;
            scooltime = 1;
            setTimeout(cooltime0,4100);
        }else if(condition == 2 && (key[32] > 0 || key[90] > 0 || key[13] > 0) && scooltime == 0){
            pagereload();
        }
    }

    //ここまでフレーム内の処理
    
    etime = Date.now(); //処理終了時刻を取得
    ptime = etime - stime;  //処理にかかった時間
    setTimeout("loop()", parseInt(1000/FPS) - ptime);//再呼び出し
}

//============= この下に関数を追加 =========
function soulfightmove(){
    //右
    if(key[39] > 0 || key[68] > 0){
        if(key[16] > 0 && canfightmover(10)){
            soulx = soulx + 10;
        }else if(canfightmover(20)){
            soulx = soulx + 20;
        }
    }
    //左
    if(key[37] > 0 || key[65] > 0){
        if(key[16] > 0 && canfightmovel(-10)){
            soulx = soulx - 10;
        }else if(canfightmovel(-20)){
            soulx = soulx - 20;
        }
    }
    //上
    if(key[38] > 0 || key[87] > 0){
        if(key[16] > 0 && canfightmoveu(-10)){
            souly = souly - 10;
        }else if(canfightmoveu(-20)){
            souly = souly - 20;
        }
    }
    //下
    if(key[40] > 0 || key[83] > 0){
        if(key[16] > 0 && canfightmoved(10)){
            souly = souly + 10;
        }else if(canfightmoved(20)){
            souly = souly + 20;
        }
    }
}
function canfightmover(x){
    if(soulx + x < 1509){
        return true;
    }else{
        soulx = 1509;
    }
}
function canfightmovel(x){
    if(soulx + x > 379){
        return true;
    }else{
        soulx = 379;
    }
}
function canfightmoveu(y){
    if(souly + y > 565){
        return true;
    }else{
        souly = 565;
    }
}
function canfightmoved(y){
    if(souly + y < 805){
        return true;
    }else{
        souly = 805;
    }
}
function fightsoul(){
    writeblack();
    drawImg(0,700,50);
    drawImg(250,364,850);
    writeframeup();
    hpdraw(hp);
    movesoul(237,240,243,246);
    soulfightmove();
    if(soulcolor == 0){
        drawImg(236,soulx,souly);
    }else{
        drawImg(315,soulx,souly);
    }
}
function damaged(){
    if(dcooltaime == 0){
        if(hp == 4){
            game = 3;
            gameover_effect.play();
            mn_bgm.pause();
            hp = 0;
            setTimeout(gameover_music,3000);
            setTimeout(changescene,10,0);
            setTimeout(changescene,1400,1);
            setTimeout(changescene,1500,2);
            setTimeout(changescene,1600,3);
            setTimeout(changescene,1700,4);
            setTimeout(changescene,1800,5);
            setTimeout(changescene,1900,6);
            setTimeout(changescene,2000,7);
            setTimeout(changescene,2100,8);
            setTimeout(changescene,3000,9);
            setTimeout(gameoverplay,3500);
            for(let i = 0; i < 12; i++){
                setTimeout(drawImg,3500+i*100,329+i,570,700);
            }
            setTimeout(gameoverpause,4600);
            setTimeout(gameoverplay,7000);
            setTimeout(writeblack,7000);
            setTimeout(drawImg,7000,328,544,200);
            for(let i = 0; i < 15; i++){
                setTimeout(drawImg,7000+i*100,341+i,604,700);
            }
            setTimeout(gameoverpause,8400);
            setTimeout(gameoverplay,10800);
            setTimeout(writeblack,10800);
            setTimeout(drawImg,10800,328,544,200);
            for(let i = 0; i < 46; i++){
                setTimeout(drawImg,10800+i*100,356+i,400,650);
            }
            setTimeout(gameoverpause,15300);
            setTimeout(pagereload,17700);

        }else{
            damaged_sound.play();
            hp = hp - 4;
            dcooltaime = 1;
            setTimeout(dcooltaime0,2900);
            for(let i = 0; i < 10; i++){
                setTimeout(sc1,i*300);
                setTimeout(sc0,150+i*300);
            }
        }
    }
}
function sc0(){
    soulcolor = 0;
}
function sc1(){
    soulcolor = 1;
}
function dcooltaime0(){
    dcooltaime = 0;
}
function gameover_music(){
    gameover_sound.play();
    gameover_sound.loop = true;
}
function coursechange(n){
    course = n;
}
//imove
function imove(){
    if(course == 1){
        blocki(4,1474,565);
    }else if(course == 2){
        blocki(4,1433,565);
    }else if(course == 3){
        blocki(4,1391,565);
    }else if(course == 4){
        blocki(4,1350,565);
    }else if(course == 5){
        blocki(4,1308,565);
        blocki(8,1474,565);
    }else if(course == 6){
        blocki(4,1267,565);
        blocki(8,1433,565);
    }else if(course == 7){
        blocki(4,1225,565);
        blocki(8,1391,565);
    }else if(course == 8){
        blocki(4,1184,565);
        blocki(8,1350,565);
    }else if(course == 9){
        blocki(4,1142,565);
        blocki(8,1308,565);
        blocki(12,1474,565);
    }else if(course == 10){
        blocki(4,1101,565);
        blocki(8,1267,565);
        blocki(12,1433,565);
    }else if(course == 11){
        blocki(4,1059,565);
        blocki(8,1225,565);
        blocki(12,1391,565);
    }else if(course == 12){
        blocki(4,1018,565);
        blocki(8,1184,565);
        blocki(12,1350,565);
    }else if(course == 13){
        blocki(4,976,565);
        blocki(8,1142,565);
        blocki(12,1308,565);
        blocki(16,1474,565);
    }else if(course == 14){
        blocki(4,935,565);
        blocki(8,1101,565);
        blocki(12,1267,565);
        blocki(16,1433,565);
    }else if(course == 15){
        blocki(4,893,565);
        blocki(8,1059,565);
        blocki(12,1225,565);
        blocki(16,1391,565);
    }else if(course == 16){
        blocki(4,852,565);
        blocki(8,1018,565);
        blocki(12,1184,565);
        blocki(16,1350,565);
    }else if(course == 17){
        blocki(4,810,565);
        blocki(8,976,565);
        blocki(12,1142,565);
        blocki(16,1308,565);
        blocki(20,1474,565);
    }else if(course == 18){
        blocki(4,769,565);
        blocki(8,935,565);
        blocki(12,1101,565);
        blocki(16,1267,565);
        blocki(20,1433,565);
    }else if(course == 19){
        blocki(4,727,565);
        blocki(8,893,565);
        blocki(12,1059,565);
        blocki(16,1225,565);
        blocki(20,1391,565);
    }else if(course == 20){
        blocki(4,686,565);
        blocki(8,852,565);
        blocki(12,1018,565);
        blocki(16,1184,565);
        blocki(20,1350,565);
    }else if(course == 21){
        blocki(4,644,565);
        blocki(8,810,565);
        blocki(12,976,565);
        blocki(16,1142,565);
        blocki(20,1308,565);
        blocki(24,1474,565);
    }else if(course == 22){
        blocki(4,603,565);
        blocki(8,769,565);
        blocki(12,935,565);
        blocki(16,1101,565);
        blocki(20,1267,565);
        blocki(24,1433,565);
    }else if(course == 23){
        blocki(4,561,565);
        blocki(8,727,565);
        blocki(12,893,565);
        blocki(16,1059,565);
        blocki(20,1225,565);
        blocki(24,1391,565);
    }else if(course == 24){
        drawblock(1);
    }else if(course == 25){
        drawblock(2);
    }else if(course == 26){
        drawblock(3);
    }else if(course == 27){
        drawblock(4);
    }else if(course == 28){
        drawblock(5);
    }else if(course == 29){
        drawblock(6);
    }else if(course == 30){
        drawblock(7);
    }else if(course == 31){
        drawblock(8);
    }else if(course == 32){
        drawblock(9);
    }else if(course == 33){
        drawblock(10);
    }else if(course == 34){
        drawblock(11);
    }else if(course == 35){
        drawblock(12);
    }else if(course == 36){
        drawblock(13);
    }else if(course == 37){
        drawblock(14);
    }else if(course == 38){
        drawblock(15);
    }else if(course == 39){
        drawblock(16);
    }else if(course == 40){
        drawblock(17);
    }else if(course == 41){
        drawblock(18);
    }else if(course == 42){
        drawblock(19);
    }else if(course == 43){
        drawblock(20);
    }else if(course == 44){
        drawblock(21);
    }else if(course == 45){
        drawblock(22);
    }else if(course == 46){
        drawblock(23);
    }else if(course == 47){
        drawblock(24);
    }else if(course == 48){
        drawblock(25);
    }else if(course == 49){
        drawblock(26);
    }else if(course == 50){
        drawblock(27);
    }else if(course == 51){
        drawblock(28);
    }else if(course == 52){
        drawblock(29);
    }else if(course == 53){
        drawblock(30);
    }else if(course == 54){
        drawblock(31);
    }else if(course == 55){
        drawblock(0);
    }else if(course == 77){
        blocki(0,395,565);
        blocki(4,561,565);
        blocki(8,727,565);
        blocki(12,893,565);
        blocki(16,1059,565);
        blocki(20,1225,565);
    }else if(course == 78){
        blocki(0,437,565);
        blocki(4,603,565);
        blocki(8,769,565);
        blocki(12,935,565);
        blocki(16,1101,565);
        blocki(20,1267,565);
    }else if(course == 79){
        blocki(0,479,565);
        blocki(4,644,565);
        blocki(8,810,565);
        blocki(12,976,565);
        blocki(16,1142,565);
        blocki(20,1308,565);
    }else if(course == 56){
        blocki(4,520,565);
        blocki(8,686,565);
        blocki(12,852,565);
        blocki(16,1018,565);
        blocki(20,1184,565);
    }else if(course == 57){
        blocki(4,478,565);
        blocki(8,644,565);
        blocki(12,810,565);
        blocki(16,976,565);
        blocki(20,1142,565);
    }else if(course == 58){
        blocki(4,437,565);
        blocki(8,603,565);
        blocki(12,769,565);
        blocki(16,935,565);
        blocki(20,1101,565);
    }else if(course == 59){
        blocki(4,395,565);
        blocki(8,561,565);
        blocki(12,727,565);
        blocki(16,893,565);
        blocki(20,1059,565);
    }else if(course == 60){
        blocki(8,520,565);
        blocki(12,686,565);
        blocki(16,852,565);
        blocki(20,1018,565);
    }else if(course == 61){
        blocki(8,478,565);
        blocki(12,644,565);
        blocki(16,810,565);
        blocki(20,976,565);
    }else if(course == 62){
        blocki(8,437,565);
        blocki(12,603,565);
        blocki(16,769,565);
        blocki(20,935,565);
    }else if(course == 63){
        blocki(8,395,565);
        blocki(12,561,565);
        blocki(16,727,565);
        blocki(20,893,565);
    }else if(course == 64){
        blocki(12,520,565);
        blocki(16,686,565);
        blocki(20,852,565);
    }else if(course == 65){
        blocki(12,478,565);
        blocki(16,644,565);
        blocki(20,810,565);
    }else if(course == 66){
        blocki(12,437,565);
        blocki(16,603,565);
        blocki(20,769,565);
    }else if(course == 67){
        blocki(12,395,565);
        blocki(16,561,565);
        blocki(20,727,565);
    }else if(course == 68){
        blocki(16,520,565);
        blocki(20,686,565);
    }else if(course == 69){
        blocki(16,478,565);
        blocki(20,644,565);
    }else if(course == 70){
        blocki(16,437,565);
        blocki(20,603,565);
    }else if(course == 71){
        blocki(16,395,565);
        blocki(20,561,565);
    }else if(course == 72){
        blocki(20,520,565);
    }else if(course == 73){
        blocki(20,478,565);
    }else if(course == 74){
        blocki(20,437,565);
    }else if(course == 75){
        blocki(20,395,565);
    }
}
function drawblock(n){
    blocki(n,395,565);
    blocki(n+1,437,565);
    blocki(n+2,478,565);
    blocki(n+3,520,565);
    blocki(n+4,561,565);
    blocki(n+5,603,565);
    blocki(n+6,644,565);
    blocki(n+7,686,565);
    blocki(n+8,727,565);
    blocki(n+9,769,565);
    blocki(n+10,810,565);
    blocki(n+11,852,565);
    blocki(n+12,893,565);
    blocki(n+13,935,565);
    blocki(n+14,976,565);
    blocki(n+15,1018,565);
    blocki(n+16,1059,565);
    blocki(n+17,1101,565);
    blocki(n+18,1142,565);
    blocki(n+19,1184,565);
    blocki(n+20,1225,565);
    blocki(n+21,1267,565);
    blocki(n+22,1308,565);
    blocki(n+23,1350,565);
    blocki(n+24,1391,565);
    blocki(n+25,1433,565);
    blocki(n+26,1474,565);
}
function blocki(n,x,y){
    if(n == 0 || n == 32){
        drawImg(314,x,y+70);
        if(x-32 < soulx && x+50 > soulx && y+270 > souly && y+40 < souly){
            damaged();
        }
    }
    if(n == 4 || n == 28 || n == 36){
        drawImg(318,x,y);
        if(x-32 < soulx && x+50 > soulx && y+50 > souly && y-32 < souly){
            damaged();
        }
        drawImg(316,x,y+120);
        if(x-32 < soulx && x+50 > soulx && y+270 > souly && y+88 < souly){
            damaged();
        }
    }
    if(n == 8 || n == 24 || n == 40 || n == 56){
        drawImg(317,x,y);
        if(x-32 < soulx && x+50 > soulx && y+100 > souly && y-32 < souly){
            damaged();
        }
        drawImg(317,x,y+170);
        if(x-32 < soulx && x+50 > soulx && y+270 > souly && y+138 < souly){
            damaged();
        }
    }
    if(n == 12 || n == 20 || n == 44 || n == 52){
        drawImg(316,x,y);
        if(x-32 < soulx && x+50 > soulx && y+150 > souly && y-32 < souly){
            damaged();
        }
        drawImg(318,x,y+220);
        if(x-32 < soulx && x+50 > soulx && y+270 > souly && y+188 < souly){
            damaged();
        }
    }
    if(n == 16 || n == 48){
        drawImg(314,x,y);
        if(x-32 < soulx && x+50 > soulx && y+200 > souly && y-32 < souly){
            damaged();
        }
    }
}
//ここまでimove
//iattack
function iattack(){
    drawImg(314,300,20);
}
function soulback(nextnumber){
    if((key[88] > 0 || key[81] > 0) && scooltime == 0){
        condition = nextnumber;
        scooltime = 1;
        if(nextnumber == 0){
            setTimeout(cooltime0,1300);
        }else{
            setTimeout(cooltime0,300);
        }
    }
}
function drawdamage(n){
    let nn,n1,n2,next_mn_hp;
    if(n == 16){
        nn = 308;
        next_mn_hp = mn_hp - 16;
    }
    if(n == 20){
        nn = 309;
        next_mn_hp = mn_hp - 20;
    }
    if(n == 24){
        nn = 310;
        next_mn_hp = mn_hp - 24;
    }
    if(n == 30){
        nn = 311;
        next_mn_hp = mn_hp - 30;
    }
    drawImg(306,700,50);
    drawImg(298,958,200);

    n1 = (1/3)*n;
    n2 = (2/3)*n;

    setTimeout(() => {
        drawImg(306,700,50);
        drawImg(299,958,200);
        drawImg(312,834,465);
        hpdraw_gage(0);
        drawImg(nn,897,400);
    },100);

    setTimeout(() => {
        drawImg(306,700,50);
        drawImg(300,958,200);
        drawImg(312,834,465);
        hpdraw_gage(0);
        drawImg(nn,897,380);
    },200);

    setTimeout(() => {
        drawImg(306,700,50);
        drawImg(301,958,200);
        drawImg(312,834,465);
        hpdraw_gage(n1);
        drawImg(nn,897,360);
    },300);

    setTimeout(() => {
        drawImg(306,700,50);
        drawImg(302,958,200);
        drawImg(312,834,465);
        hpdraw_gage(n1);
        drawImg(nn,897,350);
    },400);

    setTimeout(() => {
        drawImg(306,700,50);
        drawImg(303,958,200);
        drawImg(312,834,465);
        hpdraw_gage(n1);
        drawImg(nn,897,360);
    },500);

    setTimeout(() => {
        drawImg(307,400,50);
        drawImg(306,750,50);
        drawImg(312,834,465);
        hpdraw_gage(n1);
        drawImg(nn,897,380);
    },600);

    setTimeout(() => {
        drawImg(307,400,50);
        drawImg(306,650,50);
        drawImg(312,834,465);
        hpdraw_gage(n2);
        drawImg(nn,897,400);
    },700);

    setTimeout(() => {
        drawImg(307,400,50);
        drawImg(306,742,50);
        drawImg(312,834,465);
        hpdraw_gage(n2);
        drawImg(nn,897,410);
    },800);

    setTimeout(() => {
        drawImg(307,400,50);
        drawImg(306,658,50);
        drawImg(312,834,465);
        hpdraw_gage(n2);
        drawImg(nn,897,400);
    },900);

    setTimeout(() => {
        drawImg(307,400,50);
        drawImg(306,734,50);
        drawImg(312,834,465);
        hpdraw_gage(n2);
        drawImg(nn,897,400);
    },1000);

    setTimeout(() => {
        drawImg(307,400,50);
        drawImg(306,666,50);
        drawImg(312,834,465);
        hpdraw_gage(n);
        drawImg(nn,897,400);
    },1100);

    setTimeout(() => {
        drawImg(307,400,50);
        drawImg(306,726,50);
        drawImg(312,834,465);
        hpdraw_gage(n);
        drawImg(nn,897,400);
    },1200);

    setTimeout(() => {
        drawImg(307,400,50);
        drawImg(306,674,50);
        drawImg(312,834,465);
        hpdraw_gage(n);
        drawImg(nn,897,400);
    },1300);

    setTimeout(() => {
        drawImg(307,400,50);
        drawImg(306,718,50);
        drawImg(312,834,465);
        hpdraw_gage(n);
        drawImg(nn,897,400);
    },1400);

    setTimeout(() => {
        drawImg(307,400,50);
        drawImg(306,682,50);
        drawImg(312,834,465);
        hpdraw_gage(n);
        drawImg(nn,897,400);
    },1500);

    setTimeout(() => {
        drawImg(307,400,50);
        drawImg(306,710,50);
        drawImg(312,834,465);
        hpdraw_gage(n);
        drawImg(nn,897,400);
    },1600);

    setTimeout(() => {
        drawImg(307,400,50);
        drawImg(306,690,50);
        drawImg(312,834,465);
        hpdraw_gage(n);
        drawImg(nn,897,400);
    },1700);

    setTimeout(() => {
        drawImg(307,400,50);
        drawImg(306,700,50);
        drawImg(312,834,465);
        hpdraw_gage(n);
        drawImg(nn,897,400);
        mn_hp = next_mn_hp;
    },1800);
}
function sentaku(i){
    if(soulposition == i-1 && scooltime == 0){
        if(key[32] > 0 || key[90] > 0 || key[13] > 0){
            condition = i;
            scooltime = 1;
            enter_sound3.play();
            setTimeout(cooltime0,300);
        }
    }
}
function item(){
    if(soulposition == 2 && scooltime == 0 && batasuko == 1){
        if(key[32] > 0 || key[90] > 0 || key[13] > 0){
            condition = 3;
            scooltime = 1;
            enter_sound3.play();
            setTimeout(cooltime0,300);
        }
    }
}
function soulkoudou(){
    if(soulkoudouposition == 0 && scooltime == 0){
        if(key[39] > 0 || key[68] > 0){
            soulkoudouposition = 1;
            scooltime = 1;
            setTimeout(cooltime0,200);
            move_sound.play();
        }
    }else if(soulkoudouposition == 1 && scooltime == 0){
        if(key[37] > 0 || key[65] > 0){
            soulkoudouposition = 0;
            scooltime = 1;
            setTimeout(cooltime0,200);
            move_sound.play();
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
function hpdraw_gage(n){
    for(let i = 0; i < (mn_hp-n)/2; i++){
        drawImg(313,835+i,466);
    }
}
function gamechange(nextgame){
    game = nextgame;
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
    if((key[39] > 0 || key[68] > 0) && scooltime == 0){
        if (soulposition != 3 && ctmove == 0){
            soulposition ++;
            ctmove = 1;
            setTimeout(Mcooltime,300);
            move_sound.play();
        }
    }
    //左
    if((key[37] > 0 || key[65] > 0) && scooltime  == 0){
        if (soulposition != 0 && ctmove == 0){
            soulposition --;
            ctmove = 1;
            setTimeout(Mcooltime,300);
            move_sound.play();
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
    if(key[39] > 0 || key[68] > 0){
        if (canmove(1,0) && ctmove == 0){
            offsetx ++;
            ctmove = 1;
            setTimeout(Mcooltime,100);
        }
    }
    //左
    if(key[37] > 0 || key[65] > 0){
        if (canmove(-1,0) && ctmove == 0){
            offsetx --;
            ctmove = 1;
            setTimeout(Mcooltime,100);
        }
    }
    //上
    /*
    if(key[38] > 0 || key[87] > 0){
        if (canmove(0,-1)){
            offsety --;
        }
    }
    */
    //下
    if(key[40] > 0 || key[83] > 0){
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
    /*if(key[65] > 0){
        game = 1;
    }*/
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
    if(key[38] > 0 || key[87] > 0){
        if(Coffset > 0){
            move_sound.play();
            Coffset --;
        }
    }
    //下
    if(key[40] > 0 || key[83] > 0){
        if (Coffset < 1){
            move_sound.play();
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
        enter_sound2.play();
        if(Coffset == 0){
            flash(750,1);
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
function changecondition(nextconditionnumber){
    condition = nextconditionnumber;
}
function changestage(nextstagenumber){
    stage = nextstagenumber;
}
