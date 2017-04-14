var lineHeight;

function setup() {
    createCanvas(innerWidth, innerHeight);

}

function draw() {
    background(0);
    whiteLine();
    rainbow();
    t(height / 3.3);
}

function whiteLine() {
    lineHeight = map(mouseY, height, 0, 1.8, 2.0);

    translate(0, 0);
    line(0, height / lineHeight, width / 2, height / 2.4);
}

function rainbow() {
    colorMode(HSB);
    strokeWeight(9);
    var rainbowColor = 0;
    var gap = -8;
    for (i = 0; i < 6; i++) {
        stroke(rainbowColor, 255, 255);

        line(width / 2, (height / 2.4), width, (height / lineHeight) + gap);
        gap += 8;
        rainbowColor += (255 / 4);
    }

}

function t(size) {
    translate(width / 2, height / 2);
    stroke(255);
    strokeWeight(2);
    fill(0);
    triangle(0, -size, size, size, -size, size);
}
