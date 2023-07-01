/**
 * [7의 개수]
 * 
 * 머쓱이는 행운의 숫자 7을 가장 좋아합니다. 
 * 정수 배열 array가 매개변수로 주어질 때, 
 * 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.
 */

const solution = (array) => [...array.join('')].filter(n => Number(n) === 7).length;

console.time();
console.log(solution([7, 77, 17]));	// 4
console.log(solution([10, 29]));	// 0
console.timeEnd();