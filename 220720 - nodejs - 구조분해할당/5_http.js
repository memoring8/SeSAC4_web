
const http = require('http');

const server = http.createServer(function(req, res){
    res.writeHead(200, {'content-Type': 'text/html; charset=utf8'});
    res.write('<h1> hi </h1>');
    res.end('<p> 안녕 </p>');
});

server.listen(8000, function(){
    console.log('8000번 포트');
})

server.on('request', function(){
    console.log('client request');
})

server.on('connection', function(){
    console.log('client connection');
})

server.on('checkContinue', function(){
    console.log('client checkContinue');
})

// server 객체의 메소드
// listen(port [, callback]) - 서버 실행 


// server 객체의 이벤트
// request  - 클라이언트가 요청할 때 발생 
// connection  - 클라이언트가 접속할 때 발생 
// close  - 서버가 종료될 때 발생 
// checkContinue  - 클라이언트가 연결을 지속하고 있을 때 발생 
// upgrade  - 클라이언트가 HTTP 업그레이드를 요청할 때 발생 
// clientError  - 클라이언트에서 오류가 발생할 때 발생 

