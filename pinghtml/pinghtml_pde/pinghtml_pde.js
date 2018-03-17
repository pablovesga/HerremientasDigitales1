  var value=0;
  var x=0;    //posición en el eje x de la bola
  var y=150;  //posición en el eje y de la bola
  var xv=0;   //sentido hacia la izquierda=0 derecha=1
  var yv=0;   //sentido hacia abajo=0 arriba=1
  var z=-1;    //valor de dificultad
  var p=0;    //variable que mantiene el puntaje
  var bl = new Array(10);  //array para manejar los bloques
  var j=0;    //Variable auxiliar
  var foto;    //variable en que se guarda la imagen
  var font1;   //variable en que se guarda la fuente
  var i;      //Variable auxiliar
  

function setup() {
  createCanvas(1024,620);                  //se inicializa tamaño, carga imagen y fuentes
  foto = loadImage('imagen/uno.jpg');
  font1=loadFont("imagen/HanziPenTC-W5-24.vlw");
}

function draw() {
  background(250,250,250);    //Carga fondo para borrar rastro anterior
  image(foto,200,150);
  textSize(32);
  textFont(font1);
  text("PING PONG", 10, 32);    //descripción titulo
  if(z==0){                     //z=0 significa que el juego termino
    fill(0,255,0);
    textSize(32);
    textFont(font1);
    text("game over -Nuevo juego clic-", 310, 200);
  }
  if(z==-1){                    //mensaje con instrucción para iniciar juego solo aparece cuando se reinicia
    fill(0,255,0);
    textSize(32);
    textFont(font1);
    text("Para iniciar el juego haga clic", 300, 200);
  }
  fill(0,255,0);
  text("Puntaje "+p,250,32);
  fill(100,0,100);
  for(i=0; i<10; i=i+1){    // for principal donde se ejecutan las condiciones del juego
    if(bl[i]==1){           // se pintan los rectangulos habilitados
      rect((i*100+20), 100, 80, 20);
    }
    if(y>100&&y<120){      //se pregunta si la bola está rompiendo algún bloque en eje y y x
    if(x>i*100+20&&x<i*100+100){
      if(bl[i]==1){        //si está habilitada ejecuta el cambio, de estár inhabilitada no hace nada
        bl[i]=0;            //inhabilita bloque
        z=z+1;              //aumenta dificultad con cada bloque roto
        if(yv==1){          //cambia dirección por rotura de bloque
          yv=0;
        } else {
          yv=1;
        }
        if(yv==0){
          y=y+z;
        } else {
          y=y-z;
        }
      }
    }
    }
  }
  
  fill(0,0,0);              //dibuja bola en posición X y Y
  ellipse(x, y, 10, 10);
  rect(mouseX,600,100,15);  //Dibuja rectangulo que sirve de raqueta
  if(x>1014){               //se establecen los limites en x o paredes
    xv=1;
  }
  if(x<10){
    xv=0;
  }
  if(y>610){                // si toca la parte de abajo pierde
    z=0;
  }
  if(y<60){                 //rebote superior
    yv=0;
  }
  if(xv==0){                //aumento de dirección en los ejes según dificultad
    x=x+z/2;
  } else {
    x=x-z/2;
  }
  if(yv==0){
    y=y+z/2;
  } else {
    y=y-z/2;
  }
  if(y>598&&y<610){        //condición de golpe de raqueta de existir se aumenta un punto
    if(x>mouseX&&x<mouseX+100){
    yv=1;
    p=p+1;
    }
  }
  
}



function mouseClicked() {        //cuando se pulsa clic se reinician las variables para comenzar el juego
  for (i = 0; i < 10; i += 1)
  {
    bl[i]=1;
  }
  x = int(random(1020));          //cada vez que reinicia la posición en x se genera aleatoria, para que cada juego sea diferente
  p=0;
  y=150;
  z=2;
}
