/*
  You have an array of numbers and 
  you want to create a new array which contains
  double of each value of the first

  # using higher order functions
*/

const numArray = [1, 3, 42, 15, 65, 72, 23];

//  -------------------- Array.prototype.reduce method used here to double the array ------------
const doubleArray = numArray.reduce((accum, current, index) => {
  accum.push(current * 2);
  return accum;
}, []);

console.log("Array.prototype.reduce - ", doubleArray);

//  ----------------- using Higher order function(hof) way to perform the operation -------------------
const multiplyArray = (originalArray) => {
  return (multiplier) => {
    const arrayToBeDouble = [];
    for (let i = 0; i < originalArray.length; i++) {
      arrayToBeDouble.push(originalArray[i] * multiplier);
    }
    return arrayToBeDouble;
  };
};

const resultedArray = multiplyArray(numArray)(3);
console.log("Higher order function - ", resultedArray);

// ------------------- Array.from method used here to double the array ----------------
const doubleArray2 = Array.from(
  numArray,
  (eachArrayElement) => eachArrayElement * 2
);
console.log("Array.from - ", doubleArray2);
