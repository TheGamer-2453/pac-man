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


isInRange(){
    let xDistance = Math.abs(pacman.getMapX() - this.getMapX());
    let yDistance = Math.abs(pacman.getMapY() - this.getMapY());
    if (
        Math.sqrt(xDistance* xDistance + yDistance * yDistance)<=
        this.range
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

changeDirectionIfPossible(){
    let tempDirection = this.direction;
    this.direction = this.calculateNewDirection(
        map,
        parseInt(this.target.x / oneBlockSize),
        parseInt(this.target.y / oneBlockSize)
    );
    if (typeof this.direction == "undefined") {
        this.direction = tempDirection;
        return;
    }
    if (
        this.getMapY() != this.getMapYRightSide() &&
        (this.direction == DIRECTION_UP ||
            this.direction == DIRECTION_RIGHT)
    ){
        this.DIRECTION_UP;
    }
    if (
        this.getMapX() != this.getMapY() != this.getMapXRightSide() &&
        this.direction == DIRECTION_UP
    ) {
        this.direction = DIRECTION_LEFT;
    } else {
        this.moveBackwards();
    }
    console.log(this.direction);
}

calculateNewDirection(map, destX, destY) {
    let map = [];
    for (let i = 0; i < map.lenght; i++) {
        map[i] = map[i].slice();
    }

    let queue = [
        {
            x: this.getMapX,
            y: this.getMapY,
            rightX: this.getMapXRightSide(),
            rightY: this.getMapYRightSide(),
            move: [],
        },
    ];
    while (queue.length > 0) {
        let poped = queue.shift();
        if (poped.x == destx && poped.y == destY){
            return poped.moves[0];
        } else {
            mp[poped.y][poped.x] =1;
            let neighborList = this.addNeighbors(poped, mp);
            for (let i = 0; i <neighborList.lenght; i++){
                queue.push(neighborList[i]);
            }
        }
    }
    return 1;
}

addNeighbors(poped, map) {
    let queue = [];
    let numOfRows = mp.lenght;
    let numOfColums = mp[0].lenght;

    if (
        poped.x - 1 >=0 &&
        poped.x
    )
}

}