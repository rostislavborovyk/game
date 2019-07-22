function createBorderBox(lft, rt, up, dwn) {
    this.len = 1700;
    this.height = 60;
    // images
    this.lft = lft;
    this.rght = rt;
    this.upp = up;
    this.dwn = dwn;
    this.up = createSprite(this.len, this.height);
    this.down = createSprite(this.len, this.height);
    this.left = createSprite(this.height, this.len);
    this.right = createSprite(this.height, this.len);

    this.drawBorderBox = function () {
        this.up.addImage(this.upp);
        this.up.position.x = this.len/2;
        this.up.position.y = this.height/2;

        this.down.addImage(this.dwn);
        this.down.position.x = this.len/2;
        this.down.position.y = this.len - this.height/2;

        this.left.addImage(this.lft);
        this.left.position.x = this.height/2;
        this.left.position.y = this.len/2;

        this.right.addImage(this.rght);
        this.right.position.x = this.len - this.height/2;
        this.right.position.y = this.len/2;

    }


}