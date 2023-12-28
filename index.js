function hasTargetSum(arr, target) {
  // Write your algorithm here
  for (let i=0 ; i< arr.length; i++) { 
    const complement = target - arr[i];
    for (let j=i+1; j<arr.length; j++){
      //[1, 2, 3, 4]
      
     if (arr[j] === complement  ){ return true;
   } }
 }
return false
}
/*function hasTargetSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  return false;
}*/

/* 
  Write the Big O time complexity of your function here
*/

/* 
 
  Add your pseudocode here
  iterate the array and add each element to all other elements 
  compare the sum with the given num
*/

/*
  Add written explanation of your solution here
*/
// create a fun that return true of two of the array ing == given number 
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
