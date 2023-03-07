let person = {
  firstName: "Chandler",
  lastName: "Bing",
  age: 34
}

// console.log(person.firstName)

let meal = {
  appetizer: 'Cactus blossom',
  entree: 'Steak',
  dessert: 'Ice cream',
  drink: 'Dr Pepper'
}

//const dessert = meal.dessert
const {dessert} = meal

// console.log(dessert)

const {appetizer, drink: bestDrinkEver, entree} = meal

// console.log(appetizer, bestDrinkEver, entree)

// for(let key in meal) {
//   console.log(`For my ${key} I had ${meal[key]}.`)
// }

person.job = 'Statistical Analysis and Data Reconfiguration'

// person['pets'] = ['Duck', 'Chicken']
person.pets = ['Duck', 'Chicken']

console.log(person.pets[0])

delete meal.dessert


//Classes
//class CLASSNAME {
//  constructor(VALUES FROM INSTANCE) {
//    this.KEY = VALUE
//  }

//  METHODNAME(PARAMS){
//   CODE BLOCK
//  }
//}

class Pet {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

class Dog extends Pet {
  constructor(name, age, breed){
    super(name, age)
    
    this.breed = breed
  }

  bark() {
    console.log(`Bark! My name is ${this.name}.`)
  }
}

let gus = new Dog('Gus', 2, 'Bernedoodle')

console.log(gus)

gus.bark()





//replit code
// const dog = {
//   'name': 'Freida',
//   'color': 'brown/black',
//   'hunger': 40,
//   'mood': 'feisty',
//   'age': 9
// };

// class Dog {
//   constructor(name, color){
//     this.name = name;
//     this.color = color;
//   }

//   bark(){
//     console.log('Arf! I am', this.name, 'the dog!');
//   }
// }

// let dog1 = new Dog('Freida', 'brown');
// let dog2 = new Dog('Sally', 'pink');

// console.log(dog1)  // Freida
// console.log(dog2)  // Sally
// console.log(dog)

// dog1.bark()    // Arf, I'm Freida the dog!
// dog2.bark()    // Arf, I'm Sally the dog!
// dog.bark()