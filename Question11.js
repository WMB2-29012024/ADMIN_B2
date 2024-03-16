// Branch Name: B2_W4_D3

//  Question 11: Write a for-loop and count frequency of each element in the array. Store the element and its frequency in an object.

const numArr = [1, 3, 6, 3, 2, 4, 6, 6, 7];

const countFrequency = (arr) => {
  let obj = {};
  
  for (let i = 0; i < arr.length; i++) {
      const currentElement = arr[i];
      
      if (!obj[currentElement]) {
      obj[currentElement] = 1;
    } else {
      obj[currentElement] = obj[currentElement] + 1;
    }
  }

  return obj;
};

console.log(countFrequency(numArr));
