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