let frase= prompt("Escriba una frase")
let vocales= ""

for (let i = 0; i < frase.length; i++) {
    let caracter = frase.charAt(i).toLowerCase()
    if (caracter === 'a') {
        vocales += caracter
    } else if (caracter === 'e') {
        vocales += caracter
    } else if (caracter === 'i') {
        vocales += caracter
    } else if (caracter === 'o') {
        vocales += caracter
    } else if (caracter === 'u') {
        vocales += caracter
    }
}
document.write("Vocales: " + vocales);