// Problem 2: Even Fibonacci Numbers

// 1 , 2, 3, 5 


function fiboEvenSum(n) {
  let first_term = 1;
  let second_term = 2;
  let sum = 2;
  let next_term;
  if( n <= 1 ){
    return sum
  }
  for(let i = 2; i <= n; i++) {
    next_term = first_term + second_term
    first_term = second_term
    second_term = next_term
    if(next_term % 2 === 0) {
      sum += next_term
    }
  }
  return sum
}

console.log(fiboEvenSum(10))
console.log(fiboEvenSum(23))
console.log(fiboEvenSum(43))