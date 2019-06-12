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


//Remove specific elements from an array
//The function below should return [12,92,65]
  const destroyer = (...args) => {
    const target = args[0]
    const vals = args.slice(1)
    return target.filter(el => !vals.includes(el))
  }
  destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")


  /*Chunky Monkey
    Create a new 2d array of a particular size
    The size of the nested arrays should be that of the number passed in
  */
 const array = ['a', 'b', 'c', 'd']

  const chunkIt = (arr, num) => {
  let newArr = []
  while(arr.length > 0) {
    newArr.push(arr.splice(0, num))
  }
  
  return newArr
  }

  chunkIt(array, 3)