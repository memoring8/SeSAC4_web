import './App.css';
import './test.css';
import React, {Fragment} from 'react';

// fucntion 키워드 사용하여 컴포넌트 만들기 -> 함수형 컴포넌트 라고 함.
// 함수형 component -> return안에 적힘
function App() {
  // 수업

  // var name ="";
  // const flag = true;
  // if(flag) name = "sesac";
  // else name = "문래";

  // const style = {
  //   backgroindColor: 'yellow',
  //   color: 'blue'
  // };

  const name = "슈슈";
  const animal = "강아지";

  const qqq = true;

  const underline = {
    textDecoration: 'underline'
  }

  const a = 8;
  const b = 5;

  const title = 'HELLO WORLD';

  return (
    // 수업

    // <div className="class" style={style}> 
    // 내부에서 스타일 줄 때는, {{}} 괄호 두번
    // <div className="class" style={{
    //   backgroindColor: 'yellow',
    //   color: 'blue'
    // }}> 
    //   {name} 
    //   { flag ? (<h1> true </h1>): <h2> false </h2>}
    //   { flag && (<h1> true </h1>)}
    // </div>

    // 실습 01
    // <div>
    //   <div> 이것은 div입니다. </div>
    //   <h3> 이것은 div안에 있는 h3태그 입니다. </h3>
    // </div>

    // 실습 02
    // <h2>
    //   제 반려 동물의 이름은 <span style={underline}>{name}</span> 입니다. <br />
    //   <span style={underline}>{name}</span>는 <span style={underline}>{animal}</span> 입니다.
    // </h2>

    // 실습 03
    // <div>
    // { qqq ? (<div>정답입니다!</div>): <div>오답입니다!</div>}
    // </div>

    // 실습 04
    // <>
    // { a > b && <div>a가 b보다 큽니다.</div>}
    // </>

    // 실습 05
    // <>
    //   <div className='test'>{title}</div>
    //   <div className='box'>
    //     <div>아이디 : <input className='input'/></div>
    //     <div>비밀번호 : <input className='input'/></div>
    //   </div>
    // </>

    // 실습 06
    <div className='divs'>
      <div className='red'></div>
      <div className='orange'></div>
      <div className='yellow'></div>
      <div className='green'></div>
      <div className='blue'></div>
      <div className='navy'></div>
      <div className='purple'></div>
    </div>
  );
}

export default App;
