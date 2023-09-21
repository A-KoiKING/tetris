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

function getDistance(x1,y1,x2,y2){
    let d = Math.sqrt((x1-x2)**2 + (y1-y2)**2);
    return d;
}

function drawCircle(x,y,r,outsidecolor,insidecolor){
    ctx.strokeStyle = outsidecolor;
    ctx.fillStyle = insidecolor;
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI*2,false);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

function drawsquare(x,y){
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(x, y, 30, 30);
    ctx.fillStyle = "#000000";    
    ctx.strokeRect(x+5, y+5, 20, 20);
}