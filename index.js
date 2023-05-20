function encriptar(){
    let texto = document.getElementById("texto").value;
    let texto2 = document.getElementById("texto2").value;
        texto2 = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    if(texto.length !=0){
        document.getElementById("personaje").style.display = 'none';
        document.getElementById("tituloMensaje").style.display = 'none';
        document.getElementById("parrafo").style.display = 'none'
        document.getElementById("texto2").style.display = 'flex';
        document.getElementById("copiar").style.display = 'block'
        document.getElementById("texto2").value = texto2;
        document.getElementById("texto").value = "";
    }else{
        swal("oops","Debes ingresar un texto","warning");
    }
}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let texto2 = document.getElementById("texto2").value;
        texto2 = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if(texto.length !=0){
        document.getElementById("personaje").style.display = 'none';
        document.getElementById("tituloMensaje").style.display = 'none';
        document.getElementById("parrafo").style.display = 'none'
        document.getElementById("texto2").style.display = 'flex';
        document.getElementById("copiar").style.display = 'flex'
        document.getElementById("texto2").value = texto2;
        document.getElementById("texto").value = "";
    }else{
        swal("oops","Debes ingresar un texto","warning");
    }
}

const $content = document.getElementById('texto2');
let  $btn = document.getElementById('copiar');
    $btn.addEventListener('click', e =>{
        $content.select();
        document.execCommand('copy');
        document.getElementById("texto2").style.outline = 'none';

})
