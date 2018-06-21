// SECTION 6
// Exporting values

// import { students } from './students'
// import { total } from './students'

// console.log(students)
// console.log(total)

// SECTION 6
// Exporting expressions

// import { add, multiply } from './calculator'
// console.log(add(3, 5))
// console.log(multiply(3, 5))

// import multiply from './calculator'
// console.log(multiply(3, 5))

// SECTION 7
// OOP classes

class Entity {
  constructor(name, height) {
    this.name = name
    this.height = height
  }

  greet() {
    console.log(`Hi! I'm ${this.name} from middle earth!`)
  }
}

let Merry = new Entity('Merry', 4.6)
Merry.greet()
