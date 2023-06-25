/**
 * [배열의 길이를 2의 거듭제곱으로 만들기]
 * 
 * 정수 배열 arr이 매개변수로 주어집니다. 
 * arr의 길이가 2의 정수 거듭제곱이 되도록 arr 뒤에 정수 0을 추가하려고 합니다. 
 * arr에 최소한의 개수로 0을 추가한 배열을 return 하는 solution 함수를 작성해 주세요.
 */

const solution = (arr) => arr.length === (2 ** (arr.length.toString(2).length - 1)) ? arr : [...arr, ...new Array(2 ** (arr.length.toString(2).length) - arr.length).fill(0)];

console.time();
console.log(solution([1, 2, 3, 4, 5, 6]));	// [1, 2, 3, 4, 5, 6, 0, 0]
console.log(solution([58, 172, 746, 89]));	// [58, 172, 746, 89]
console.timeEnd();  

// 2 ** Math.ceil(Math.log2(length))
// 위와 같은 식을 사용하여 값을 반환할 수 있음.