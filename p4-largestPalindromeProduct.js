function largestPalindromeProduct(n) {
  let max = Math.pow(10, n) - 1
  let min = Math.pow(10, (n-1))
  
  let palindromeArray = []

  for( let i = max; i >= min; i--){
    for( let j = max; j >= min; j--){
      let product = j * i
      let numReverse = Number([...String(product)].reverse().join(''))
      if(product === numReverse && product > 900000) {
        palindromeArray.push(product)
      }
    }
  }

  return Math.max(...palindromeArray)
}

console.log(largestPalindromeProduct(3))