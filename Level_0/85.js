/**
 * [공백으로 구분하기 2]
 * 
 * 단어가 공백 한 개 이상으로 구분되어 있는 문자열 my_string이 매개변수로 주어질 때, 
 * my_string에 나온 단어를 앞에서부터 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.
 */

const solution = (my_string) => my_string.split(" ").filter((str) => str != "");

console.time();
console.log(solution(" i    love  you"));	// ["i", "love", "you"]
console.log(solution("    programmers  "));	// ["programmers"]
console.timeEnd();

// 공백을 비교하지 않아도 값이 반환됨.
const solution2 = (my_string) => my_string.split(" ").filter(str => str);