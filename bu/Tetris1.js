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
    loadpicture(1,19,0);
    loadpicture(2,18,19);
    loadpicture(3,8,37);
    loadpicture(4,23,45);
    loadpicture(5,17,68);
    loadpicture(6,12,85);
    loadpicture(7,13,97);
    loadImg(111, "image/soul.png");
    loadImg(112, "image/option/tatakau/1.png");
    loadImg(113, "image/option/tatakau/2.png");
    loadImg(114, "image/option/tatakau/3.png");
    loadImg(115, "image/option/koudou/1.png");
    loadImg(116, "image/option/koudou/2.png");
    loadImg(117, "image/option/koudou/3.png");
    loadImg(118, "image/option/item/1.png");
    loadImg(119, "image/option/item/2.png");
    loadImg(120, "image/option/item/3.png");
    loadImg(121, "image/option/minogasu/1.png");
    loadImg(122, "image/option/minogasu/2.png");
    loadImg(123, "image/option/minogasu/3.png");
    loadImg(124, "image/player_lv1.png");
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
            writeword(60,"Press Space",790,570);

            if(key[32] > 0){
                offsety = 0;
                scene = 2;
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
            writeword(40,"Move  :  → ↑ ← ↓",1300,700);
            writeword(40,"Roll  :  z or c",1300,800);

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
            for(let i = 0; i < 19; i++){
                setTimeout(drawImg,2500+i*100,1+i,335,735);
            }
            setTimeout(cooltime0,5300);
        }
        if(condition == 1 && scooltime == 0 && key[32] > 0){
            conditioncheck();
        }
        if(condition == 2){
            talkmessage(3,0,17,100,20,735,2700);
        }
        if(condition == 3 && scooltime == 0 && key[32] > 0){
            conditioncheck();
        }
        if(condition == 4){
            talkmessage(5,0,8,200,38,735,2400);
        }
        if(condition == 5 && scooltime == 0 && key[32] > 0){
            conditioncheck();
        }
        if(condition == 6){
            talkmessage(7,0,23,100,46,735,3200);
        }
        if(condition == 7 && scooltime == 0 && key[32] > 0){
            conditioncheck();
        }
        if(condition == 8){
            talkmessage(9,0,17,100,69,735,2600);
        }
        if(condition == 9 && scooltime == 0 && key[32] > 0){
            conditioncheck();
        }
        if(condition == 10){
            talkmessage(11,0,12,100,86,735,2100);
        }
        if(condition == 11 && scooltime == 0 && key[32] > 0){
            conditioncheck();
        }
        if(condition == 12){
            skipkey = 1;
            scooltime = 1;
            talkmessage(13,0,13,50,98,790,1600);
        }
        if(condition == 13 && scooltime == 0 && key[32] > 0){
            conditioncheck();
            writeblack();
            drawImg(111,944,525);
        }
        if(condition == 14){
            condition = 15;
            setTimeout(writeblack,150);
            setTimeout(drawImg,300,111,944,525);
            setTimeout(cooltime0,300);
        }
        if(condition == 15 && scooltime == 0){
            writeblack();
            drawImg(111,soulx,souly);
            if(soulx <= 381 && souly >= 975){
                condition = 99;
                setTimeout(gamechange,200);
            }
            if(condition == 15){
                soulx = soulx + soulxv;
                souly = souly + soulyv;
            }
        }
    }else if(game == 2){
        if(condition == 0){
            writeblack();
            drawImg(0,700,50);
            drawImg(124,364,850);
            writeframeup();    
            soulmove();
        }
    }

    //========= ここまでフレーム内の処理を追加 ========= 
    
    etime = Date.now(); //処理終了時刻を取得
    ptime = etime - stime;  //処理にかかった時間
    setTimeout("loop()", parseInt(1000/FPS) - ptime);//再呼び出し
}

//============= この下に関数を追加 =========
function gamechange(){
    game = 2;
    condition = 0;
}
function soulmove(){
    if(soulposition == 0){
        movesoul(113,115,118,121);
    }
    if(soulposition == 1){
        movesoul(112,116,118,121);
    }
    if(soulposition == 2){
        movesoul(112,115,119,121);
    }
    if(soulposition == 3){
        movesoul(112,115,118,122);
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
    for(let i = 0; i < mojisu; i++){
        setTimeout(drawImg,500+i*kankaku,startImgnumber+i,335,y);
    }
    setTimeout(cooltime0,nextcooltime);
}
function loadpicture(messagenumber,mojisu,startnumber){
    for(let i = 1; i <= mojisu; i++){
        loadImg(startnumber+i, "image/message"+messagenumber+"/"+i+".png");
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
    if(key[67] > 0){
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
            clearsound();
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
function clearsound(){
//未実装
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
    if(key[32] > 0){
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