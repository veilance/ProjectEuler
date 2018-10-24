// LCM of 1 to n numbers
// LCM Formula is lcm(a,b) = |a*b| / gcd(a,b)
function lcm(a,b) {
  return (a*b) / gcd(a,b)
} 

// GCD (Greatest Common Divisor) of two number we use Euclidean alg
function gcd(a,b){
  if(b === 0){
    return a
  } 
  return gcd(b, a%b)
}

// Number -> Number
// Given a number (n) return the smallest positive number 
// evenly divisible by all the numbers from 1 to n
function smallestMult(n) {
  let maxLCM = 1

  for(let i = 2; i <= n; i++){
    maxLCM = lcm(maxLCM, i)
  }
  return maxLCM
}

console.log(smallestMult(10))