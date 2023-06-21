/**
 * [첫 번째로 나오는 음수]
 * 
 * 정수 리스트 num_list가 주어질 때, 
 * 첫 번째로 나오는 음수의 인덱스를 return하도록 solution 함수를 완성해주세요. 
 * 음수가 없다면 -1을 return합니다.
 */

const solution = (num_list) => {
    const resArr = num_list.reduce((acc, cur, idx) => {
        cur < 0 ? acc.push(idx) : '';
        return acc;
    }, []);

    return !resArr.length ? -1 : resArr[0];
}

console.log(solution([12, 4, 15, 46, 38, -2, 15]));	// 5
console.log(solution([13, 22, 53, 24, 15, 6]));	// -1


// findIndex를 사용할 수 있음.
// const solution = num_list => num_list.findIndex(v => v < 0)