/**
 * [조건에 맞게 수열 변환하기 3]
 * 
 * 정수 배열 arr와 자연수 k가 주어집니다.
 * 
 * 만약 k가 홀수라면 arr의 모든 원소에 k를 곱하고, 
 * k가 짝수라면 arr의 모든 원소에 k를 더합니다.
 * 
 * 이러한 변환을 마친 후의 arr를 return 하는 solution 함수를 완성해 주세요.
 */

const solution = (arr, k) => arr.map(v => !(k%2) ? v + k : v * k);

console.time();
console.log(solution([1, 2, 3, 100, 99, 98], 3));	// [3, 6, 9, 300, 297, 294]
console.log(solution([1, 2, 3, 100, 99, 98], 2));	// [3, 4, 5, 102, 101, 100]
console.timeEnd();