function encriptar() {
  var texto = document.getElementById("inputText").value.toLowerCase();
  // i es para que afecte tanto mayúsculas como minúsculas
  // g es para toda la línea u oración
  // m es para que afecte a múltiples líneas o párrafos
  var txtCifrado = texto.replace(/e/gim, "enter");
  var txtCifrado = txtCifrado.replace(/o/gim, "ober");
  var txtCifrado = txtCifrado.replace(/i/gim, "imes");
  var txtCifrado = txtCifrado.replace(/a/gim, "ai");
  var txtCifrado = txtCifrado.replace(/u/gim, "ufat");

  document.getElementById("dibujo").style.display = "none";
  document.getElementById("rightText").style.display = "none";
  document.getElementById("rightText2").innerHTML = txtCifrado;
  document.getElementById("copy").style.display = "block";
  document.getElementById("copy").style.display = "innherit";
}

function desencriptar() {
  var texto = document.getElementById("inputText").value.toLowerCase();
  // i es para que afecte tanto mayúsculas como minúsculas
  // g es para toda la línea u oración
  // m es para que afecte a múltiples líneas o párrafos
  var txtCifrado = texto.replace(/enter/gim, "e");
  var txtCifrado = txtCifrado.replace(/ober/gim, "o");
  var txtCifrado = txtCifrado.replace(/imes/gim, "i");
  var txtCifrado = txtCifrado.replace(/ai/gim, "a");
  var txtCifrado = txtCifrado.replace(/ufat/gim, "u");

  document.getElementById("dibujo").style.display = "none";
  document.getElementById("rightText").style.display = "none";
  document.getElementById("rightText2").innerHTML = txtCifrado;
  document.getElementById("copy").style.display = "block";
  document.getElementById("copy").style.display = "inherit";
}


function copiarTexto() {
  const elemento = document.getElementById("rightText2");
  const texto = elemento.innerText || elemento.textContent;

  try {
    navigator.clipboard.writeText(texto);
    alert("Texto copiado al portapapeles.");
  } catch (err) {
    alert("No se pudo copiar el texto.");
  }
}