const numbers = [4, 5, 6, 7, 12, 45];

//normal process

// let sum = 0;
// for(const num of numbers){
//     sum = sum + num
// }

//using reduce
const total = numbers.reduce((a, c) => a + c, 0)
console.log(total)

// some explaination examples
// const total = numbers.reduce((accumulator, current) => accumulator + current, 0)
// const total = numbers.reduce((sum, num) => sum + num, initial value)