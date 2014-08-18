/*function Product(name, price) {
  this.name = name;
  this.price = price;

  if (price < 0)
    throw RangeError('Cannot create product ' +
                      name + ' with a negative price');
  return this;
}


function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

//Food.prototype = Object.create(Product.prototype);

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

//Toy.prototype = Object.create(Product.prototype);

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);
*/

var animals = [
  {species: 'Lion', name: 'King'},
  {species: 'Whale', name: 'Fail'}
];

for (var i = 0; i < animals.length; i++) {
  (function (i) { 
    this.print = function () { 
      console.log('#' + i  + ' ' + this.species 
                  + ': ' + this.name); 
    } 
    this.print();
  }).call(animals[i], i);
}