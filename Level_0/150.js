/**
 * [369게임]
 * 
 * 머쓱이는 친구들과 369게임을 하고 있습니다. 
 * 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 
 * 숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다. 
 * 머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 
 * 머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요.
 */

const solution = (order) => [...String(order)].reduce((acc, cur) => acc + (+cur === 3 || +cur === 6 || +cur === 9), 0);

console.time();
console.log(solution(3));	// 1
console.log(solution(29423));	// 2
console.timeEnd();


// 정규식을 이용한 예
const solution2 = (order) => [...String(order).matchAll(/[3|6|9]/g)].length;

console.time();
console.log(solution2(3));	// 1
console.log(solution2(29423));	// 2
console.timeEnd();

/**
 * Set 자료구조와 Match 메서드를 사용한 경우 둘 다 효율적이고 좋은 코드입니다. 
 * Set 자료구조는 검색 속도가 빠르다는 장점이 있습니다. 
 * 자료구조를 생성하고 각 요소를 Set 객체에 포함시켜 놓고 탐색을 할 때 
 * 검색 속도가 빠르다는 것이 강점입니다. 
 * Match 메서드는 정규식을 이용해 특정 패턴을 찾을 때 유용하게 사용할 수 있습니다. 
 * 그러나, 이 경우에는 간단한 검색을 하는 것이기 때문에 Set 자료구조를 사용한 것이 더 간결하고 효율적일 것입니다. 
 * 따라서, 위에서 제시한 두 코드 모두 효율적이고 좋은 코드입니다. 개발자의 선호에 따라 선택하면 됩니다.
 */

const solution3 = (order) => {
    const reg = new Set(["3", "6", "9"]);
    return [...String(order)].reduce((acc, cur) => acc + reg.has(cur),0);
}

console.time();
console.log(solution3(3));	// 1
console.log(solution3(29423));	// 2
console.timeEnd();