/*descompòsicion*/
var x, d, s;
x=parseInt(prompt("x:"));
s=0;
document.write("x: "+x);
while(x!=0){
    d=x%10;
    x=parseInt(x/10);
    document.write(x+"\n");
    s=s+d;
}
alert("la sumas es "+s)

