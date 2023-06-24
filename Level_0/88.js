/**
 * [간단한 식 계산하기]
 * 
 * 문자열 binomial이 매개변수로 주어집니다. 
 * binomial은 "a op b" 형태의 이항식이고 a와 b는 음이 아닌 정수, 
 * op는 '+', '-', '*' 중 하나입니다. 
 * 주어진 식을 계산한 정수를 return 하는 solution 함수를 작성해 주세요.
 */
const calc = {
    "+": (a, b) => Number(a) + Number(b),
    "-": (a, b) => Number(a) - Number(b),
    "*": (a, b) => Number(a) * Number(b),
}

const solution = (binomial) => {
    const [a, op, b] = binomial.split(" ");
    return calc[op](a,b);
}

console.time();
console.log(solution("43 + 12"));	// 55
console.log(solution("0 - 7777"));	// -7777
console.log(solution("40000 * 40000"));	// 1600000000
console.timeEnd();

// Number 클래스를 사용할 필요없이 '+'연산자만 사용하면 숫자형으로 변함.