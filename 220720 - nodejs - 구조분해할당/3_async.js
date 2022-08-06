// https://ko.javascript.info/async-await
// function 앞에 async를 붙이면 해당 함수는 항상 프라미스를 반환합니다.
// await는 async 함수 안에서만 동작
// 자바스크립트는 await 키워드를 만나면 프라미스가 처리될 때까지 기다립니다(await는 '기다리다’라는 뜻을 가진 영단어입니다 – 옮긴이). 결과는 그 이후 반환됩니다.
// await는 말 그대로 프라미스가 처리될 때까지 함수 실행을 기다리게 만듭니다.



// function func() {
//     return new Promise(sunction(resolve, reject){
//         resolve(1);
//     });
// }

async function func(){
    return 1;
}

func().then(function(result){console.log(result);});