const obj = {
    out: {
        in :{
            key: 'value'
        }
    }
};
console.log(obj);
console.log(obj['out']);
console.log(obj['out'], ['in'] );

console.time('시간');

console.error('에러!');
// error은 에러를 콘솔에 표시한다.
// Console 창을 보면 console.log와 별 차이 없다고 생각할 수 있다.
// 하지만 개발자 도구에서 보면 다르다.

console.trace('Error');
// console.trace은 에러 발생 위치를 추적할 수 있다.

console.table([{name:'abc', birth:1990}, {name:'def', birth:1980}]);

console.dir(obj, {color: true, depth: 2});
console.dir(obj, {color: false, depth: 1});
// dir은 객체를 콘솔에 표시할 때 사용한다.
// 첫 번째 인자로 표시할 객체를 넣고, 두 번째 인자로 옵션을 넣는다.

// 옵션
// colors : (Boolean) 콘솔에 색이 추가되어 보기 편해지게 변함.
// depth : (Number) 객체 안의 객체를 몇 단계까지 보여줄지 결정함. (기본값은 2)

console.timeEnd('시간');
// time, timeEnd은 time, timeEnd 사이의 시간을 측정한다. (= 코드가 실행될 때 걸린 시간)