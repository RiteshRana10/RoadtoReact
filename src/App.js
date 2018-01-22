"use strict"; 

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



const list=[
  {
    title:'soltrick',
    url:'https://facebook.github.io/react/',
    author:'Ritesh singh rana',
    num_comments:3,
    points:4,
    objectID:0,
  },
  {
    title:'trickbay',
    url: 'https://github.com/reactjs/redux',
author: 'soltrick',
num_comments:2,
points:5,
objectID:1,  
  },
];
// ES5 function isSearched(searchTerm) { return function(item) { return !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCa\ se()); } 

//ES6
const isSearched= (searchTerm) => (item) =>
!searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {

  constructor(props)
{
  super(props);
  this.state= {
    list,
    searchTerm: '',
  };
  this.onSearchChange= this.onSearchChange.bind(this);
  this.onDismiss=this.onDismiss.bind(this);
}
onDismiss(id)
{
  const isNotId= item => item.objectID !== id; 
 const updatedList = this.state.list.filter(isNotId);

 this.setState({list:updatedList});
}
onSearchChange(event)
{
this.setState({searchTerm: event.target.value});
}
  render() {
   

    return (
      <div className="App">
     {
     this.state.list.filter(isSearched(this.state.searchTerm)).map(item =>
       <div key={item.objectID}>
       <span>
       <a href={item.url}> {item.title}</a> </span>
       <span>{item.author}</span>
       <span>{item.num_comments}</span>
       <span>{item.points}</span>
<span>
  <button onClick={() => this.onDismiss(item.objectID)} type="button">
  Dismiss
  </button>
  </span>
  <form>
         <input type="text" onChange={this.onSearchChange} />
         </form>
       </div>
    
     )}

      </div>
      
    );
  }
}
//window.onload=()=>varTest(),letTest();
window.onload=()=>constTest();
// {varTest()
// };
// how to use const and let
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}

function constTest(){
  const x=1;
  if(true);{
    const x=2;
    console.log(x);
  }
  console.log(x);
}


const arr =[2,4,6,8];

const map2 = arr.map(x=>x*2);

console.log(map2);

const A_TEST=10;
//A_TEST=5;
console.log(A_TEST);


 console.log('after giving same name to cosntant variable'+A_TEST);

 let B_TEST =10;

 // diffrence in using  == or ===
 if(A_TEST==B_TEST)
 {
   console.log('true');
 }
 if(A_TEST=== B_TEST)
 {
   console.log('this is true');
 }
// Array with constant
 const arr1= [];
 arr1.push('solution','trick');
 console.log(arr1[1]);

 // Array with object
const MY_OBJ={'1':'trickbay'};
MY_OBJ.key='2';
export default App;
