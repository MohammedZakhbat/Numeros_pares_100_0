document.getElementById("mostrarPares").addEventListener("click", mostrarPares);

function mostrarPares() {
    let resultado = "";

    for (let i = 100; i >= 0; i--) {
        if (i % 2 === 0) {
            resultado += i + " ";
        }
    }

    document.getElementById("resultado").innerText = resultado;
    console.log("JS chargé");
console.log(document.getElementById("mostrarPares"));
}