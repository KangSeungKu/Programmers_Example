/**
 * [이차원 배열 대각선 순회하기]
 * 
 * 2차원 정수 배열 board와 정수 k가 주어집니다.
 * 
 * i + j <= k를 만족하는 모든 (i, j)에 대한 board[i][j]의 
 * 합을 return 하는 solution 함수를 완성해 주세요.
 */

const solution = (board, k) => board.reduce((acc1, cur1, idx1) => acc1 + cur1.reduce((acc2, cur2, idx2) => acc2 += idx1 + idx2 <= k ? cur2 : 0, 0), 0);

console.time();
console.log(solution([[0, 1, 2],[1, 2, 3],[2, 3, 4],[3, 4, 5]], 2));	// 8
console.timeEnd();