// 자바스크립트에서 다루는 타이머 함수는 일정 시간이 지난 후 특정 코드 또는 함수가 실행될 수 있도록 해주는 함수와 일정 시간마다 함수가 실행될 수 있도록 해주는 함수를 말합니다.

// setTimeout(함수, 시간) - 일정 시간 후 함수 실행
// setInterval(함수, 시간) - 일정 시간 간격으로 함수 반복 실행
// clearTimeout(id) - 실행되고 있는 timeout 중지
// clearInterval(id) - 실행되고 있는 interval 중지

// clear 함수가 받는 인자(id)는 set 함수가 반환하는 값이다.



const fun1 = setTimeout(()=> {
    console.log('1.5초 후 실행');
}, 1500);
const fun2 = setInterval(()=> {
    console.log('1초 마다 반복');
}, 1000);
const fun3 = setTimeout(()=> {
    console.log('func3 실행');
}, 3000);



setTimeout(() => {
    clearTimeout(fun3);
    clearInterval(fun2);
}, 2500);


const fun4 = setImmediate(()=> {
    console.log('func4 즉시 실행');
});
const fun5 = setImmediate(()=> {
    console.log('func5 즉시 실행');
});


clearImmediate(fun5);
