var nom, anio, edad, dia;
nom=prompt("nombre");
anio=parseInt(prompt("Ingrese su año de nacimineto"));
edad=2024-anio;
if(edad>=18){
    document.write(nom+" estas habilitado para botar")
}else{
    document.write(nom+" no estas habilitado para botar")
}

dia=parseInt(prompt("ingrese un dia de la semana entre 1 y 7"));
switch(dia){
    case 1: alert("LUN");break;
    case 2: alert("MAR");break;
    case 3: alert("MIE");break;
    case 4: alert("JUE");break;
    case 5: alert("VIE");break;
    case 6: alert("SAB");break;
    case 7: alert("DOM");break;
    default: alert("FUERA DE RANGO")
}


