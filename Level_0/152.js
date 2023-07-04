/**
 * [삼각형의 완성조건 (1)]
 * 
 * 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
 * 
 * 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
 * 삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 
 * 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.
 */

const sol = {
    "1": () => 1,
    "2": (sides) => sides.filter(n => Math.max(...sides) !== n).length === 1 ? [...new Set(sides)].reduce((acc, cur) => acc + cur) > Math.max(...sides) ? 1 : 2 : Math.min(...sides)*2 > Math.max(...sides) ? 1 : 2,
    "3": (sides) => sides.filter(n => Math.max(...sides) !== n).reduce((acc, cur) => acc + cur) > Math.max(...sides) ? 1 : 2,
}

const solution = (sides) => {
    return sol[new Set(sides).size](sides);
}

console.time();
console.log(solution([1, 2, 3]));	// 2
console.log(solution([3, 6, 2]));	// 2
console.log(solution([199, 72, 222]));	// 1
console.log(solution([111, 112, 112]));	// 1
console.log(solution([111, 111, 300]));	// 2
console.timeEnd();

// 테스트 1 〉	통과 (0.07ms, 33.4MB)
// 테스트 2 〉	통과 (0.06ms, 33.4MB)
// 테스트 3 〉	통과 (0.03ms, 33.4MB)
// 테스트 4 〉	통과 (0.03ms, 33.5MB)
// 테스트 5 〉	통과 (0.06ms, 33.5MB)
// 테스트 6 〉	통과 (0.07ms, 33.4MB)
// 테스트 7 〉	통과 (0.06ms, 33.5MB)
// 테스트 8 〉	통과 (0.06ms, 33.4MB)
// 테스트 9 〉	통과 (0.06ms, 33.5MB)

// 정렬로 크기를 구분할 수 있음.

const solution2 = (sides) => {
    const [a, b, big] = sides.sort((a, b) => a - b);
    return a + b > big ? 1 : 2;
}

console.time();
console.log(solution2([1, 2, 3]));	// 2
console.log(solution2([3, 6, 2]));	// 2
console.log(solution2([199, 72, 222]));	// 1
console.log(solution2([111, 112, 112]));	// 1
console.log(solution2([111, 111, 300]));	// 2
console.timeEnd();

// 테스트 1 〉	통과 (0.05ms, 33.4MB)
// 테스트 2 〉	통과 (0.05ms, 33.5MB)
// 테스트 3 〉	통과 (0.05ms, 33.5MB)
// 테스트 4 〉	통과 (0.08ms, 33.5MB)
// 테스트 5 〉	통과 (0.05ms, 33.5MB)
// 테스트 6 〉	통과 (0.05ms, 33.4MB)
// 테스트 7 〉	통과 (0.06ms, 33.5MB)
// 테스트 8 〉	통과 (0.05ms, 33.5MB)
// 테스트 9 〉	통과 (0.05ms, 33.4MB)