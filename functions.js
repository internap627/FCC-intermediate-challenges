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

  sumAll([10, 5])