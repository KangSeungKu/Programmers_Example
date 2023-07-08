/**
 * [로그인 성공?]
 * 
 * 머쓱이는 프로그래머스에 로그인하려고 합니다. 
 * 머쓱이가 입력한 아이디와 패스워드가 담긴 배열 id_pw와 
 * 회원들의 정보가 담긴 2차원 배열 db가 주어질 때, 다음과 같이 로그인 성공, 
 * 실패에 따른 메시지를 return하도록 solution 함수를 완성해주세요.
 * 
 * 아이디와 비밀번호가 모두 일치하는 회원정보가 있으면 "login"을 return합니다.
 * 로그인이 실패했을 때 아이디가 일치하는 회원이 없다면 “fail”를, 
 * 아이디는 일치하지만 비밀번호가 일치하는 회원이 없다면 “wrong pw”를 return 합니다.
 */

// const solution = (id_pw, db) => searchData["id"](id_pw[0], db) && searchData["pw"](id_pw[1], db) ? "login" : searchData["id"](id_pw[0], db) && !searchData["pw"](id_pw[1], db) ? "wrong pw" : "fail";
// const solution = (id_pw, db) => {
//     const data = db.filter(([id, _]) => id_pw[0] === id);
//     if(data.length) {
//         const [[_, pw]] = data;
//         if(pw === id_pw[1]) {
//             return "login";
//         } else {
//             return "wrong pw";
//         }
//     } else {
//         return "fail";
//     }
// }

// Map을 활용할 수 있음.
const solution = (id_pw, db) => {
    const [id, pw] = id_pw;
    const dbMap = new Map(db);
    return dbMap.has(id) ? dbMap.get(id) === pw ? "login" : "wrong pw" : "fail";
} 

console.time();
console.log(solution(["meosseugi", "1234"], [["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]]));	// "login"
console.log(solution(["programmer01", "15789"], [["programmer02", "111111"], ["programmer00", "134"], ["programmer01", "1145"]]));	// "wrong pw"
console.log(solution(["rabbit04", "98761"], [["jaja11", "98761"], ["krong0313", "29440"], ["rabbit00", "111333"]]));	// "fail"
console.timeEnd();


// Map(3) { 'rardss' => '123', 'yyoom' => '1234', 'meosseugi' => '1234' }
// Map(3) {
//   'programmer02' => '111111',
//   'programmer00' => '134',
//   'programmer01' => '1145'
// }
// Map(3) {
//   'jaja11' => '98761',
//   'krong0313' => '29440',
//   'rabbit00' => '111333'
// }

// 첫 번째 방법
// 테스트 1 〉	통과 (0.07ms, 33.4MB)
// 테스트 2 〉	통과 (0.07ms, 33.5MB)
// 테스트 3 〉	통과 (0.06ms, 33.4MB)
// 테스트 4 〉	통과 (0.08ms, 33.4MB)
// 테스트 5 〉	통과 (0.07ms, 33.4MB)
// 테스트 6 〉	통과 (0.07ms, 33.4MB)
// 테스트 7 〉	통과 (0.07ms, 33.4MB)
// 테스트 8 〉	통과 (0.07ms, 33.4MB)

// 두 번째 방법 - Map 활용
// 일관적인 속도를 보여줌.
// 테스트 1 〉	통과 (0.04ms, 33.4MB)
// 테스트 2 〉	통과 (0.04ms, 33.3MB)
// 테스트 3 〉	통과 (0.04ms, 33.3MB)
// 테스트 4 〉	통과 (0.04ms, 33.5MB)
// 테스트 5 〉	통과 (0.04ms, 33.3MB)
// 테스트 6 〉	통과 (0.04ms, 33.2MB)
// 테스트 7 〉	통과 (0.04ms, 33.3MB)
// 테스트 8 〉	통과 (0.04ms, 33.4MB)