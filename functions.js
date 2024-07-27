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