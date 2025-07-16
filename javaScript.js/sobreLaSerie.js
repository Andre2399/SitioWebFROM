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
function mostrarParrafos(){
var mostrarParrafos =document.querySelectorAll('.noParrafo');
mostrarParrafos.forEach(function(figure) {
    figure.style.display = 'block';
  });
}
function ocultarParrafos(){
var ocultarParrafos =document.querySelectorAll('.noParrafo');
ocultarParrafos.forEach(function(figure) {
    figure.style.display = 'none';
  });
}