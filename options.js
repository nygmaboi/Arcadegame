class Options {
    constuctor() {
        this.Game1 = createButton('WHACK THE MOLE');
        this.Game2 = createButton('SUSHI CHASE');
        this.Game3 = createButton('Game 3');
        this.Game4 = createButton('Game 4');
    }
    display(){
        //this.Game1.position(displayWidth/2-200, displayHeight/2-200);
        this.Game1.position(displayWidth-100,20);

    }
}