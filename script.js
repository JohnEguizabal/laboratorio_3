function validarPass() {

    let validacion = document.getElementById("texto");
    let estilo = document.getElementById("respuesta");
    passw = document.getElementById("pass").value;
    let vocal = 0;
    let novocal = 0;
    const vocales = ["a", "e", "i", "o", "u"];

    if (passw.length < 6) {
        passw = 0   
    }
    else {

        for (i = 0; i < passw.length; i++) {

            if (vocales.includes(passw[i])) {
                vocal = vocal + 1
            }
            else {
                novocal++
                vocal = 0
            }
        }
    }

    if (vocal >= 3) {
        validacion.innerHTML = "Contraseña no cumple con los requisitos, tiene " + vocal + " vocales";
        estilo.style.backgroundColor = "#f77b72"
    }
    else if (passw == 0) {
        validacion.innerHTML = "la contraseña contiene muy pocos caracteres...";
        estilo.style.backgroundColor = "#FFBF61"
    }
    else if (novocal >= 3) {
        validacion.innerHTML = "Contraseña no cumple con los requisitos, tiene " + novocal + " consonantes";
        estilo.style.backgroundColor = "#f77b72"
    }
    else {
        validacion.innerHTML = "La contraseña cumple con la seguridad";
        estilo.style.backgroundColor = "#9BEC00"
        
    }

}
