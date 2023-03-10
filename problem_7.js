/**
 * 
 * @param {number[]} A 
 * @param {number} B 
 */
function distributeChocolate(A, B) {
    A = A.sort((a, b) => a - b)
    let min = Number.MAX_SAFE_INTEGER
    for (let i = 0; i < A.length - B; i++) {
        const sum = A[i + B - 1] - A[i]
        if (sum < min) min = sum
    }
    console.log(min)
}

distributeChocolate([3, 4, 1, 9, 56, 7, 9, 12], 5)

// https://www.geeksforgeeks.org/chocolate-distribution-problem/