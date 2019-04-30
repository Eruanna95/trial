let a=1;
let b=1;
let L;
let r=0;

function setup() { 
	frameRate(20);
	
  if (windowHeight < windowWidth) {
		if (windowHeight < 1000) {
			L = windowHeight / 1000;
		} else { //здесь я делаю так, что увелчичиваться масштаб не может даже на любых бОльших мониторах (макимальное значение стороны холста остается 900)
			L = 1;
		}
	} else {
		if (windowWidth < 1000) {
			L = windowWidth / 1000;
		} else { //здесь я делаю так, что увелчичиваться масштаб не может даже на любых бОльших мониторах (макимальное значение стороны холста остается 900)
			L = 1;
		}
	}
	//и вот теперь создаем холст в этом масштабе:
	let c=createCanvas(1000*L, 1000*L);
}

function draw() {
  translate(width/2,height/2);
  scale(L);
	rotate(r);
  background(245,180,180);
  noStroke();
	fill(255);
  for (let j=0; j<a; j++) {
    push();
    translate(0,-2*PI*5*a);
    for (let i=0; i<a; i++) {
      ellipse(0,-50,10,100);
      rotate(radians(360/a));
    }
    fill(0);
    rotate(radians(360/a/3));
    for (let i=0; i<a; i++) {
      ellipse(0,-50,10,100);
      rotate(radians(360/a));
    }
    fill(255,0,0);
    rotate(radians(360/a/3));
    for (let i=0; i<a; i++) {
      ellipse(0,-50,10,100);
      rotate(radians(360/a));
    }
    pop();
    rotate(radians(360/a));
  }
  push();
  scale(((2*PI*5*a)*2-200)/200);
    for (let i=0; i<a; i++) {
      ellipse(0,-50,10,100);
      rotate(radians(360/a));
    }
    fill(0);
    rotate(radians(360/a/3));
    for (let i=0; i<a; i++) {
      ellipse(0,-50,10,100);
      rotate(radians(360/a));
    }
    fill(255,0,0);
    rotate(radians(360/a/3));
    for (let i=0; i<a; i++) {
      ellipse(0,-50,10,100);
      rotate(radians(360/a));
    }
  pop();
	if ((a>20)||(a<1)) b=-b;
	
	a=a+b;
	r=r+0.1;
}

function mouseClicked() {
  saveCanvas(c, 'myCanvas', 'jpg');
}
