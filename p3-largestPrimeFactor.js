// Number -> Number
// returns the largest prime factor of the inputed number
function largestPrimeFactor(number) {
  let prime = 2,
    max = 1;
  while (prime <= number) {
    if (number % prime === 0) {
      max = prime;
      number = number / prime;
    } else {
      prime++;
    }
  }
  return max;
}

console.log(largestPrimeFactor(13195))
