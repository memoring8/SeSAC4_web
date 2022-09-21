// 리액트 불러와서 사용할 수 있게 해주는 코드
import React from 'react'; 
import ReactDOM from 'react-dom/client';
import App from './App';
import ClassComponent from './ClassComponent';
import Practice from './Practice';

const root = ReactDOM.createRoot(document.getElementById('root'));
// 리액트가 화면을 출력하는 코드
function showConsole(){
  console.log("콘솔 띄우기 성공!");
}
root.render(
  <React.StrictMode>
    {/* 숫자 적으려면 {}로 감싸야 함 */}
    <ClassComponent name={1} location="문래"> 문자 </ClassComponent>
    <App />
    <Practice text="필수 props" valid={showConsole}/>
  </React.StrictMode>
);

