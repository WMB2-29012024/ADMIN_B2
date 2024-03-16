// Branch Name: B2_W4_D3

//  Question 14: There are 2 different arrays, write a for-loop, that should log elements at the same index in both the arrays. The loop should run till the longer array's length.

const numArr1 = [1, 2, 3, 4, 5];
const numArr2 = [6, 7, 8, 9, 10, 11, 12];

const logSameElements = (arr1, arr2) => {
  let longerArrayLength = 0;

  if (arr1.length < arr2.length) {
    longerArrayLength = arr2.length;
  } else {
    longerArrayLength = arr1.length;
  }

  for (let i = 0; i < longerArrayLength; i++) {
    console.log(arr1[i], arr2[i]);
  }
};

logSameElements(numArr1, numArr2);
