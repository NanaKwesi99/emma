const secondLargest2 = (arr) => {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 2];
}
​
module.exports = secondLargest2;