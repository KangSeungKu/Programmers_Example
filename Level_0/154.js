/**
 * [k의 개수]
 * 
 * 1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 
 * 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 
 * return 하도록 solution 함수를 완성해주세요.
 */

const solution = (i, j, k) => Array.from({length: j - i + 1}, (_, idx) => idx + i).reduce((acc, cur) => acc += [...String(cur)].filter(n => n === String(k)).length, 0);

console.time();
console.log(solution(1,13,1));	// 6
console.log(solution(10,50,5));	// 5
console.log(solution(3,10,2));	// 0
console.timeEnd();

// 테스트 1 〉	통과 (68.62ms, 43.3MB)
// 테스트 2 〉	통과 (0.08ms, 33.4MB)
// 테스트 3 〉	통과 (0.08ms, 33.4MB)
// 테스트 4 〉	통과 (6.08ms, 37.1MB)
// 테스트 5 〉	통과 (3.58ms, 36.6MB)
// 테스트 6 〉	통과 (0.18ms, 33.5MB)
// 테스트 7 〉	통과 (0.61ms, 33.6MB)
// 테스트 8 〉	통과 (10.01ms, 37.9MB)

const solution2 = (i, j, k) => Array.from({length: j - i + 1}, (_, idx) => idx + i).join("").split("").filter(n => n == k).length;

console.time();
console.log(solution2(1,13,1));	// 6
console.log(solution2(10,50,5));	// 5
console.log(solution2(3,10,2));	// 0
console.timeEnd();

// 테스트 1 〉	통과 (57.38ms, 50MB)
// 테스트 2 〉	통과 (0.07ms, 33.5MB)
// 테스트 3 〉	통과 (0.07ms, 33.5MB)
// 테스트 4 〉	통과 (2.81ms, 34.3MB)
// 테스트 5 〉	통과 (1.98ms, 33.9MB)
// 테스트 6 〉	통과 (0.07ms, 33.6MB)
// 테스트 7 〉	통과 (0.50ms, 33.5MB)
// 테스트 8 〉	통과 (8.79ms, 37.6MB)
