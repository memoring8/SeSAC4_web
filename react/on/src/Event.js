import React, {Component} from "react";

class Event extends Component {
    // state 사용할 땐 초기값 설정 !
    state = {
        message: ''
    }

    constructor(props){
        super(props);
        this.eventChange = this.eventChange.bind(this);
        this.eventClick = this.eventClick.bind(this);
    }

    eventChange(e) {
        this.setState({
            message: e.target.value
        })
    }

    eventClick(){
        alert(this.state.message);
        this.setState({
            message: ''
        })
    }

    render() {
        return(
            <div>
                <h1>리액트의 이벤트!</h1>

                <input
                    type='text'
                    name="message"
                    placeholder='이곳에 입력해보세요.'
                    value={this.state.message}
                    onChange={
                        (e) => {
                            console.log(e.target.value);
                        }
                    }
                />

                <button onClick={
                    () => {
                        alert(this.state.message);
                        this.setState({
                            message:''
                        })
                    }
                }>클릭</button>
            </div>
        )
    }
}

export default Event;