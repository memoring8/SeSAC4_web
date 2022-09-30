import React, {Component} from "react";


// 클래스형 컴포넌트에서 state를 사용하는 방법
class Counter extends Component {
    /* state 초기값 설정 방법 01
    // 컴포넌트에 state 설정할 때는 constructor 메서드를 작성하여 설정
    // 클래스형 컴포넌트에서 constructor를 작성할 때는 반드시 super(props)를 호출해줘야 함
    constructor(props){
        super(props);

        this.state = {
            number: 0,
            fixedNumber: 0
        }
    }
    */

    // state 초기값 설정 방법 02
    // 이 방법 사용할 것.
    state = {
        number: 0,
        fixedNumber: 0
    }

    // state
    // 현재 state 조회할 때는 this.state 사용.
    // this.setState : state 값을 바꿀 수 있게 해줌.
    render(){
        const {number, fixedNumber} = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값 : {fixedNumber}</h2>
                <button onClick={()=>{
                    // 현재 state 조회할 때는 this.state 사용.
                    // this.setState : state 값을 바꿀 수 있게 해줌. 
                    // this.setState({number: number + 1})


                    // this.setState 인자로 함수를 넣어줄 경우,
                    this.setState(prevState => {
                        return {
                            number: prevState.number + 1
                        }
                    })
                    // 위 코드와 아래 코드는 완전히 똑같은 기능을 함
                    // 아래 코드는 함수에서 바로 객체를 반환함
                    this.setState(prevState => ({
                        number: prevState.number + 1
                    }))
                }}
                > +1 </button>
            </div>
        )
    }

    // this.setState 인자로 함수를 넣어줄 경우,
    
}

export default  Counter;