/**
 * [문자열 여러 번 뒤집기]
 * 
 * 문자열 my_string과 이차원 정수 배열 queries가 매개변수로 주어집니다. 
 * queries의 원소는 [s, e] 형태로, my_string의 인덱스 s부터 인덱스 e까지를 뒤집으라는 의미입니다. 
 * my_string에 queries의 명령을 순서대로 처리한 후의 문자열을 return 하는 solution 함수를 작성해 주세요.
 */

const solution = (my_string, queries) => queries.reduce((acc, [s,e]) => acc.slice(0, s) + [...acc.slice(s,e+1)].reverse().join('') + acc.slice(e+1, acc.length), my_string);

console.log(solution("rermgorpsam",[[2, 3], [0, 7], [5, 9], [6, 10]]));	// "programmers"

// 해당 케이스를 예상치 못 함.
console.log(solution("abab", [[2, 3]])) // "abba";