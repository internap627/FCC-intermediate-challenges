//This function should sum all values in a range
// arr contains two value e.g [1, 4]
// It should work regardless of the order e.g [4, 1]
function sumAll(arr) {
    let newArr = arr.sort((a,b) => a - b)
    let num = 0
    for(let i = newArr[0] ; i <= newArr[1]; i++ ){
      num += i
    }
  
    return num
  }


  //Return the maximum value from each nested array
  // E.g. nums = [[4,6,7], [5,8,9], [4,2,5]] should return [ 7, 9, 5 ]
  function findMax(arr) {
    return arr.map(array => Math.max(...array))
  }

  //Capitalise every word in the string
  // e.g. hello world => Hello World
  const makeCaps = (str) => {
    const arr = str.split(' ')
    return arr.map(str => str.charAt(0).toUpperCase() + str.substring(1) ).join(' ')
  }

  //Return true of false based on the last character in a string
  const endsWith = (str, char) => {
    return str.charAt(str.length -1) == char ? true : false
  }