/**
 * [치킨 쿠폰]
 * 
 * 프로그래머스 치킨은 치킨을 시켜먹으면 한 마리당 쿠폰을 한 장 발급합니다. 
 * 쿠폰을 열 장 모으면 치킨을 한 마리 서비스로 받을 수 있고, 
 * 서비스 치킨에도 쿠폰이 발급됩니다. 
 * 시켜먹은 치킨의 수 chicken이 매개변수로 주어질 때 
 * 받을 수 있는 최대 서비스 치킨의 수를 return하도록 solution 함수를 완성해주세요.
 */

// const solution = (chicken) => sol(chicken);

const coupon = (chicken) => chicken > 9 ? chicken + coupon(Math.floor(chicken / 10)) : chicken;

const solution = (chicken) => {
    let survice = 0;
    let coupon = chicken;

    while(chicken !== 0) {
        // 주문
        chicken = Math.floor(coupon / 10);
        coupon -= Math.floor(coupon / 10) * 10;
        survice += chicken;

        // 쿠폰발급
        coupon += chicken;
    }

    return survice;
}

console.time();
console.log(solution(100));	// 11
console.log(solution(1081));	// 120
console.log(solution(90));	// 9
console.log(solution(1999));	// 222
console.timeEnd();


const solution2 = (chicken) => parseInt((chicken-1) / 9);

console.time();
console.log(solution2(100));	// 11
console.log(solution2(1081));	// 120
console.log(solution2(90));	// 9
console.log(solution2(1999));	// 222
console.timeEnd();

const solution3 = (chicken) => ~~(chicken * 0.111111);

console.time();
console.log(solution3(100));	// 11
console.log(solution3(1081));	// 120
console.log(solution3(90));	// 9
console.log(solution3(1999));	// 222
console.timeEnd();