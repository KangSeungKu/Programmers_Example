/**
 * 수 조작하기 2
 * 
 * 정수 배열 numLog가 주어집니다. 
 * 처음에 numLog[0]에서 부터 시작해 "w", "a", "s", "d"로 이루어진 문자열을 
 * 입력으로 받아 순서대로 다음과 같은 조작을 했다고 합시다.
 * 
 * "w" : 수에 1을 더한다.
 * "s" : 수에 1을 뺀다.
 * "d" : 수에 10을 더한다.
 * "a" : 수에 10을 뺀다.
 * 
 * 그리고 매번 조작을 할 때마다 결괏값을 기록한 정수 배열이 numLog입니다. 
 * 즉, numLog[i]는 numLog[0]로부터 총 i번의 조작을 가한 결과가 저장되어 있습니다.
 * 
 * 주어진 정수 배열 numLog에 대해 조작을 위해 입력받은 문자열을 return 하는 solution 함수를 완성해 주세요.
 */
const index = {
    '1': 'w',
    '-1': 's',
    '10': 'd',
    '-10': 'a',
}

const solution = (numLog) => {
    return numLog.reduce((acc, cur, idx, src) => {
        return acc += idx !== 0 ? index[cur - src[idx-1]] : '';
    }, '');
}

console.log(solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]));   // "wsdawsdassw"


// 괜찮은 방법 같음. => slice문법에 주목
// 하지만, 속도적인 측면에서 조금 떨어짐.
// function solution(numLog) {
//     const convert = {
//         '1': 'w', '-1': 's', '10': 'd', '-10': 'a'
//     };

//     return numLog.slice(1).map((v, i) => {
//         return convert[v - numLog[i]]
//     }).join('')
// }