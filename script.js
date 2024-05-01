// const arr = [1, 2, 3, 4, 5];

// Array.prototype.myMap = function (callback) {
//   if (!Array.isArray(this)) {
//     return `${this} is not an array`;
//   }

//   let resultArray = [];

//   for(let i = 0; i < this.length; i++){
//     resultArray.push(callback(this[i], i, this))
//   }

//   return resultArray;
// };

// const resultArray = arr.myMap((element, index, myArray) => {
//     return element * 2
// });

// console.log(resultArray);

// const arr = [1, 2, 3, 4, 5, 6, 7];

// Array.prototype.myFilter = function (callback) {
//   if (!Array.isArray(this)) {
//     return `${this} is not an array`;
//   }

//   let resultArray = [];

//   for (let i = 0; i < this.length; i++) {
//     if(callback(this[i], i, this)){
//         resultArray.push(this[i]);
//     }
//   }

//   return resultArray;
// };

// const filteredArray = arr.myFilter((element) => {
//   return element % 2;
// });

// console.log(filteredArray);

const arr = [1, 2, 3, 4, 5, 6, 7];

Array.prototype.myReduce = function (callback, initialValue) {
  if (!Array.isArray(this)) {
    return `${this} is not an array`;
  }

  let acc = initialValue;

  for (let i = 0; i < this.length; i++) {
    if (acc) {
      acc = callback(acc, this[i], i, this);
    } else {
      acc = this[i];
    }
  }

  return acc;
};

const arraySum = arr.myReduce((acc, curr) => {
  return acc + curr;
});

console.log(arraySum);

// sum of two number
