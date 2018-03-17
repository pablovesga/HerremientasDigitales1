int value=0;
int x=0;
int y=150;
int xv=0;
int yv=0;
int z=1;
int p=0;
int[] bl = new int[10];
int j=0;
PImage foto;


void setup(){
  size(1024,720);
  PFont font;
  font=loadFont("HanziPenTC-W5-24.vlw");
  foto=loadImage("uno.jpg");
  textFont(font,32);
  for (int i =0; i<10; i=i+1){
    bl[i]=1;
  }
  x = int(random(1020));
}

void draw(){
  background(250,250,250);
  image(foto,200,150);
  text("ping pong", 10, 20);
  if(z==0){
    fill(0,255,0);
    text("game over", 450, 300);
  } else {
    p=z;
  }
  text(p,200,20);
  fill(100,0,100);
  for(int i=0; i<10; i=i+1){
    if(bl[i]==1){
      rect((i*100+20), 100, 80, 20);
    }
    if(y>100&&y<120){
    if(x>i*100+20&&x<i*100+100){
      bl[i]=0;
      if(yv==1){
        yv=0;
      } else {
        yv=1;
      }
    }
    }
  }
  
  fill(0,0,0);
  ellipse(x, y, 10, 10);
  rect(mouseX,700,100,15);
  if(x>1014){
    xv=1;
  }
  if(x<10){
    xv=0;
  }
  if(y>710){
    z=0;
  }
  if(y<60){
    yv=0;
  }
  if(xv==0){
    x=x+z;
  } else {
    x=x-z;
  }
  if(yv==0){
    y=y+z;
  } else {
    y=y-z;
  }
  if(y>698&&y<710){
    if(x>mouseX&&x<mouseX+100){
    yv=1;
    z=z+1;
    }
  }

}

void mouseClicked() {
  if (value == 0) {
    value = 255;
  } else {
    value = 0;
  }
  ellipse(mouseX, mouseY, mouseX/2, mouseY/2);
  clear();
}

void mouseDragged() 
{
fill(50,100,30);
stroke(205,155,225);
ellipse(mouseX,mouseY, 5, 5);
}