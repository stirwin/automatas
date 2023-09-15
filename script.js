function validar() {
  var input = document.getElementById('input').value;
  var regex = /^declare\s+([a-zA-Z_][a-zA-Z0-9_]{0,14}(,[a-zA-Z_][a-zA-Z0-9_]{0,14}){0,14})\s+(entero|real|cadena|lógico|fecha);$/;
  var resultado = regex.test(input);
  document.getElementById('resultado').innerText = resultado ? "Sentencia válida" : "Sentencia inválida";
}



/*
function validar() {
  var input = document.getElementById('input').value;
  var regex = /^declare\s+([a-zA-Z_][a-zA-Z0-9_]*(,[a-zA-Z_][a-zA-Z0-9_]*)*)\s+(entero|real|cadena|lógico|fecha);$/;
  var resultado = regex.test(input);
  document.getElementById('resultado').innerText = resultado ? "Sentencia válida" : "Sentencia inválida";
}
*/
