/**
 * [약수 구하기]
 * 
 * 정수 n이 매개변수로 주어질 때, 
 * n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.
 */

const solution = (n) => {
    const resArr = [];

    for(i = 1; i <= n; i++) {
        n%i === 0 ? resArr.push(i) : 0;
    }

    return resArr;
}

console.time();
console.log(solution(24));	// [1, 2, 3, 4, 6, 8, 12, 24]
console.log(solution(29));	// [1, 29]
console.timeEnd();