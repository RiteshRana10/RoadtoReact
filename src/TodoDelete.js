import React, {Component} from 'react';

// class TodoDelete extends Component
// {
//     constructor()
//     {
//         super();
//     }
//     render(){
//         return(
//             <li>{this.props.todo}<button onClick={this.props.delete}>X</button></li>
//         );
//     }
// }

const TodoDelete = props => {
    return(
        <li>{props.todo}<button onClick={props.delete}>X</button></li>
    );
}
export default TodoDelete;