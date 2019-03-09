import * as R from 'ramda'

const arr1 = [1, 1, 1, 1, 2, 3, 4, 5]
const arr2 = [2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 8, 7, 8, 7, 8]

const arr3 = R.union(arr1, arr2)

console.log(arr3)
console.log('beto')
