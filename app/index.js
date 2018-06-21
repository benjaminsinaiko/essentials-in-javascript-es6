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

// import Entity from './entity'

// class Hobbit extends Entity {
//   constructor(name, height) {
//     super(name, height)
//   }

//   greet() {
//     console.log(`Hello! I'm ${this.name} from the Shire!`)
//   }
// }
// let Frodo = new Hobbit('Frodo Baggins', 4.5)
// console.log(Frodo)
// Frodo.greet()

// SECTION 8
// JSX

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  render() {
    return <div>React JS and JSX in action!</div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
