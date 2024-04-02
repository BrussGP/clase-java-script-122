/*fibonacci*/
var a, b, c, i, n;
n=parseInt(prompt("N:"));
a=-1, b=1;
for(i=1;i<=n;i++){
    c=a+b;
    a=b;
    b=c;
    document.write(c+" ");
} 