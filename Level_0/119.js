/**
 * [l로 만들기]
 * 
 * 알파벳 소문자로 이루어진 문자열 myString이 주어집니다. 
 * 알파벳 순서에서 "l"보다 앞서는 모든 문자를 "l"로 바꾼 문자열을 
 * return 하는 solution 함수를 완성해 주세요.
 */

const solution = (myString) => [...myString].map(ch => ch.charCodeAt() < 108 ? 'l' : ch).join('');

console.time();
console.log(solution("abcdevwxyz"));	// "lllllvwxyz"
console.log(solution("jjnnllkkmm"));	// "llnnllllmm"
console.timeEnd();

// ASCII코드로 변경하지 않아도 문자비교 가능
// 'a' < 'l' -> true, 'm' < 'l' -> false