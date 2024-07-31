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

//ウィンドウサイズ変更処理
function resizeCanvas() {
    // ウィンドウの幅と高さを取得
    var width = window.innerWidth;
    var height = window.innerHeight;

    // canvasの幅と高さを設定
    cvs.width = width;
    cvs.height = height;
}

window.addEventListener('resize', resizeCanvas, false);


resizeCanvas();