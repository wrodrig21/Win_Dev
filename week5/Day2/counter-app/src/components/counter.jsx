import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count: 0,
        imgUrl: "https://picsum.photos/200"

    };
    render() { 
        return (
            
            <div>
                <img src={this.state.imgUrl} alt=""/>
                <span>{this.formatCount()}</span>
                <button>Increment</button>
        </div>
        );
    }
    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;