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
    clearTimeout(func3);
    clearInterval(func2);
}, 2500);

const fun4 = setImmediate(()=> {
    console.log('func4 즉시 실행');
});
const fun5 = setImmediate(()=> {
    console.log('func5 즉시 실행');
});


clearImmediate(func5);
