function declarar(){
    let texto = document.getElementById("texto").value;
    var regex = /^declare\s+([a-zA-Z_][a-zA-Z0-9_]{0,14}(,[a-zA-Z_][a-zA-Z0-9_]{0,14}){0,14})\s+(entero|real|cadena|lógico|fecha);$/;
    var resultado = regex.test(texto);
 
    if(texto.length != 0){
        document.getElementById("personaje").style.display = 'none';
        document.getElementById("tituloMensaje").style.display = 'none';
        document.getElementById("parrafo").style.display = 'none'
        document.getElementById("texto2").style.display = 'flex';
        document.getElementById("texto2").value = resultado ? "Sentencia válida" : "Sentencia inválida";
    }
    else{
        swal("oops","Debes ingresar un texto","warning");
    }
} 

function limpiar(){
    let texto = document.getElementById("texto").value;
    let texto2 = document.getElementById("texto2").value;

    if(texto.length !=0){
        document.getElementById("personaje").style.display = 'flex';
        document.getElementById("tituloMensaje").style.display = 'flex';
        document.getElementById("parrafo").style.display = 'flex'
        document.getElementById("texto2").style.display = 'none';
        document.getElementById("texto2").value = "";
        document.getElementById("texto").value = "";
    }else{
        swal("oops","Debes ingresar un texto","warning");
    }
}

