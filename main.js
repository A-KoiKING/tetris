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
            writefield();
            spawn();
            move();

            clearcheck();
            
            gameover();

            ctx.fillStyle = "white";
            writeword(40,'Score : '+ clearline,1300,300);
            writeword(40,"Move  :",1300,600);
            writeword(40,"a or ←",1475,600);
            writeword(40,"s or ↓",1475,650);
            writeword(40,"d or →",1475,700);
            writeword(40,"Roll  :",1300,800);
            writeword(40,"z or j",1475,800);
            writeword(40,"x or k",1475,850);

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
            setTimeout(changingblack,200,1);
            setTimeout(changingblack,400,2);
            setTimeout(changingblack,600,3);
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
                setTimeout(changegame,200,2);
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
                scooltime = 0;
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
                setTimeout(changegame,2500,5);
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