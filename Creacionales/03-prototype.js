// Este patron nos ayuda a provernos de la estructura necesaria para poder crear objetos con caracteristicas similares como lo puede ser un objeto de tipo cliente o un animal. 
// Primero iniciemos inicializanco nuesto objeto prototipo que en esta ocacion se llamara Animal Prototype
function AnimalPrototype(proto){
  this.proto = proto;
  this.clone = function() {
    let animal = new Animal();
    animal.nombre = proto.nombre;
    animal.tipo = proto.tipo;
    return animal;
  }
}
// 
function Animal(nombre,tipo){
  this.nombre = nombre;
  this.tipo = tipo;
  this.openAcount = function () {
    alert(this.nombre,'es de tipo', this.tipo);
  }
}

function run(){
  let proto = new Animal('Tigre','Mamifero');
  let prototype = new AnimalPrototype(proto);
  let animal = prototype.clone();
  animal.openAcount();
}

run();
