/**
 * [문자열이 몇 번 등장하는지 세기]
 * 
 * 문자열 myString과 pat이 주어집니다. 
 * myString에서 pat이 등장하는 횟수를 return 하는 solution 함수를 완성해 주세요.
 */

const solution = (myString, pat) => [...myString].reduce((acc,_,idx) => myString.substr(idx, pat.length) === pat ? acc + 1 : acc, 0);

console.time();
console.log(solution("banana", "ana"));	// 2
console.log(solution("aaaa", "aa"));	// 3
console.timeEnd();