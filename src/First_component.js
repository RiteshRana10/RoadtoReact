import React, { Component} from 'react';


class First_component extends Component
{
    render(){
        const content="welcome to the road of react"
        const message= props=><div>{props.msg}</div>
        return(
        <div className="container">
        {message({msg: 'welcome to component based app'})}
        {message({msg: 'its powerful way to'})}
        </div>  
        
        );
    
    }
}

export default First_component;