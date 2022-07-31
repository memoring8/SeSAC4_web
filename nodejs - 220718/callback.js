// https://defineall.tistory.com/720
// callbak : 다른 함수의 인자로 사용되는 함수
// js 는 비동기적, 함수는 동기적 방식 사용하므로, 이를 콜백형태로 사용해 동기 방식 프로그래밍을 함.


console.log('start');

function login(id, pw, cb) {
    setTimeout(() => {
        console.log('정보없음');
        cb(id);
    }, 3000);
}

const user = login('kim', '1234', user => {
    console.log(user + '님 반갑습니다.');
});


console.log('finish');



// try - catch
// https://cheershennah.tistory.com/147