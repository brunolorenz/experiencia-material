function preload () {
  myFont = loadFont('assets/BreeSerif-Regular.ttf')
  afetiva = loadStrings("afetiva.txt");
  interpretativa = loadStrings("interpretativa.txt");
  performativa = loadStrings("performativa.txt");
  sensorial = loadStrings("sensorial.txt");

}

function setup() {
	createCanvas(windowWidth,windowHeight);
  background(255);
  textFont(myFont);
  fill(31,31,122,100);
  textSize(20);
  text("clique",50,50,150);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(255);
  window.location.reload(true)
}

function touchStarted() {

  var catalogo = random(9999);
  var local = windowHeight/8;

  var linha1 = random(afetiva)
	var linha2 = random(interpretativa)
	var linha3 = random(performativa)
	var linha4 = random(sensorial)


textSize(windowWidth/20);
textStyle(BOLD);
textFont(myFont);
background(255);
fill(31,31,122,255);
text("A: "+linha1, 50, local+50);
fill(31,31,122,200);
text("I: "+linha2, 50, local+100);
fill(31,31,122,150);
text("P: "+linha3, 50, local+150);
fill(31,31,122,100);
text("S: "+linha4, 50, local+200);

textSize(12);
fill(31,31,31,150);
text("AFETIVA / INTERPRETATIVA / PERFORMATIVA / SENSORIAL", 50, 50);


}
