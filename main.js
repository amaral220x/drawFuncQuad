function funcaoQuad(){
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);
    var result1 = document.getElementById("span1");
    var result2 = document.getElementById("span2");
    var delta, r1, r2;

    delta = Math.pow(b,2) -4*a*c;
    alert(delta);
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
}
function f(x){
    return yt(x**2);
}
function yt(y){
    return -5*y/2;
}
function xt(x){
    return 25*x;
}
function drawQuad(){
    var canvas = document.getElementById("tela");
    ctx = canvas.getContext("2d");
    var x0 = -10;
    var xf = 10;
    var x = x0;
    var dx = 0.1;
    ctx.save();
    ctx.translate(250,250);
    ctx.beginPath();
    ctx.moveTo(xt(x),f(x));
    x += dx;
    while (x < xf){
        ctx.lineTo(xt(x),f(x));
        x += dx;
    }
    ctx.stroke();

}