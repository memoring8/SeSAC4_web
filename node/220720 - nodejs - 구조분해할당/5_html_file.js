// html 파일 전송
// promise 방식
// https://velog.io/@boram_in/4장-http-모듈로-서버-만들기1

const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async function(req, res) {
    try {
        const data = await fs.readFile('./5_http.html');
        res.writeHead(200);
        res.end(data);
    } catch (err) {
        console.error(err);
        res.writeHead(404);
        res.end(err.message);
    }
});

server.listen(8000, function(){
    console.log('8000번 포트');
    
})

// https://yohanpro.com/posts/nodejs/express-response
// res.send()는 send에 전해진 argument에 따라서 Content-type이 자동적으로 만들어진다. 이게 기본이다.
// res.json()은 json이 아닌 것도 json 형식으로 바꾸어서 보내준다. 즉 content-type 헤더를 application/JSON으로 고정한다. 그런데 결국 res.json()도 마지막에 res.send()를 호출한다.
// res.end()는 보내줄 아무 데이터도 없는데 response를 끝내고 싶을 때 사용한다.

// https://hyoveemo.tistory.com/13
// https://araikuma.tistory.com/453
