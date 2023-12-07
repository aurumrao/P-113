function circle(){
    createCanvas(800, 600);
    circle(30, 30, 20);
    
}
function preload(){

}
function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw(){
    image(video, 0, 0, 640, 480);
}

function take_snapshot(){
    save('student_name.png')
}