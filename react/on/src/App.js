import logo from './logo.svg';
import './App.css';
import React, {Component, Fragment} from 'react';
import MyComponent from './MyComponent';
import MyComponent2 from './MyComponent2';
import MyComponent3 from './MyComponent3';
import Counter from './Counter';
import Say from './Say';
import Event from './Event';

/* 함수형 컴포넌트 만들기, JSX 강의

function App() { 
  const name = '리액트';
  const ud = undefined;
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16
  }

  return ( //반환
    // JSX
    // 
    // 
    // 여러요소를 하나의 요소로 꼭 감싸주어야함. 왜? virtualDOM에서 컴포넌트 변화를 감지하기 위해서.

    // div 사용하기 싫으면 fragment 사용. 단, 사용하려면 코드 상단 import 구문에서 컴포넌트 불러와야함.
      // import React, {Fragment} from 'react';

    // JSX 내부에서 자바스크립트 표현식 사용가능. {} 안에 작성.
    // <> 
    //   <h1>{name} 입니다.</h1>
    // </>

    // if문 사용하려면, 1. jsx 밖에서 값 설정 2. {}안에 조건부 연산자(삼항연산자) 사용
    // <> 
    //   {name === '리액트' ? (<h1>리액트 입니다.</h1>) : (<h2>리액트가 아닙니다.</h2>)}
    // </>

    // 특정 조건 만족하면 렌더링, 만족하지 않으면 렌더링 x 
      // 더 짧은 코드로도 가능. &&연산자 사용
    // <> 
    //   {name === '리액트' ? (<h1>리액트 입니다.</h1>) : null}
    //     {name === '리액트' && (<h1>리액트 입니다.</h1>)}
    // </>

    // undefined일 때, 보여주고 싶은 문구가 있을 경우
    // <> 
    //   {ud || '리액트'}
    // </>

    // 객체를 미리 선언하고 지정
    // <div style={style}>
    //   {name}
    // </div>

    // 객체를 미리 선언하지 않고 직접 지정
    // {{}} 안에 작성
    // <div style={{
    //   backgroundColor: 'black',
    //   color: 'aqua',
    //   fontSize: '48px',
    //   fontWeight: 'bold',
    //   padding: 16
    // }}>
    //   {name}
    // </div>

    // className 사용하여 클래스 지정
    // <div className='react'>{name}</div>

    // 태그 열고 닫아야 함. 
      // 닫는 태그가 없는 태그도 닫아줘야함.
      // 태그 사이에 내용 안들어갈 경우, 여는태그 끝에 '/' 붙이면 닫는태그 쓸 필요 없음.(self-closing 태그)
    <>
      <div className='react'>{name}</div>
      <input /> 
    </>

    // 주석 다는 법
      // jsx 내부에서 주석을 작성할 때에는 { / * * / } 형식으로 작성해야함.
  );
}
*/

/* 클래스형 컴포넌트 
// 클래스형 컴포넌트의 경우 state기능 및 라이프사이클 기능 사용 가능하며 임의 메서드를 정의할 수 있음
class App extends Component {
  render(){ //클래스형 컴포넌트에서는 render함수가 꼭 있어야하고, 그 안에서 보여주어야할 JSX를 반환해야함
    const name = 'react';
    return( // JSX 반환
      <div className='react'>
        {name}
      </div>
    )
  }
}
*/

/*
const App = () => {
  return(
    <>
      <MyComponent />
      <MyComponent2 />
      <MyComponent3 />
    </>
  )
}
*/

/*
// props
const App = () => {
  return(
    <MyComponent name='react' favoriteNumber={2}>리액트</MyComponent>
  )
}
*/

/*
// state
const App = () => {
  return (
    <Counter />
  )
}
*/

/*
// useState
const App = () => {
  return <Say />
}
*/

// event
const App = () => {
  return <Event />
}


export default App;
