/**
 * [주사위 게임 3]
 * 
 * 1부터 6까지 숫자가 적힌 주사위가 네 개 있습니다. 
 * 네 주사위를 굴렸을 때 나온 숫자에 따라 다음과 같은 점수를 얻습니다.
 * 네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점을 얻습니다.
 * 세 주사위에서 나온 숫자가 p로 같고 나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면 (10 × p + q)2 점을 얻습니다.
 * 주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 (p + q) × |p - q|점을 얻습니다.
 * 어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q ≠ r)이라면 q × r점을 얻습니다.
 * 네 주사위에 적힌 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻습니다.
 * 네 주사위를 굴렸을 때 나온 숫자가 정수 매개변수 a, b, c, d로 주어질 때, 
 * 얻는 점수를 return 하는 solution 함수를 작성해 주세요.
 */

// 대신 코드가 좀 많이 비효율적이기는 함...
const calc = {
    1: (arr) => 1111 * [...new Set(arr)][0],
    2: (arr) => findDuplicates(arr).length === 2 ? doubleDice([...new Set(arr)]) : threeDice([...findDuplicates(arr), ...arr.filter((n) => n !== findDuplicates(arr)[0])]),
    3: (arr) => multiple(arr.filter((n) => n !== findDuplicates(arr)[0])),
    4: (arr) => Math.min(...arr),
}

const findDuplicates = (arr) => {
    const distinct = new Set(arr);
    const filtered = arr.filter(item => {
        if (distinct.has(item)) {
            distinct.delete(item);
        } else {
            return item;
        }
    });
 
    return [...new Set(filtered)];
}

const threeDice = ([ p, q ]) => (10 * p + q)**2;

const doubleDice = ([ p, q ]) => (p + q) * Math.abs(p - q);

const multiple = ([ q, r ]) => q * r;

const solution = (a,b,c,d) => calc[new Set([a,b,c,d]).size]([...[a,b,c,d]]);

console.log(solution(2,2,2,2));	// 2222
console.log(solution(4,1,4,4));	// 1681
console.log(solution(6,3,3,6));	// 27
console.log(solution(2,5,2,6));	// 30
console.log(solution(6,4,2,5));	// 2

// 해당 경우의 수를 생각하지 못 함.
console.log(solution(1,2,2,2));	// 441