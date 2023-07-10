/**
 * [특이한 정렬]
 * 
 * 정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다. 
 * 이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다. 
 * 정수가 담긴 배열 numlist와 정수 n이 주어질 때 numlist의 원소를 
 * n으로부터 가까운 순서대로 정렬한 배열을 return하도록 solution 함수를 완성해주세요.
 */

const solution = (numlist, n) => numlist.sort((a,b) => b - a).map(v => [v, Math.abs(v - n)]).sort(([_,a],[__,b]) => a - b).map(([v, _]) => v);

console.time();
console.log(solution([1, 2, 3, 4, 5, 6], 4));	// 	[4, 5, 3, 6, 2, 1]
console.log(solution([10000,20,36,47,40,6,10,7000], 30));	// 	[36, 40, 20, 47, 10, 6, 7000, 10000]
console.timeEnd();

// 테스트 1 〉	통과 (0.45ms, 33.5MB)
// 테스트 2 〉	통과 (0.34ms, 33.6MB)
// 테스트 3 〉	통과 (0.25ms, 33.6MB)
// 테스트 4 〉	통과 (0.31ms, 33.5MB)
// 테스트 5 〉	통과 (0.15ms, 33.6MB)
// 테스트 6 〉	통과 (0.23ms, 33.5MB)
// 테스트 7 〉	통과 (0.10ms, 33.4MB)

// sort만 사용할 경우
const solution2 = (numlist, n) => numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);

console.time();
console.log(solution2([1, 2, 3, 4, 5, 6], 4));	// 	[4, 5, 3, 6, 2, 1]
console.log(solution2([10000,20,36,47,40,6,10,7000], 30));	// 	[36, 40, 20, 47, 10, 6, 7000, 10000]
console.timeEnd();

// 테스트 1 〉	통과 (0.10ms, 33.4MB)
// 테스트 2 〉	통과 (0.13ms, 33.6MB)
// 테스트 3 〉	통과 (0.07ms, 33.4MB)
// 테스트 4 〉	통과 (0.07ms, 33.4MB)
// 테스트 5 〉	통과 (0.05ms, 33.3MB)
// 테스트 6 〉	통과 (0.05ms, 33.4MB)
// 테스트 7 〉	통과 (0.03ms, 33.5MB)