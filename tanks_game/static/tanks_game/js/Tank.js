function Tank(x, y, col) {
    this.sprite = createSprite(50, 50);
    this.sprite.shapeColor = color(...col);
    this.sprite.position.x = width/2;
    this.sprite.position.y = height/2;
    this.speed = 4;
    this.translation = createVector(0, 0);
    this.rotationSpeed = 2;
    this.rotationAngle = 0;
    this.isCollide = false;

    this.move = function () {
        if (keyIsDown(87) && !this.isCollide){
            this.translation.x -= this.speed*Math.cos(this.rotationAngle/180*Math.PI);
            this.translation.y -= this.speed*Math.sin(this.rotationAngle/180*Math.PI);
            chatSocket.send(JSON.stringify({
                'message': [data1.x, data1.y, data1.angle]
            }));

        }
        if (keyIsDown(83)&& !this.isCollide){
            this.translation.x += this.speed*Math.cos(this.rotationAngle/180*Math.PI);
            this.translation.y += this.speed*Math.sin(this.rotationAngle/180*Math.PI);
            chatSocket.send(JSON.stringify({
                'message': [data1.x, data1.y, data1.angle]
            }));

        }
        if (keyIsDown(65)){
            this.sprite.rotation -= this.rotationSpeed;
            this.rotationAngle -= this.rotationSpeed;
            chatSocket.send(JSON.stringify({
                'message': [data1.x, data1.y, data1.angle]
            }));

        }
        if (keyIsDown(68)){
            this.sprite.rotation += this.rotationSpeed;
            this.rotationAngle += this.rotationSpeed;
            chatSocket.send(JSON.stringify({
                'message': [data1.x, data1.y, data1.angle]
            }));

        }
        translate(this.translation.x, this.translation.y);
        this.sprite.position.x = width / 2 - this.translation.x;
        this.sprite.position.y = height / 2 - this.translation.y;

    }
}