/**
 * TC: O(n)
 * SC: O(n)
 * merging two sorted array which is also a concept of merge sort
 * @param {number[]} A sorted array one
 * @param {number[]} B sorted array two
 */
function mergeSortedArrays(A, B) {
    let i = 0
    let j = 0
    let sortedArr = []
    while (i < A.length && j < B.length) {
        if (A[i] <= B[j]) {
            sortedArr.push(A[i])
            i++
        } else {
            sortedArr.push(B[j])
            j++
        }
    }
    if (i < A.length) sortedArr = sortedArr.concat(A.slice(i, A.length))
    if (j < B.length) sortedArr = sortedArr.concat(A.slice(j, B.length))
    console.log(sortedArr)
}

mergeSortedArrays([1, 3, 4, 7, 9], [2, 5, 6])