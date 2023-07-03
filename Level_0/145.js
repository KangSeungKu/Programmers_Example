/**
 * [한 번만 등장한 문자]
 * 
 * 문자열 s가 매개변수로 주어집니다. 
 * s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 r
 * eturn 하도록 solution 함수를 완성해보세요. 
 * 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.
 */

const solution = (s) => {
    const resMap = [...s].reduce((acc, cur) => (acc.has(cur) ? acc.set(cur, acc.get(cur) + 1) : acc.set(cur, 1), acc), new Map());

    resMap.forEach((elem, key, src) => elem !== 1 ? src.delete(key) : "");

    return [...resMap.keys()].sort().join("");
}

console.time();
console.log(solution("abcabcadc"));	    // "d"
console.log(solution("abdc"));	        // "abcd"
console.log(solution("hello"));	        // "eho"
console.timeEnd();

// 테스트 1 〉	통과 (0.08ms, 33.5MB)
// 테스트 2 〉	통과 (0.08ms, 33.6MB)
// 테스트 3 〉	통과 (0.16ms, 33.5MB)
// 테스트 4 〉	통과 (0.16ms, 33.4MB)
// 테스트 5 〉	통과 (0.17ms, 33.5MB)
// 테스트 6 〉	통과 (0.08ms, 33.4MB)
// 테스트 7 〉	통과 (0.17ms, 33.5MB)
// 테스트 8 〉	통과 (0.07ms, 33.6MB)
// 테스트 9 〉	통과 (0.07ms, 33.5MB)
// 테스트 10 〉	통과 (0.08ms, 33.5MB)


// indexOf와 lastIndexOf를 이용한 방법
const solution2 = (s) => [...s].filter(ch => s.indexOf(ch) === s.lastIndexOf(ch)).sort().join("");

console.time();
console.log(solution2("abcabcadc"));	// "d"
console.log(solution2("abdc"));	        // "abcd"
console.log(solution2("hello"));	    // "eho"
console.timeEnd();

// 테스트 1 〉	통과 (0.06ms, 33.4MB)
// 테스트 2 〉	통과 (0.07ms, 33.5MB)
// 테스트 3 〉	통과 (0.06ms, 33.4MB)
// 테스트 4 〉	통과 (0.06ms, 33.4MB)
// 테스트 5 〉	통과 (0.06ms, 33.4MB)
// 테스트 6 〉	통과 (0.04ms, 33.4MB)
// 테스트 7 〉	통과 (0.06ms, 33.4MB)
// 테스트 8 〉	통과 (0.05ms, 33.4MB)
// 테스트 9 〉	통과 (0.06ms, 33.4MB)
// 테스트 10 〉	통과 (0.05ms, 33.5MB)