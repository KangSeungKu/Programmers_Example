/**
 * [문자 개수 세기]
 * 
 * 알파벳 대소문자로만 이루어진 문자열 my_string이 주어질 때, 
 * my_string에서 'A'의 개수, my_string에서 'B'의 개수,..., 
 * my_string에서 'Z'의 개수, my_string에서 'a'의 개수, 
 * my_string에서 'b'의 개수,..., my_string에서 'z'의 개수를 
 * 순서대로 담은 길이 52의 정수 배열을 return 하는 solution 함수를 작성해 주세요.
 */
const solution = (my_string) => [...my_string].reduce((acc, cur) => { acc[!!cur.match(new RegExp(/^[A-Z]/)) ? cur.charCodeAt() - 65 : cur.charCodeAt() - 71]++; return acc }, new Array(52).fill(0));

console.log(solution("Programmers").join('') === [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0].join(''));