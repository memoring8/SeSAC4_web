import React, {useState} from "react";

// 함수형 컴포넌트에서 useState 사용하는 법
// state 값을 바꾸어야 할 경우, setState 또는 useState 사용해야 함.
const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEvent = () => setMessage('안녕하세요!');
    const onClickLeave = () => setMessage('안녕히가세요!');

    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick={onClickEvent}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color}}>{message}</h1>

            <button style={{color: 'red'}} onClick={()=> setColor('red')}>빨간색</button>
            <button style={{color: 'blue'}} onClick={()=> setColor('blue')}>파란색</button>
            <button style={{color: 'green'}} onClick={()=> setColor('green')}>초록색</button>
        </div>
    )
}

export default Say;