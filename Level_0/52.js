/**
 * [배열 만들기 1]
 * 
 * 정수 n과 k가 주어졌을 때, 
 * 1 이상 n이하의 정수 중에서 k의 배수를 오름차순으로 
 * 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
 */

const solution = (n, k) => Array.from({length: n/k}, (_,i) => i+1).map((v) => v*k);

console.log(solution(10,3));	// [3, 6, 9]
console.log(solution(15,5));	// [5, 10, 15]