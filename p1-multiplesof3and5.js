// Number -> Number
// Multiples of 3 or 5 and sum them 

function multiplesOf3and5(number) {
  let sum = 0;
  for(let i = 0; i < number; i++ ){
    if(i % 3 === 0 || i % 5 === 0) {
      sum += i
    }
  }
  return sum
}

console.log(multiplesOf3and5(49))
console.log(multiplesOf3and5(1000))
console.log(multiplesOf3and5(19564))