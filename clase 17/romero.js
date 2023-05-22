function Ejecutar () {
let cant=parseInt(prompt("¿que cantidad de numeros que ingresara?"));
let maycero=0;
let mencero=0;
let igualcero=0;
let num;
for (i=1; i<=cant; i++) {
    num=parseInt(prompt("ingrese numeros"));
    if (num===0) {
        igualcero=igualcero+1
    } else {
        if (num<0) {
            mencero=mencero+1
        } else {
            maycero=maycero+1
        }
    }
}
document.write("la cantidad de numeros iguales a cero es: "+igualcero+"<br>")
document.write("la cantidad de numeros menores a cero es: "+mencero+"<br>")
document.write("la cantidad de numeros mayores a cero es: "+maycero+"<br>")
}