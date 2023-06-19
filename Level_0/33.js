/**
 * 카운트 업
 * 
 * 정수 start와 end가 주어질 때, start부터 end까지의 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
 */

const solution = (start, end) => {
    return Array.from({length: end-start+1}, (n, i) => i + start);
}

console.log(solution(10, 20));   // [3, 4, 5, 6, 7, 8, 9, 10]