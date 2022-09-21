import React, {Component} from "react";
import propTypes from 'prop-types';

// class형 component
// render 꼭 써줘야 함. render 안에 있는 리턴 값을 반환.
// props를 this 붙여서 찾아야줘야 함

class ClassComponent extends Component {
    render() {
        return (
            <div>
                {this.props.children}
                <h2> Classcomponent - function </h2>
                <h5> name : { this.props.name} </h5>
                <h5> location : { this.props.location} </h5>
            </div>
        );
    }

    static propTypes = {
        name: propTypes.string
    }
}

// 함수형 component
// props = 보내는 값 ..?

// function ClassComponent (props) {
//     return (
//         <div>
//             {props.children}
//             <h2> Classcomponent - function </h2>
//             <h5> name : { props.name} </h5>
//             <h5> location : { props.location} </h5>
//         </div>
//     )
// }
    
ClassComponent.defaultProps = {
    name: "기본이름",
    location: "기본위치"
}

ClassComponent.propTypes = {
    name: propTypes.string
}

export default ClassComponent;