// Patron de diseño Constructor

class Fruta {
  constructor(name, price){
    this.name = name;
    this.price = price;
  }
  getPrice(){
    return this.price;
  }
}

const manzana = new Fruta('manzana',50);
const naranja = new Fruta('naranja',30);

console.log(manzana.getPrice());
console.log(naranja.getPrice());
