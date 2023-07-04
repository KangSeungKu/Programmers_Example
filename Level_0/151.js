/**
 * [가까운 수]
 * 
 * 정수 배열 array와 정수 n이 매개변수로 주어질 때, 
 * array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.
 */

const solution = (array, n) => {
    const diff = array.sort((a,b) => a - b).map(num => Math.abs(num - n));
    const min = Math.min(...diff);
    return array[diff.indexOf(min)];
}

console.time();
console.log(solution([3, 10, 28], 20));	// 28
console.log(solution([10, 11, 12], 13));	// 12
console.log(solution([10, 14, 12], 13));	// 12
console.timeEnd();