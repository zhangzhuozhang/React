import React, { Component } from 'react'

export default class Todoinput extends Component {
    constructor(){
        super()
        this.state=({
            value:''
        })
    }

    handleinput=(e)=>{
       if(e.keyCode===13){
           this.props.additem(this.state.value);
       }
   }
   handlechange=(e)=>{
       var getvalue=e.target.value;
       this.setState({
           value:getvalue
       })
   }
    render() {
        return (
            <div style={{marginTop:20}}>
              <span style={{marginRight:20,fontSize:20}}>todoList</span>
              <input onKeyDown={(e)=>this.handleinput(e)} onChange={this.handlechange}></input>
            </div>
        )
    }
}
