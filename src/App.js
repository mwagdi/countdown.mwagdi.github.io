import React, {Component} from 'react';
import Clock from './Clock';
import './App.css';
import Foundation,{Row,Column} from 'react-foundation';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            deadline: 'December 25, 2017',
            newDeadline: ''
        }
    }
    changeDeadline(){
        this.setState({deadline: this.state.newDeadline});
    }
    render(){
        return(
            <div className="App">
                <Row className="display">
                    <div></div>
                    <div></div>
                    <div className="App-title">Countdown to {this.state.deadline}</div>
                    <Clock deadline={this.state.deadline}/>
                    <div>
                        <input onChange={event => this.setState({newDeadline: event.target.value})} placeholder="new date"/>
                        <button onClick={() => this.changeDeadline()}>Submit</button>
                    </div>
                </Row>
            </div>
        )
    }
}

export default App;