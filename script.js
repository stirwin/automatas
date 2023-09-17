function validar() {
  var texarea = document.getElementById("input").value;
  // Dividimos el input en líneas
  var lineas = texarea.split("\n");

  var regex =
    /^declare\s+([a-zA-Z_][a-zA-Z0-9_]{0,14}(,[a-zA-Z_][a-zA-Z0-9_]{0,14})*)\s+(entero|real|cadena|lógico|fecha);$/;
  // Inicializamos una cadena vacía para almacenar los resultados
  var resultado = "";

  // Iteramos sobre cada línea
  for (var i = 0; i < lineas.length; i++) {
    // Validamos la línea actual
    var esValida = regex.test(lineas[i]);

    // Agregamos el resultado a la cadena de resultados
    if (esValida) {
      resultado += "Línea " + (i + 1) + ": Sentencia válida\n";
    } else {
      // Si la línea no es válida, intentamos determinar el motivo
      if (!lineas[i].startsWith("declare ")) {
        resultado +=
          "Línea " +
          (i + 1) +
          ': Error - La línea debe comenzar con "declare "\n';
      } else if (!lineas[i].endsWith(";")) {
        resultado +=
          "Línea " + (i + 1) + ': Error - La línea debe terminar con " ; "\n';
      } else if (
        /^declare\s+([a-zA-Z_][a-zA-Z0-9_]{15,}(,[a-zA-Z_][a-zA-Z0-9_]{15,})*)\s+/.test(
          lineas[i]
        )
      ) {
        resultado +=
          "Línea " + (i + 1) + ": Error - Supera el minimo de caracteres\n";
      } else if (
        !/^declare\s+([a-zA-Z_][a-zA-Z0-9_]{0,14}(,[a-zA-Z_][a-zA-Z0-9_]{0,14})*)\s+/.test(
          lineas[i]
        )
      ) {
        resultado +=
          "Línea " +
          (i + 1) +
          ": Error - El nombre de la variable es inválido\n";
      } else if (
        !/^declare\s+([a-zA-Z_][a-zA-Z0-9_]{0,14}(,[a-zA-Z_][a-zA-Z0-9_]{0,14})*)\s+(entero|real|cadena|lógico|fecha);$/.test(
          lineas[i]
        )
      ) {
        resultado +=
          "Línea " + (i + 1) + ": Error - El tipo de dato es inválido\n";
      } else {
        resultado += "Línea " + (i + 1) + ": Error - Sentencia inválida\n";
      }
    }
  }
  //se muestra el resultado
  document.getElementById("resultado").innerText = resultado;
}
