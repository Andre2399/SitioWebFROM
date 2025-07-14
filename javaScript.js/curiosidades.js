function mostrarParrafos(){
var mostrarParrafos = document.querySelectorAll('.parrafo');
 mostrarParrafos.forEach(function(figure) {
    figure.style.display = 'block';
  });
}
function ocultarParrafos(){
var mostrarParrafos = document.querySelectorAll('.parrafo');
 mostrarParrafos.forEach(function(figure) {
    figure.style.display = 'none';
  });
}
function verVideos(){
var verVideos =document.getElementById("contenedorVideos");
verVideos.style.display= "block";
}
function ocultarVideos(){
var ocultarVideos =document.getElementById("contenedorVideos");
ocultarVideos.style.display= "none";
}
function mostrarComentarios(){
var mostrarComentarios = document.getElementById("criticas");
mostrarComentarios.style.display= "block";
}
function ocultarComentarios(){
var ocultarComentarios = document.getElementById("criticas");
ocultarComentarios.style.display= "none";
}
