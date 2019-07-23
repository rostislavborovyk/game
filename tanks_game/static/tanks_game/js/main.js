var date = new Date();
var myTank, opponentTank;
var border_down_img, border_up_img, border_left_img, border_right_img;
var borders, border_group;
var isCollide;

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
    borders = new createBorderBox(border_left_img,border_right_img,border_up_img,border_down_img);
    border_group = borders.group();


}

function draw() {
    background(180, 160, 120);
    msPerFrame();
    borders.drawBorderBox();
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
    isCollide = false;
    myTank.sprite.collide(border_group, myTank.collision);
    data1.setCords(-myTank.translation.x, -myTank.translation.y, myTank.rotationAngle);
    opponentTank.sprite.position.x = width/2 + data2.x;
    opponentTank.sprite.position.y = height/2 + data2.y;
    opponentTank.rotationAngle = data2.angle;
    opponentTank.sprite.rotation = data2.angle;
}

