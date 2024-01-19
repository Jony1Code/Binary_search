let arr = [12, 34, 56, 70, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.sort(function (a, b) {
  return a - b;
});

function binary_search(arr, item) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = arr[mid];
    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
}

console.log("binary_search =>", binary_search(arr, 10));
