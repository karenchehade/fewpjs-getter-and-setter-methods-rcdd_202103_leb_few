class Circle{
  constructor(radius){
    this.radius =radius;
  }
  get diameter() {
    return this.radius * 2;
  }
  get circumference() {
    return `${this.name} says ${this._phrase || 'squawk'}`;
  }
  get area() {
    return `${this.name} says ${this._phrase || 'squawk'}`;
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
