class Gem extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("gem.png");
    }
  
    display() {
      super.display();
    }
  }