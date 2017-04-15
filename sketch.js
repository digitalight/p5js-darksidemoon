var lineHeight;

function setup() {
    createCanvas(innerWidth, innerHeight);

}

function draw() {
    background(0);
    whiteLine();
    rainbow();
    t(height / 3.3);
    tmiddle();
}

function whiteLine() {
    lineHeight = map(mouseY, height, 0, 1.8, 2.0);
    stroke(255);
    strokeWeight(4);
    translate(0, 0);
    line(0, height / lineHeight, (width /2)-(height/9), height / 2.4);
}

function tmiddle() {
    noStroke();
    colorMode(RGB);
    fill(255,60);
    beginShape();
      vertex((width /2)-(height/9), height / 2.4+2);
      vertex((width /2)-(height/9), height / 2.4-2);
      vertex((width /2)+(height/9.5), height/2.4-6);
      vertex((width /2)+(height/7.9), height/2.4+18);
    endShape(CLOSE);
}

function rainbow() {
    colorMode(HSB);
    noStroke();
    var rainbowColor = 0;
    var gap = -24;
    var gap2 = -6;
    for (i = 0; i < 6; i++) {
        fill(rainbowColor, 255, 255);
        push();
        beginShape();
        vertex((width /2)+(height/10), height/2.4+gap2+6);
        vertex((width /2)+(height/10), height/2.4+gap2);
        vertex(width, (height/lineHeight)+gap);
        vertex(width, (height/lineHeight)+gap+12);
        endShape(CLOSE);
        pop();
        //line(width / 2, (height / 2.4), width, (height / lineHeight) + gap);
        gap += 11;
        gap2 += 3;
        rainbowColor += (255 / 4);
    }
}

function t(size) {
    push();
    colorMode(RGB);
    translate(width / 2, height / 2);
    var s = 255;
    fill(0);
    strokeWeight(3);
    for (i=0; i < 4; i++) {
      stroke(s);
      triangle(0, -size, size, size, -size, size);
      size -= 3;
      s -= 80;
    }
    pop();
}
