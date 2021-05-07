class Circle{
  constructor(radius){
    this.radius =radius;
  }
  get diameter() {
    return this.radius * 2;
  }
  get circumference() {
    return this.diameter * Math.PI;
  }
  get area() {
    return this.radius * this.radius * Math.PI;
  }
  set diameter() {
   this._phrase = phrase;
 }
 set circumference() {
  this._phrase = phrase;
}
set area() {
 this._phrase = phrase;
}

}
