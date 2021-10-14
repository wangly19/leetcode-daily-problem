/**
 * @param {number[]} arr
 * @return {number}
 */
 var peakIndexInMountainArray = function(arr) {

  let left = 1
  let right = arr.length - 2
  
  let top = 0

  while(left <= right) {
      /** @name 获取中心index下标 */
      const midIndex = Math.floor((left + right) / 2)
      if (arr[midIndex] > arr[midIndex + 1]) {
        top = midIndex
          right = midIndex - 1
      } else {
          left = midIndex + 1
      }
  }
  return ans;
};