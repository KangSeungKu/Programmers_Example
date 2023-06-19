/**
 * 배열 만들기 2
 * 
 * 정수 l과 r이 주어졌을 때, 
 * l 이상 r이하의 정수 중에서 숫자 "0"과 "5"로만 이루어진 모든 정수를 
 * 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
 * 만약 그러한 정수가 없다면, -1이 담긴 배열을 return 합니다.
 */

// const solution = (l, r) => {
//     const arr = [];
//     for(let i = 0; i < 2**(r+'').length; i++) {
//         let tmpNum = Number(i.toString(2) + '') * 5;
//         if(l <= tmpNum && tmpNum <= r) arr.push(tmpNum);
//     }
//     return !arr.length ? [-1] : arr;
// }

// 테스트 1 〉	통과 (0.05ms, 33.6MB)
// 테스트 2 〉	통과 (0.08ms, 33.5MB)
// 테스트 3 〉	통과 (0.14ms, 33.5MB)
// 테스트 4 〉	통과 (0.15ms, 33.4MB)
// 테스트 5 〉	통과 (0.17ms, 33.6MB)
// 테스트 6 〉	통과 (0.15ms, 33.4MB)
// 테스트 7 〉	통과 (0.22ms, 33.4MB)
// 테스트 8 〉	통과 (0.15ms, 33.5MB)
// 테스트 9 〉	통과 (0.15ms, 33.5MB)
// 테스트 10 〉	통과 (0.16ms, 33.5MB)
// 테스트 11 〉	통과 (0.15ms, 33.4MB)
// 테스트 12 〉	통과 (0.05ms, 33.5MB)
// 테스트 13 〉	통과 (0.05ms, 33.4MB)
// 테스트 14 〉	통과 (0.14ms, 33.4MB)
// 테스트 15 〉	통과 (0.14ms, 33.4MB)
// 테스트 16 〉	통과 (0.14ms, 33.4MB)
// 테스트 17 〉	통과 (0.20ms, 33.5MB)
// 테스트 18 〉	통과 (0.15ms, 33.6MB)
// 테스트 19 〉	통과 (0.15ms, 33.4MB)
// 테스트 20 〉	통과 (0.15ms, 33.4MB)
// 테스트 21 〉	통과 (0.15ms, 33.4MB)
// 테스트 22 〉	통과 (0.14ms, 33.4MB)


// 두번째 모델
// const solution = (l, r) => {
//     return Array.from({length: 2**(r+'').length}, (_,i)=> Number(i.toString(2) + '') * 5).reduce((acc, cur, idx, src) => {
//         l <= cur && cur <= r ? acc.push(cur) : '';
//         idx === src.length - 1 && acc.length === 0 ? acc.push(-1) : '';
//         return acc;
//     }, []);
// }

// 테스트 1 〉	통과 (0.14ms, 33.5MB)
// 테스트 2 〉	통과 (0.15ms, 33.5MB)
// 테스트 3 〉	통과 (0.19ms, 33.5MB)
// 테스트 4 〉	통과 (0.19ms, 33.4MB)
// 테스트 5 〉	통과 (0.26ms, 33.6MB)
// 테스트 6 〉	통과 (0.22ms, 33.4MB)
// 테스트 7 〉	통과 (0.19ms, 33.5MB)
// 테스트 8 〉	통과 (0.21ms, 33.6MB)
// 테스트 9 〉	통과 (0.20ms, 33.5MB)
// 테스트 10 〉	통과 (0.24ms, 33.5MB)
// 테스트 11 〉	통과 (0.28ms, 33.4MB)
// 테스트 12 〉	통과 (0.10ms, 33.4MB)
// 테스트 13 〉	통과 (0.10ms, 33.4MB)
// 테스트 14 〉	통과 (0.20ms, 33.5MB)
// 테스트 15 〉	통과 (0.23ms, 33.4MB)
// 테스트 16 〉	통과 (0.20ms, 33.5MB)
// 테스트 17 〉	통과 (0.11ms, 33.4MB)
// 테스트 18 〉	통과 (0.21ms, 33.5MB)
// 테스트 19 〉	통과 (0.20ms, 33.4MB)
// 테스트 20 〉	통과 (0.22ms, 33.4MB)
// 테스트 21 〉	통과 (0.21ms, 33.5MB)
// 테스트 22 〉	통과 (0.34ms, 33.5MB)

// 세번째 모델
const solution = (l, r) => {
    const result = Array.from({length: 2**(r+'').length}, (_,i)=> Number(i.toString(2) + '') * 5).filter((n) => l <= n && n <= r);
    return !result.length ? [-1] : result;
}

// 테스트 1 〉	통과 (0.08ms, 33.4MB)
// 테스트 2 〉	통과 (0.11ms, 33.4MB)
// 테스트 3 〉	통과 (0.17ms, 33.4MB)
// 테스트 4 〉	통과 (0.23ms, 33.5MB)
// 테스트 5 〉	통과 (0.16ms, 33.4MB)
// 테스트 6 〉	통과 (0.16ms, 33.4MB)
// 테스트 7 〉	통과 (0.19ms, 33.4MB)
// 테스트 8 〉	통과 (0.22ms, 33.5MB)
// 테스트 9 〉	통과 (0.17ms, 33.6MB)
// 테스트 10 〉	통과 (0.17ms, 33.5MB)
// 테스트 11 〉	통과 (0.17ms, 33.4MB)
// 테스트 12 〉	통과 (0.09ms, 33.4MB)
// 테스트 13 〉	통과 (0.13ms, 33.4MB)
// 테스트 14 〉	통과 (0.18ms, 33.4MB)
// 테스트 15 〉	통과 (0.22ms, 33.4MB)
// 테스트 16 〉	통과 (0.17ms, 33.5MB)
// 테스트 17 〉	통과 (0.16ms, 33.4MB)
// 테스트 18 〉	통과 (0.18ms, 33.4MB)
// 테스트 19 〉	통과 (0.17ms, 33.6MB)
// 테스트 20 〉	통과 (0.17ms, 33.4MB)
// 테스트 21 〉	통과 (0.17ms, 33.5MB)
// 테스트 22 〉	통과 (0.18ms, 33.5MB)

console.log(solution(5, 555));  // [5, 50, 55, 500, 505, 550, 555]
console.log(solution(10, 20));    // [-1]