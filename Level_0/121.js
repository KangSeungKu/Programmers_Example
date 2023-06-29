/**
 * [정수를 나선형으로 배치하기]
 * 
 * 양의 정수 n이 매개변수로 주어집니다. 
 * n × n 배열에 1부터 n2 까지 정수를 인덱스 [0][0]부터 시계방향 
 * 나선형으로 배치한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.
 */

const solution = (n) => {
    const frame = Array.from(Array(n), () => Array(n).fill(0));
    let x = 0;
    let y = 0;
    let num = 0;

    while(num < n**2) {
        for(i = 0; i < n; i++) {
            if(!frame[x][i]) {
                frame[x][i] = ++num;
                y = i;
            }
        }

        for(j = 0; j < n; j++) {
            if(!frame[j][y]) {
                frame[j][y] = ++num;
                x = j;
            }
        }

        for(k = n-1; k >= 0; k--) {
            if(!frame[x][k]) {
                frame[x][k] = ++num;
                y = k;
            }
        }

        for(z = n-1; z >= 0; z--) {
            if(!frame[z][y]) {
                frame[z][y] = ++num;
                x = z;
            }
        }
    }

    return frame;
}

console.time();
console.log(solution(4));	// [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]
console.log(solution(5));	// [[1, 2, 3, 4, 5], [16, 17, 18, 19, 6], [15, 24, 25, 20, 7], [14, 23, 22, 21, 8], [13, 12, 11, 10, 9]]
console.timeEnd();