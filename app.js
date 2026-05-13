function mostrarPares(){

    let resultado ="";

    for (i>=0;i<=100;i--){

        if(i%2==0){
            resultado += i +"";
        }
    }
    document.getElementById("resultado").innerText = resultado;
}