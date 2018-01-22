import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Entry from './Entry';
// import App from './App';
// import First_component from './First_component';
// import HelloMessage from './HelloMessage';
// import Timer from './Timer';
// import TodoApp from './TodoApp';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<Entry />, document.getElementById('root'));
// ReactDOM.render(<First_component />, document.getElementById('root1'));
// ReactDOM.render(<HelloMessage name="Ritesh"/>, document.getElementById('root2'));
// ReactDOM.render(<Timer />, document.getElementById('root3'));
// ReactDOM.render(<TodoApp />, document.getElementById('root4'));
registerServiceWorker();
if(module.hot)
{
   module.hot.accept();
}