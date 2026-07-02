class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countMap = {}

        for (const num of nums) {
            if(!countMap[num]) {
                countMap[num] = 0
            }
            countMap[num] = countMap[num] + 1;
        }
    const entries = Object.entries(countMap)
    const sortedEntries = entries.sort((a,b) => b[1] - a[1])
    const result = sortedEntries.slice(0,k).map(([number, frequency]) => Number(number))
  return result

    
        
    }
}
