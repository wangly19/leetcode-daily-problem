function majorityElement(nums: number[]): number[] {
  const hashMap = new Map<number, number>()

  
  // 哈希表解法
  
  const res: number[] = []
  
  for (let i: number = 0 ; i < nums.length ;i++) {
      if (hashMap.has(nums[i])) {
          hashMap.set(nums[i], hashMap.get(nums[i]) + 1)
      } else {
          hashMap.set(nums[i], 1)
      }
  }

  hashMap.forEach((value, key) => {
      if (value > nums.length / 3) {
          res.push(key)
      }
  })

  return res
};