let filaComum = [];
let filaEspecial = [];
let contadorComum = 1;
let contadorEspecial = 1;

function gerarFila() {
    let senhaComum = "C" + String(contadorComum).padStart(3, '0');
    filaComum.push(senhaComum);
    document.getElementById("filaComum").innerText = filaComum.join(", ");
    contadorComum++;
}

function gerarSenhaEspecial() {
    let senhaEspecial = "E" + String(contadorEspecial).padStart(3, '0');
    filaEspecial.push(senhaEspecial);
    document.getElementById("filaEspecial").innerText = filaEspecial.join(", ");
    contadorEspecial++;
}

function atenderFila() {
    if (filaComum.length > 0) {
        let senhaAtendida = filaComum.shift();
        document.getElementById("filaComum").innerText = filaComum.join(", ");
        alert("Atendendo: " + senhaAtendida);
    } else {
        alert("Nenhuma senha na fila comum!");
    }
}

function atenderEspecial() {
    if (filaEspecial.length > 0) {
        let senhaAtendida = filaEspecial.shift();
        document.getElementById("filaEspecial").innerText = filaEspecial.join(", ");
        alert("Atendendo: " + senhaAtendida);
    } else {
        alert("Nenhuma senha na fila especial!");
    }
}