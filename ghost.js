class Ghost{
    constructor(
        x,
        y,
        width,
        height,
        speed,
        imageX,
        imageY,
        imagewidth,
        imageheight,
        range,
    ){
        this.x = x;
        this.y = y;
        this.width=width;
        this.height=height;
        this.speed=speed;
        this.direction=direction_right;
        this.imageX=imageX;
        this.imageY=imageY;
        this.imageheight=imageheight;
        this.imagewidth=imagewidth;
        this.range=range;
        this.RandomTargetIndex=parseInt(Math.random() * 4);
        this.target= randomTargetForGhosts[this.randomTargetIndex];
        setInterval(()=> {
            this.RandomDirection();
        }, 10000);
    }
}

isInRange(){
    let xDistance = Math.abs(pacman.getMapX() - this.getMapX());
    let yDistance = Math.abs(pacman.getMapY() - this.getMapY());
    if (
        Math.sqrt(xDistance* xDistance + yDistance * yDistance)<=
    ) {
        return true;
    }
    return false;
}
changeRandomDirection()  {
    let addition = 1;
    this.randomTargetIndex += addition;
    this.randomTargetIndex = this.randomTargetIndex % 4;
}

moveProsses() {
    if (this.isInRange()) {
        this.target= pacman;
    } else {
        this.target = randomTargetForGhosts[this.randomTargetIndex];
    }
    this.changeDirectionIfPossible();
    this.moveForward();
    if (this.checkCollisions()){
        this.moveBackwards();
        return;
    }
}

moveBackwards(){
    switch(this.direction) {
        case 4:
            this.x -= this.speed;
            break;
        case 3:
            this.y += this.speed;
            break;
        case 2:
            this.x += this.speed;
            break;
        case 1:
            this.y -= this.speed;
            break;
    }
}

moveForward() {
    switch (this.directiom) {
        case 4:
            this.x += this.speed;
            break;
        case 3:
            this.y -= this.speed;
            break;
        case 2:
            this.x -= this.speed;
            break;
        case 1:
            this.y += this.speed;
            break;
    }
}

checkCollisions() {
    let isCollided =false;
    if (
        map[parseInt(this.y / oneBlockSize)][
            parseInt(this.y / oneBlockSize)
        ] == 1 ||
        map[parseInt(this.y / oneBlockSize + 0.9999)][
            parseInt(this.x / oneBlockSize)
        ] ==1 ||
        map[parseInt(this.y / oneBlockSize)][
            parseInt(this.x / oneBlockSize + 0.9999)
        ] == 1 ||
        map[parseInt(this.y / oneBlockSize + 0.9999)][
            parseInt(this.x / oneBlockSize +0.9999)
        ] == 1 
    ) {
         isCollided = true ;
    }
    return isCollided;
}