function mostrarImagen (){
var abreImagen = document.querySelectorAll('.abreImagen');
 abreImagen.forEach(function(figure) {
    figure.style.display = 'block';
  });
}
function ocultarImagen (){
var ocultarImagen =document.querySelectorAll('.abreImagen');
ocultarImagen.forEach(function(figure) {
    figure.style.display = 'none';
  });
}