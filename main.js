function funcaoQuad(){
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);
    var result1 = document.getElementById("span1");
    var result2 = document.getElementById("span2");
    var delta, r1, r2;

    delta = Math.pow(b,2) -4*a*c;
    if(delta < 0){
        result1.textContent= "Não admite raizes reais";
        result2.textContent= " ";
    }    
    else{  
    r1= (-b + Math.pow(delta,0.5))/(2*a);
    r2= (-b - Math.pow(delta,0.5))/(2*a);
    result1.textContent = r1;
    result2.textContent = r2;
    }   
    drawQuad();
    drawPoints(r1,r2);
    var yv = -delta / (4 * a);
    var xv = (-b) / (2 * a);
    var x = document.getElementById('xv');
    var y = document.getElementById('yv');
    y.textContent = yv;
    x.textContent = xv;
    drawVertex(xv,yv);
}
function f(x){
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);
    var eq= ((a * (x**2)) + (b * x) + c);

    return yt(eq);
}
function yt(y){
    return -25*y;
}
function xt(x){
    return 25*x;
}
function drawQuad(eqc){
    var canvas = document.getElementById("tela");
    ctx = canvas.getContext("2d");
    var x0 = -10;
    var xf = 10;
    var x = x0;
    var dx = 0.1;
    ctx.save();
    ctx.translate(250,250);
    ctx.beginPath();
    ctx.moveTo(xt(-10),yt(0));
    ctx.lineTo(xt(10),yt(0));
    ctx.moveTo(xt(0),yt(-100));
    ctx.lineTo(xt(0),yt(100));

    ctx.moveTo(xt(x),f(x));
    x += dx;
    while (x < xf){
        ctx.lineTo(xt(x),f(x));
        x += dx;
    }
    ctx.stroke();

}

function drawPoints(r1,r2){
    ctx.beginPath()
    ctx.fillStyle = 'rgb(0, 0, 255)';
    ctx.arc(xt(r1), 0, 4, 0, 2 * Math.PI)
    ctx.arc(xt(r2), 0, 4, 0, 2 * Math.PI)
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
}

function drawVertex(xv,yv){
    ctx.beginPath()
    ctx.fillStyle = 'rgb(0, 255, 0)';
    ctx.arc(xt(xv), yt(yv), 4, 0, 2 * Math.PI)
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
}