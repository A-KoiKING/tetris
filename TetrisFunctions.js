function writefield(){
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
    if(key[90] > 0 || key[74] > 0){
        if(canroll(1) == 1 && ctroll == 0){
            direction++;
            if(direction == 4){
                direction = 0;
            }
            ctroll = 1;
            setTimeout(Rcooltime,150);
        }
    }
    if(key[88] > 0 || key[75] > 0){
        if(canroll(-1) == 1 && ctroll == 0){
            direction--;
            if(direction == -1){
                direction = 3;
            }
            ctroll = 1;
            setTimeout(Rcooltime,150);
        }
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