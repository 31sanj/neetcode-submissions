class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countMap = {};

        for (const num of nums) {
            if (!countMap[num]) {
                countMap[num] = 0;
            }
            countMap[num] = countMap[num] + 1;
        }
        //     const entries = Object.entries(countMap)
        //     const sortedEntries = entries.sort((a,b) => b[1] - a[1])
        //     const result = sortedEntries.slice(0,k).map(([number, frequency]) => Number(number))
        //   return result

        // Step 2: Create buckets
        const bucket = Array(nums.length + 1)
            .fill(null)
            .map(() => []);

        // Put each nummber in frequecny bucket

        for (const num in countMap) {
            const frequency = countMap[num];
            bucket[frequency].push(Number(num));
        }

        //traverse buckcet

        const result = [];
        for (let i = bucket.length - 1; i >= 0; i--) {
            for (const num of bucket[i]) {
                result.push(num);

                if (result.length === k) {
                    return result;
                }
            }
        }

        return result;
    }
}
