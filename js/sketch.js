let pg;
let texturas_pacote;
let texturas;

function preload() {
  napinha = loadModel("../recursos/Napinha-Modelo.obj");
}

function setup() {
  createCanvas(500, 500);
  background(255, 0, 0);
  imageMode(CENTER);
  
  pg = createGraphics(500, 500, WEBGL);
  pg.setAttributes({ alpha: true });
  pg.createEasyCam();
  pg.noStroke();

  texturas_pacote = createGraphics(500, 500);

  texturas = [];
  texturas[0] = createGraphics(255, 255);
  texturas[1] = createGraphics(255, 255);
  texturas[2] = createGraphics(255, 255);
  texturas[3] = createGraphics(255, 255);
  
  texturas[0].background(0, 0, 0);
  
  texturas[1].background(255, 0, 0);

  texturas[2].background(0, 255, 0);
  for(let i = 0; i < 10; i++)  {
    texturas[2].noFill();
    texturas[2].stroke(255);
    texturas[2].strokeWeight(10);
    texturas[2].circle(texturas[0].width/2, texturas[0].height/2, i * 50);
  };

  texturas[3].background(127, 0, 255);
  for(let i = 0; i < 10; i++)  {
    texturas[3].noFill();
    texturas[3].stroke(255);
    texturas[3].strokeWeight(10);
    texturas[3].circle(texturas[0].width/2, texturas[0].height/2, i * 50);
  };

  texturas_pacote.image(texturas[0], 0, 0);
  texturas_pacote.image(texturas[1], 255, 0);
  texturas_pacote.image(texturas[2], 0, 255);
  texturas_pacote.image(texturas[3], 255, 255);
}

function draw() {
  
  pg.clear();
  pg.translate(0, 0, -200);
  pg.translate(0, 0, 0);
  pg.rotateX(frameCount * 0.01);
  pg.rotateY(frameCount * 0.01 * -1);
  pg.texture(texturas_pacote);
  pg.model(napinha);

  image(pg, width/2, height/2, 1000, 1000);
  image(pg, width/2, height/2);
  image(texturas_pacote, 50, 50, 100, 100);

}