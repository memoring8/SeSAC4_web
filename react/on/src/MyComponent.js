// 클래스형 컴포넌트를 작성할 때는 아래와 같이 import 해줘야함. 그래야 컴포넌트 사용가능.
import React, {Component} from "react";
// propTypes 설정
import PropTypes from 'prop-types'

/*
// 함수형 컴포넌트
// 함수를 파라미터로 전달할 때 유용.
const MyComponent = () => { 
    return(
        <div>
            나의 새롭고 멋진 컴포넌트
        </div>
    )
}
*/

/*
// 클래스형 컴포넌트
class MyComponent extends Component {
    render(){
        return(
            <div>
                나의 새롭고 멋진 컴포넌트
            </div>
        )
    }
}
*/

/*
// 함수형 컴포넌트에서의 props
// 태그 사이의 내용을 보여주는 children
const MyComponent = props => {
    return(
        <div>
            안녕하세요, 제 이름은 {props.name}입니다.
            <br /> children 값은 {props.children}입니다.
        </div>
    )
}
*/

/*
// 위 props 더 편하게 하는 법 01
const MyComponent = props => {
    const {name, children} = props;
    return(
        <div>
            안녕하세요, 제 이름은 {name}입니다.
            <br /> children 값은 {children}입니다.
        </div>
    )
}
*/

/*
// 위 props 더 편하게 하는 법 02
const MyComponent = ({name, children}) => {
    return(
        <div>
            안녕하세요, 제 이름은 {name}입니다.
            <br /> children 값은 {children}입니다.
        </div>
    )
}
*/

/* 클래스형, 함수형 둘 다 사용 가능한 코드

// props값 지정하지 않았을 때, 보여줄 기본값 설정하는 defaultProps
MyComponent.defaultProps = {
    name: '기본이름'
}


// 컴포넌트의 필수 props 지정 또는 props 타입 지정 시 propTypes
MyComponent.propTypes = {
    name: PropTypes.string, //문자열 형태로 전달
    // propTypes를 지정하지 않았을 때, 경고 메세지를 띄워주는 법
    favoriteNumber: PropTypes.number.isRequired
*/




// ---

// 클래스형 컴포넌트에서의 props
// render 함수에서 this.props를 작성하여 사용
class MyComponent extends Component {
    // 위 클래스형, 함수형 둘 다 사용 가능한 코드를 클래스형 컴포넌트는 내부에서도 설정 가능
    static defaultProps = {
        name: '기본이름'
    }

    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    }

    render(){
        const {name, favoriteNumber, children} = this.props;

        return(
            <div>
            안녕하세요, 제 이름은 {name}입니다.
            <br /> children 값은 {children}입니다.
            <br /> 제가 좋아하는 숫자는 {favoriteNumber}입니다.
        </div>
        )
    }
}








export default MyComponent;