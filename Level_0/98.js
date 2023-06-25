/**
 * [문자열 묶기]
 * 
 * 문자열 배열 strArr이 주어집니다. 
 * strArr의 원소들을 길이가 같은 문자열들끼리 그룹으로 묶었을 때 
 * 가장 개수가 많은 그룹의 크기를 return 하는 solution 함수를 완성해 주세요.
 */

const solution = (strArr) => {
    return Math.max(...strArr.reduce((acc, cur) => {
        acc[cur.length] = !acc[cur.length] ? 1 : ++acc[cur.length];
        return acc;
    }, []).filter(n => n));
}

console.time();
console.log(solution(["a","bc","d","efg","hi"]));	// 2
console.timeEnd();

// 테스트 1 〉	통과 (3.20ms, 47.6MB)
// 테스트 2 〉	통과 (0.14ms, 33.1MB)
// 테스트 3 〉	통과 (2.95ms, 49.1MB)
// 테스트 4 〉	통과 (3.34ms, 52.7MB)
// 테스트 5 〉	통과 (2.72ms, 47.7MB)
// 테스트 6 〉	통과 (1.51ms, 37.7MB)
// 테스트 7 〉	통과 (3.24ms, 50.8MB)
// 테스트 8 〉	통과 (3.00ms, 38.2MB)
// 테스트 9 〉	통과 (2.31ms, 44.5MB)
// 테스트 10 〉	통과 (1.18ms, 36.7MB)
// 테스트 11 〉	통과 (0.57ms, 34.2MB)
// 테스트 12 〉	통과 (2.54ms, 46.2MB)
// 테스트 13 〉	통과 (3.07ms, 51.1MB)
// 테스트 14 〉	통과 (1.91ms, 40.1MB)
// 테스트 15 〉	통과 (2.11ms, 43.7MB)
// 테스트 16 〉	통과 (1.90ms, 40.3MB)
// 테스트 17 〉	통과 (2.37ms, 44.9MB)
// 테스트 18 〉	통과 (2.11ms, 41.6MB)
// 테스트 19 〉	통과 (2.32ms, 43.7MB)
// 테스트 20 〉	통과 (2.60ms, 48.9MB)
// 테스트 21 〉	통과 (2.60ms, 48MB)
// 테스트 22 〉	통과 (2.60ms, 46.6MB)
// 테스트 23 〉	통과 (2.26ms, 41MB)
// 테스트 24 〉	통과 (3.13ms, 52.5MB)

// Map을 사용한 경우
const solution2 = (strArr) => Math.max(...strArr.reduce((acc, cur) => acc.has(cur.length) ? acc.set(cur.length, acc.get(cur.length) + 1) : acc.set(cur.length, 1), new Map()).values());

console.time();
console.log(solution2(["a","bc","d","efg","hi"]));	// 2
console.timeEnd();

// 테스트 1 〉	통과 (4.67ms, 48.7MB)
// 테스트 2 〉	통과 (0.14ms, 33.5MB)
// 테스트 3 〉	통과 (23.74ms, 50.3MB)
// 테스트 4 〉	통과 (4.99ms, 50.6MB)
// 테스트 5 〉	통과 (27.52ms, 48.3MB)
// 테스트 6 〉	통과 (20.88ms, 38.4MB)
// 테스트 7 〉	통과 (4.93ms, 50.7MB)
// 테스트 8 〉	통과 (2.33ms, 39.2MB)
// 테스트 9 〉	통과 (3.16ms, 45.5MB)
// 테스트 10 〉	통과 (1.36ms, 36.9MB)
// 테스트 11 〉	통과 (0.66ms, 34.3MB)
// 테스트 12 〉	통과 (3.75ms, 46.3MB)
// 테스트 13 〉	통과 (5.21ms, 51.1MB)
// 테스트 14 〉	통과 (2.55ms, 40.1MB)
// 테스트 15 〉	통과 (3.14ms, 44.2MB)
// 테스트 16 〉	통과 (2.39ms, 40.2MB)
// 테스트 17 〉	통과 (3.43ms, 46.1MB)
// 테스트 18 〉	통과 (2.61ms, 41.6MB)
// 테스트 19 〉	통과 (3.21ms, 45.2MB)
// 테스트 20 〉	통과 (5.20ms, 50MB)
// 테스트 21 〉	통과 (4.60ms, 48.1MB)
// 테스트 22 〉	통과 (3.85ms, 46.5MB)
// 테스트 23 〉	통과 (3.07ms, 42.2MB)
// 테스트 24 〉	통과 (5.02ms, 53.3MB)

// Map을 사용했을 때, 더 느린 결과를 가져옴

// 본 코드를 한 줄로 축약할 때
const solution3 = (strArr) => Math.max(...strArr.reduce((acc, cur) => (acc[cur.length] = !acc[cur.length] ? 1 : ++acc[cur.length], acc), []).filter(n => n));

console.time();
console.log(solution3(["a","bc","d","efg","hi"]));	// 2
console.timeEnd();
