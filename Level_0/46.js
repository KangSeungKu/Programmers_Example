/**
 * [문자열의 앞의 n글자]
 * 
 * 문자열 my_string과 정수 n이 매개변수로 주어질 때, 
 * my_string의 앞의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.
 */
const solution = (my_string, n) => my_string.substr(0, n);

console.log(solution("ProgrammerS123",11));	// "ProgrammerS"
console.log(solution("He110W0r1d",5));	// "He110"