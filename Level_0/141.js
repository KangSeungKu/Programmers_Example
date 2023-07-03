/**
 * [문자열 계산하기]
 * 
 * my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 
 * 문자열 my_string이 매개변수로 주어질 때, 
 * 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.
 */

const calc = {
    "+": (a,b) => a + b,
    "-": (a,b) => a - b,
}

const solution = (my_string) => {
    const solArr = my_string.split(" ");
    let res = solArr.shift();

    while(solArr.length) {
        res = calc[solArr.shift()](+res, +solArr.shift());
    }

    return res;
}

console.time();
console.log(solution("3 + 4 - 5"));	// 7
console.timeEnd();

// 테스트 1 〉	통과 (0.06ms, 33.4MB)
// 테스트 2 〉	통과 (0.06ms, 33.4MB)
// 테스트 3 〉	통과 (0.07ms, 33.5MB)
// 테스트 4 〉	통과 (0.06ms, 33.5MB)
// 테스트 5 〉	통과 (0.07ms, 33.5MB)
// 테스트 6 〉	통과 (0.06ms, 33.5MB)
// 테스트 7 〉	통과 (0.06ms, 33.5MB)
// 테스트 8 〉	통과 (0.05ms, 33.4MB)
// 테스트 9 〉	통과 (0.05ms, 33.4MB)
// 테스트 10 〉	통과 (0.05ms, 33.4MB)

// eval을 사용
var solution2 = eval;

// 속도적 측면에서 우수
// 테스트 1 〉	통과 (0.03ms, 33.4MB)
// 테스트 2 〉	통과 (0.03ms, 33.4MB)
// 테스트 3 〉	통과 (0.03ms, 33.4MB)
// 테스트 4 〉	통과 (0.03ms, 33.5MB)
// 테스트 5 〉	통과 (0.03ms, 33.4MB)
// 테스트 6 〉	통과 (0.03ms, 33.3MB)
// 테스트 7 〉	통과 (0.03ms, 33.3MB)
// 테스트 8 〉	통과 (0.04ms, 33.5MB)
// 테스트 9 〉	통과 (0.03ms, 33.5MB)
// 테스트 10 〉	통과 (0.03ms, 33.5MB)

// shift와 unshift를 활용한 filter해결법
const solution3 = (my_string) => {
    const arr = my_string.split(" ");
    while(arr.length > 1) arr.unshift(+arr.shift() + (arr.shift() === "+" ? 1 : -1) * arr.shift());
    return arr[0];
}

// 테스트 1 〉	통과 (0.05ms, 33.4MB)
// 테스트 2 〉	통과 (0.05ms, 33.5MB)
// 테스트 3 〉	통과 (0.05ms, 33.4MB)
// 테스트 4 〉	통과 (0.05ms, 33.4MB)
// 테스트 5 〉	통과 (0.04ms, 33.5MB)
// 테스트 6 〉	통과 (0.05ms, 33.6MB)
// 테스트 7 〉	통과 (0.05ms, 33.5MB)
// 테스트 8 〉	통과 (0.04ms, 33.5MB)
// 테스트 9 〉	통과 (0.04ms, 33.4MB)
// 테스트 10 〉	통과 (0.05ms, 33.5MB)