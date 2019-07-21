var date = new Date();
var myTank, opponentTank;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    myTank = new Tank(0,0, [100, 255, 100]);
    opponentTank = new Tank(0,0, [255, 100, 100]);
}

function draw() {
    background(180, 160, 120);
    // fps();

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

function fps() {
    let previous = date.getMilliseconds();
    date = new Date();
    let current = date.getMilliseconds();
    if (current > previous){
        console.log("fps: " + (current - previous))
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

