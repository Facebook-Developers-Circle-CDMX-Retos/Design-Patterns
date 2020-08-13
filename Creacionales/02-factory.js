// Patron de diseño Factory
const Factory = ({
  name,
  price
}) => {
  return{
    name, 
    price
    setType(type){
      this.type = type;
    },
    getData(){
      return [ 
        this.name,
        this.price,
        this.type
      ];  
    }
  };
}

const apple = Factory({
  name:'banana',
  price: 35
});

console.log(apple.getData());
apple.setType('fruit');
console.log(apple.getData());
