function preload() {

}

function setup() {

    canvas = createCanvas(640, 480);

    canvas.position(400, 275);

    background(255, 255, 255);

    video = createCapture(VIDEO);

    video.hide();

}

function draw() {

    image(video, 20, 20, 600, 440);

    fill("black");
    stroke("black");

    ellipse(320, 30, 600, 30);

    ellipse(30, 240, 30, 440);

    ellipse(320, 450, 600, 30);

    ellipse(610, 240, 30, 440);

    fill("dodgerblue");
    stroke("dodgerblue");

    rect(10, 10, 40, 40, 15);

    rect(590, 10, 40, 40, 15);

    rect(10, 430, 40, 40, 15);

    rect(590, 430, 40, 40, 15);

    fill("yellow");
    stroke("yellow");

    circle(320, 30, 20);

    circle(30, 240, 20);

    circle(320, 450, 20);

    circle(610, 240, 20);

}

function take_snapshot() {

    save("frame_pic.png");

}