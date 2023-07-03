/**
 * [인덱스 바꾸기]
 * 
 * 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, 
 * my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.
 */

const solution = (my_string, num1, num2) => {
    const resStr = [...my_string];
    [resStr[num1], resStr[num2]] = [resStr[num2], resStr[num1]]
    return resStr.join("");
}

console.time();
console.log(solution("hello", 1, 2));	// "hlelo"
console.log(solution("I love you", 3, 6));	// "I l veoyou"
console.timeEnd();