/**
 * [특별한 이차원 배열 1]
 * 
 * 정수 n이 매개변수로 주어질 때, 
 * 다음과 같은 n × n 크기의 이차원 배열 arr를 return 하는 solution 함수를 작성해 주세요.
 * 
 * arr[i][j] (0 ≤ i, j < n)의 값은 i = j라면 1, 아니라면 0입니다.
 */

const solution = (n) => new Array(n).fill(0).map((_,i) => new Array(n).fill(0).map((_,j) => i === j ? 1 : 0));

console.time();
console.log(solution(3));	// [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
console.log(solution(6));	// [[1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1]]
console.log(solution(1));	// [[1]]
console.timeEnd();