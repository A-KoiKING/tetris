function changingblack(i){
    ctx.fillStyle = '#000000';
    ctx.fillRect(0,0,cvs.width,cvs.height/3*i);
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
                setTimeout(damagedsoul,i*300);
                setTimeout(nomalsoul,150+i*300);
            }
        }
    }
}
function nomalsoul(){
    soulcolor = 0;
}
function damagedsoul(){
    soulcolor = 1;
}
function dcooltaime0(){
    dcooltaime = 0;
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
function loadpicture(messagenumber,mojisu,startnumber){
    for(let i = 1; i <= mojisu; i++){
        loadImg(startnumber+i-1, "image/message"+messagenumber+"/"+i+".png");
    }
}