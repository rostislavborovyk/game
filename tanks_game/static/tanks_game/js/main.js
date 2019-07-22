var date = new Date();
var myTank, opponentTank;
var border_down_img, border_up_img, border_left_img, border_right_img;
var objjj;


function preload() {
    //----------- loading textures--------------------
    border_down_img = loadImage("https://i.ibb.co/TqSs4Rv/down.png");
    border_up_img = loadImage("https://i.ibb.co/mXxmqwG/up.png");
    border_left_img = loadImage("https://i.ibb.co/W5cGnJ5/left.png");
    border_right_img = loadImage("https://i.ibb.co/1R8tMWP/right.png");
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    myTank = new Tank(0,0, [100, 255, 100]);
    opponentTank = new Tank(0,0, [255, 100, 100]);
    objjj = new createBorderBox(border_left_img,border_right_img,border_up_img,border_down_img);


}

function draw() {
    background(180, 160, 120);
    msPerFrame();

    objjj.drawBorderBox();



    // push();
    // fill(0, 255, 0);
    // data1.setCords(mouseX, mouseY);
    // rect(data1.x, data1.y, 100, 100);
    // pop();
    // push();
    // fill(255, 0, 0);
    // rect(data2.x, data2.y, 100, 100);
    // pop();

    drawTanks();
    drawSprites();

}

function msPerFrame() {
    let previous = date.getMilliseconds();
    date = new Date();
    let current = date.getMilliseconds();
    if (current > previous){
        console.log("msPerFrame: " + (current - previous))
    }
}

function drawTanks() {
    myTank.move();
    data1.setCords(-myTank.translation.x, -myTank.translation.y, myTank.rotationAngle);
    opponentTank.sprite.position.x = width/2 + data2.x;
    opponentTank.sprite.position.y = height/2 + data2.y;
    opponentTank.rotationAngle = data2.angle;
    opponentTank.sprite.rotation = data2.angle;
    
}

