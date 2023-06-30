/**
 * [문자열 밀기]
 * 
 * 문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고 
 * 마지막 문자는 맨 앞으로 이동시키면 "ohell"이 됩니다. 
 * 이것을 문자열을 민다고 정의한다면 문자열 A와 B가 매개변수로 주어질 때, 
 * A를 밀어서 B가 될 수 있다면 밀어야 하는 최소 횟수를 return하고 
 * 밀어서 B가 될 수 없으면 -1을 return 하도록 solution 함수를 완성해보세요.
 */

const solution = (A, B) => {
    const temp = [...A].reduce((acc, _, idx) => (acc.push(A.substr(A.length - 1 - idx, A.length) + A.substr(0, A.length - 1 - idx)), acc), []);

    return temp.includes(B) ? [temp[temp.length - 1], ...temp.slice(0, temp.length - 1)].indexOf(B) : -1;
}

console.time();
console.log(solution("hello","ohell"));	// 1
console.log(solution("apple","elppa"));	// -1
console.log(solution("atat","tata"));	// 1
console.log(solution("abc","abc"));	// 0
console.timeEnd();

// 이런 방법도 있음 (현타 씨게 옴)
const solution2 = (A,B) => (B + B).indexOf(A);