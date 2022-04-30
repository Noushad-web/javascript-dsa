/*
  Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/

// ----------- first method to implement ----------------

// function diffArray(arr1, arr2) {

//   const mergeBothArray = arr1.concat(arr2);
//   const resultedArr = mergeBothArray.filter((eachElem) => !arr1.includes(eachElem) || !arr2.includes(eachElem))

//   return resultedArr;
// }

// ------------ second method to implement --------------- 
const diffArray = (arr1, arr2) => {

  const diff = (a, b) => {
    return a.filter(eachItem => b.indexOf(eachItem) === -1)
  }

  return diff(arr1, arr2).concat(diff(arr2, arr1));
}

const resultedArray = diffArray([1, 2, 3, 5], [5, 3, 2, 4, 1]);
console.log(resultedArray) // Array [ 4 ]
