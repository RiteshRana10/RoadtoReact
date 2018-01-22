import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import First_component from './First_component';
import HelloMessage from './HelloMessage';
import Timer from './Timer';
import TodoApp from './TodoApp';
import Increament from './Increament';
import Doing from './Doing';
class Entry extends Component {
    render(){
        return(
        <div>
        <App />
        <First_component />
        <HelloMessage/>
        <Timer />
        <TodoApp/>
        <Increament/>
        <Doing/>
        </div>
    )}
}

export default Entry;