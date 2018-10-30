import React from 'react';
import '../style/Button.css'

class Button extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
        // this.increment = this.increment.bind(this);
        // this.decrement = this.decrement.bind(this);
    }
    
    //  旧的写法
    // increment(){
    //     this.setState({count:this.state.count+1})
    // }

    // decrement(){
    //     this.setState({count:this.state.count-1})
    // }

    //优化后代码
    increment  = () => {
        this.setState({count:this.state.count+1})
    }

    decrement = () => {
        this.setState({count:this.state.count-1})
    }

    render(){
        return (
            <div className="box">
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <span>当前点击次数</span>
                <span>{this.state.count}</span>
            </div>
        )
    }
}

export default Button;