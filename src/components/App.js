import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
    
     diwaliList : [
        {name : "Kim"},
        {name : "Tim"},
        {name : "Sam"},
        {name : "Hema"},
        {name : "Kim"},
        {name : "Kim"},
        {name : "Kim"},
        {name : "Kim"},
        {name : "Kim"},
        {name : "Kim"},
     ]
    }}
     render() {
       const relativeList = this.state.diwaliList.map((data, index)=>{
        return <li key={`relativeListItem${index}`}>{data.name}</li>
        
       })
       

        return(
            <div id="main">
             <ol key={"diwaliList"}>{relativeList}</ol> 
            </div>
        )
    }
}


export default App;
