/**
 * [정수 찾기]
 * 
 * 정수 리스트 num_list와 찾으려는 정수 n이 주어질 때, 
 * num_list안에 n이 있으면 1을 없으면 0을 return하도록 
 * solution 함수를 완성해주세요.
 */

const solution = (num_list, n) => !num_list.filter(num => num === n).length ? 0 : 1;

console.time();
console.log(solution([1, 2, 3, 4, 5], 3));	// 1
console.log(solution([15, 98, 23, 2, 15], 20));	// 0
console.timeEnd();

// includes 활용
const solution2 = (num_list,n) => +(num_list.includes(n));