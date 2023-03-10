/**
 * given array of integers have to find maximum of i%j such i,j exists in the array
 * soln: by simply finding max and secondmax integers
 * @param {number[]} arr 
 * @returns 
 */
function maxMod(arr) {
    if (arr.length < 2) return -1
    const max = arr.reduce((acc, ele) => {
        if (ele > acc) acc = ele
        return acc
    }, Number.MIN_SAFE_INTEGER)
    const secondMax = arr.reduce((acc, ele) => {
        if (ele > acc && ele < max) acc = ele
        return acc
    }, Number.MIN_SAFE_INTEGER)
    if (secondMax == Number.MIN_SAFE_INTEGER) return 0
    return (secondMax + max) % max
}

const a = maxMod([12, 2, 1, 9, 8, 7])
console.log(a)