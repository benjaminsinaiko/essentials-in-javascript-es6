// SECTION 3

// let a = 'hello'

// console.log(a)

// {
//   let a = 'goodbye'
//   console.log('a inside scope', a)
// }

// const array = [1, 2, 3]
// array.push(4)
// console.log(array)

// let b = 'world'
// let d = `hello ${b}`
// console.log(d)

// SECTION 4

// Spread Operator
// let a = [7, 8, 9]
// let b = [6, ...a, 10]
// console.log(b)

// function print(...z) {
//   console.log(z)
// }
// print(1, 2, 3, 4)

// function butter(...z) {
//   let a = [1, 2, 3, ...z]
//   console.log(a)
//   return a
// }

// butter(4, 5, 6)

// Arrays
// let c = [100, 200]
// let [a, b] = c
// console.log(a, b)

// let fellowship = ['Frodo', 'Gandalf', 'Aragorn']

// let [hobbit, wizard, ranger] = fellowship
// console.log(hobbit, wizard, ranger)

// let z = [100, 200, 300, 400, 500]
// let [x, ...y] = c
// console.log(x, y)
// console.log(c)

// let wizard = { magical: true, power: 10 }
// let magical = wizard.magical
// let power = wizard.power
// let { magical, power } = wizard
// console.log(magical, power)

// let magical = true
// let power = 2

// let ranger = { magical: false, power: 9 }
// let { magical, power } = ranger
// console.log(magical, power)

// const lion = { size: 'large', sound: 'roar' }
// let { sound } = lion
// console.log(sound)

// SECTION 5
// Arrow functions

// function blastoff() {
//   console.log('3...2...1... blastoff!')
// }

// setTimeout(() => {
//   console.log('3...2...1... blastoff!')
// }, 1000)

// const blastoff = () => {
//   console.log('3...2...1... blastoff!')
// }
// blastoff()

// this.a = 25

// let print = function() {
//   this.a = 50
//   console.log('this.a', this.a)
// }
// print()

// let arrowPrint = () => {
//   console.log('this.a in arrowPrint', this.a)
// }
// arrowPrint()

// Map functions
// let points = [10, 20, 30]

// let addOne = element => {
//   return element + 1
// }
// points = points.map(addOne)

// points = points.map(element => element + 1)

// console.log(points)

// let lengths = [3, 7, 5]
// let multiple = 8

// const scale = multiple => {
//   return lengths.map(element => element * multiple)
// }
// console.log(scale(8))

// Filter functions
// let isPassing = grade => {
//   return grade >= 70
// }

let scores = [90, 85, 67, 71, 70, 55, 92]
let passing = scores.filter(element => element >= 70)
console.log(passing)
