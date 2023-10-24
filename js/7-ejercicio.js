let num1= prompt("Escriba un numero")
let num2= prompt("Segudo numero")
let num3= prompt("Tercer numero")

if (num1 > num2 && num1 > num3){
    document.write("Su primer numero ingresado " + num1 + " es el mas grande")
} else if (num2 > num1 && num2 > num3){
    document.write("Su segundo numero ingresado " + num2 + " es el mas grande")
} else {
    document.write("Su tercer numero ingresado " + num3 + " es el mas grande")
}