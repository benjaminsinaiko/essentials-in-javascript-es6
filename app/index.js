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

let a = [7, 8, 9]
let b = [6, ...a, 10]
console.log(b)

function print(...z) {
  console.log(z)
}
print(1, 2, 3, 4)

function butter(...z) {
  let a = [1, 2, 3, ...z]
  console.log(a)
  return a
}

butter(4, 5, 6)
