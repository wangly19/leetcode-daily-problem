function fizzBuzz(n) {
  const result = []

  let i = 1
  while (i <= n) {
      let str = ''
      if (i % 3 === 0) {
          str += 'Fizz'
      }
      if (i % 5 === 0) {
          str += 'Buzz'
      }
      result.push(str || str + i)
      i++
  }

  return result
};