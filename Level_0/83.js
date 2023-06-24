/**
 * [ad 제거하기]
 * 
 * 문자열 배열 strArr가 주어집니다. 
 * 배열 내의 문자열 중 "ad"라는 부분 문자열을 포함하고 있는 모든 문자열을 
 * 제거하고 남은 문자열을 순서를 유지하여 배열로 return 하는 solution 함수를 완성해 주세요.
 */

const solution = (strArr) => strArr.filter((str) => str.indexOf("ad") === -1);

console.time();
console.log(solution(["and","notad","abcd"]));	// ["and","abcd"]
console.log(solution(["there","are","no","a","ds"]	));	// ["there","are","no","a","ds"]
console.timeEnd();

// include를 사용해도 좋은 방법일 것 같음.