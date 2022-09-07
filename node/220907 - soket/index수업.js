var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    console.log('client');
    res.sendFile(__dirname + '/index.html');
});

// io.on('connection) 는 클라이언트 1명과 연결될 때마다 실행
// 콜백함수로 들어온 socket은 클라이언트 1명. 
// io는 여러명의 socket에 대한 정보를 가지고 있어요. ( 연결된 클라이언트의 정보를 다 갖고 있다. )
io.on('connection', function(socket){
    console.log('connected');
    // socket.emit 을 한다는 거는 지금 연결된 클라이언트 1명에게 이벤트를 보내는 거 ( 개별 메세지 )
    socket.emit('hi', 'server hello');
    
    socket.on('click', function(data){
        console.log('client click');
        socket.emit('clickResponse', 'success');
        // io.emit은 연결된 모든 클라이언트한테 이벤트를 보내는 거 ( 전체 공지 )
        io.emit('clickResponse', 'io success');
    });
});

http.listen(8000, function(){
    console.log('server port :', 8000);
});