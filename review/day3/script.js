
// classes shy
// you must create the instance, otherwise there's nothing to put the data from the inputs into
class Item {
  constructor(fname,sname){
    this.fname = fname;
    this.sname = sname;
  }
}

let arr = []
const addItem = () => {
  let fn = document.getElementById('fname').value;
  let sn = document.getElementById('sname').value;
  let item = new Item(fn,sn);
  arr.push(item);
  console.log(arr);
}

/* Class ZIV*/
// class Item {
//   constructor(na,de,ac,da){
//     this.name = na;
//     this.desc = de;
//     this.active = ac;
//     this.date = da
//   }
//   setType(value){
//     this.type = value;
//   }
//   getType(){
//     return this.type;
//   }
// }
//
// let item1 = new Item('Item 1','Item 1 Desc',true,'20-05-2021');
// let item2 = new Item('Item 2','Item 2 Desc',true,'21-05-2021');
//
// item1.setType('Daniel')
// console.log(item1.getType());
//
// console.log(item2);
class Fruit {
  constructor(name){
    this.name = name;
  }
  getName(){
    return this.name;
  }
  setName(value){
    this.name = value;
  }
}
class Apple extends Fruit{
  constructor(color,type) {
    super('Apple');
    this.state = {
      color: color,
      type: type
    }
  }
  setColor(value){
    this.state.color = value;
  }
  getColor(){
    return this.state.color;
  }
}
let redApple = new Apple('Red','Galil');
class Orange extends Fruit{
  constructor() {
    super('Orange');
    this.color = ''
  }
  setColor(value){
    this.color = value;
  }
  getColor(){
    return this.color;
  }
}
class OrangeJosh extends Orange {
  constructor(){
    super();
  }
}
class OrangeNewJosh extends OrangeJosh{
}
let oj = new OrangeJosh();
console.log(oj.getName());
let redApple = new Apple();
console.log(redApple.getName());
redApple.setColor('Red')
console.log(redApple.getColor())
let greenApple = new Apple();
console.log(greenApple.getName());
greenApple.setColor('Green');
console.log(greenApple.getColor())