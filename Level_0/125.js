/**
 * [옹알이 (1)]
 * 
 * 머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다. 
 * 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 
 * 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다. 
 * 문자열 배열 babbling이 매개변수로 주어질 때, 
 * 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.
 */

const babList = ["aya", "ye", "woo", "ma"];

const solution = (babbling) => babbling.map(bab => babList.reduce((acc, cur) => acc.replaceAll(cur, "@@"), bab).replaceAll("@@", "")).filter(str => !str).length;

console.time();
console.log(solution(["aya", "yee", "u", "maa", "wyeoo"]));	// 1
console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]));	// 3
console.timeEnd();

// 역시 문자열은 정규식 만한게 없는 것으로 보여짐.
// const regex = /^(aya|ye|woo|ma)+$/;