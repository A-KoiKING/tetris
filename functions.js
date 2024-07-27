let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

let img = new Array(999);
let img_loaded = new Array(999);

function loadImg(n,filename){
    img_loaded[n] = false;
    img[n] = new Image();

    img[n].onload = function(){
        img_loaded[n] = true;
    }
    img[n].src = filename;
}

function drawImg(n,x,y){
    if(img_loaded[n] == true){
        ctx.drawImage(img[n],x,y);
    }
}

function setCanvas(width, height){
    cvs.width = width;
    cvs.height = height;
}

let key = new Array(256);
function onKey(event){
    key[event.keyCode]=1;
}

function offKey(event){
    key[event.keyCode]=0;
}

window.addEventListener("keydown",onKey);
window.addEventListener("keyup",offKey);

function rnd(max){
    return parseInt(Math.random()*max);
}

//BGM
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
function pagereload(){
    location.reload();
}
function gameoverplay(){
    gameover_message.play();
}
function gameoverpause(){
    gameover_message.pause();
}
function gameover_music(){
    gameover_sound.play();
    gameover_sound.loop = true;
}

//main
function writeblack(){
    ctx.fillStyle = '#000000';
    ctx.fillRect(0,0,cvs.width,cvs.height);
}
function writeword(size,word,x,y){
    ctx.font = parseInt(size) + "px bold monospace";
    ctx.fillText(word,x,y);
}
function cooltime0(){
    scooltime = 0;
}
function conditioncheck(){
    condition++;
    scooltime = 1;
}
function changegame(nextgame){
    //それぞれの画面切り替え
    game = nextgame;
    condition = 0;
}
function changescene(afterscene){
    //テトリス時の場面切り替え
    scene = afterscene;
}
function changecondition(nextconditionnumber){
    //メッセージパートとミーゴ戦の場面切り替え
    //scooltimeを使用しない
    condition = nextconditionnumber;
}
function changestage(nextstagenumber){
    //ミーゴの攻撃パターン
    stage = nextstagenumber;
}