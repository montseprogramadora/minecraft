var canvas=new fabric.Canvas("canvas");
var jugadorx=10;
var jugadory=10;
var bloque_ancho=30;
var bloque_alto=30;
var objeto_jugador="";
var objeto_bloque="";
function activar_jugador(){
    fabric.Image.fromURL("player.png", function(Img){
        objeto_jugador=Img;
        objeto_jugador.scaleToWidth(150);
        objeto_jugador.scaleToHeight(140);
        objeto_jugador.set({
            top:jugadory,
            left:jugadorx
        });
        canvas.add(objeto_jugador);
    });
    
}
function activar_bloques(bloque){
    fabric.Image.fromURL(bloque, function(Img){
        objeto_bloque=Img;
        objeto_bloque.scaleToWidth(bloque_ancho);
        objeto_bloque.scaleToHeight(bloque_alto);
        objeto_bloque.set({
            top:jugadory,
            left:jugadorx
        });
        canvas.add(objeto_bloque);
    });
    
}
window.addEventListener("keydown",activar_teclas);
function activar_teclas(e){
    tecla_precionafa=e.keyCode;
    console.log(tecla_precionafa);
    if(tecla_precionafa=="67"){
        activar_bloques("trunk.jpg");
        console.log("c")
    }
    if(tecla_precionafa=="82"){
        activar_bloques("cloud.jpg");
        console.log("c")
    }  if(tecla_precionafa=="83"){
        activar_bloques("ground.png");
        console.log("c")
    }  if(tecla_precionafa=="72"){
        activar_bloques("dark_green.png");
        console.log("c")
    }  if(tecla_precionafa=="79"){
        activar_bloques("unique.png");
        console.log("c")
    }
    if(tecla_precionafa=="40"){
        abajo();
    }
    if(tecla_precionafa=="38"){
        arriba();
    }
    if(tecla_precionafa=="39"){
        derecha();
    }
    if(tecla_precionafa=="37"){
        izquierda();
    }
}
function abajo (){
    if(jugadory<=600){
        jugadory=jugadory+bloque_ancho;
        canvas.remove(objeto_jugador);
        activar_jugador();
    }
}
function arriba (){
    if(jugadory>=0){
        jugadory=jugadory-bloque_ancho;
        canvas.remove(objeto_jugador);
        activar_jugador();
    }
}
function derecha (){
    if(jugadorx<=1000){
        jugadorx=jugadorx+bloque_alto;
        canvas.remove(objeto_jugador);
        activar_jugador();
    }
}
function izquierda (){
    if(jugadorx>=0){
        jugadorx=jugadorx-bloque_alto;
        canvas.remove(objeto_jugador);
        activar_jugador();
    }
}