import React, {Component} from "react";

// 클래스형 컴포넌트
class Practice extends Component {
    render() {
        return (
            <div>
                <h2> {this.props.text} </h2>
                <button onClick={this.props.valid}>콘솔메세지</button>
            </div>
        );
    }
    defaultProps = {
        text: "이건 기본 text props 입니다.",
    }
}

// 함수형 컴포넌트
// function Practice (props) {
//         return (
//             <>
//             <div style={{backgroundColor: "beige", width: '500px', height: '100%', padding: '10%'}}>
//                 <h2 style={{textAlign: 'center', color: 'orange'}}> 이번주 베스트셀러 </h2>
//                 <img src="http://image.kyobobook.co.kr/images/book/xlarge/906/x9791158511906.jpg" style={{width: '500px'}}></img>
//                 <h2 style={{textAlign: 'center'}}>나의 하루는 4시 40분에 시작된다.</h2>
//                 <h3>저자 : {props.n}</h3>
//                 <h3>판매가 : {props.p}</h3>
//                 <h3>구분 : {props.s}</h3>
//             </div>
//             </>
//         )
//     }

//     Practice.defaultProps = {
//         name: "음식",
//     }

    export default Practice;