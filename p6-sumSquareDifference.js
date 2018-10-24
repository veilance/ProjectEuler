
// Number -> Number
// Given a number n return the difference between
// the sum of the squares of the first 10 digits
// and the square of the sum  
function sumSquareDifference(n) {
  const sumOfSquares = (n*(n+1))/2
  const squareSum = (n*(n+1)*(2*n + 1))/6

  return sumOfSquares **2 - squareSum
}

console.log(sumSquareDifference(100))