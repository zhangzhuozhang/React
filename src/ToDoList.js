import React, { Component } from 'react'
import Todoing from './Todoing';
import Todoinput from './Todoinput';

export default class ToDoList extends Component {
    constructor(){
        super();
        this.state={
            todo:[],
            todotodo:[]
        }
    }

    componentWillMount(){
        var t=localStorage.getItem('todo');
        var tt=localStorage.getItem('todos');
        if(t!==null&&t.length!=0){
            var tone=t.split(",");
            this.setState({
                todo:tone
            })
        }
    
        if(tt!==null&&tt.length!=0){
            var ttone=tt.split(",");
            this.setState({
                todotodo:ttone
            })
        }

    }
    additem=(msg)=>{
        this.setState({
            todo:[...this.state.todo,msg]
        },()=>{
            localStorage.setItem('todo',this.state.todo)
        })
    }

    delitem=(a)=>{
        var todo = [...this.state.todo];
        todo.splice(a,1);
        this.setState(
            {todo:todo},
            ()=>{
                localStorage.setItem('todo',this.state.todo)
            })
    }
    delitems=(b)=>{
        var todotodo = [...this.state.todotodo];
        todotodo.splice(b,1);
        this.setState(
            {todotodo:todotodo}
            ,()=>{
                localStorage.setItem('todo',this.state.todo);
                localStorage.setItem('todos',this.state.todotodo);
            }
        )
    }
    deltodo=(c)=>{
        var p=this.state.todo[c]
        var todo=[...this.state.todo];
        todo.splice(c,1);
        this.setState({
            todo:todo,
            todotodo:[...this.state.todotodo,p]
        }
        ,()=>{
            localStorage.setItem('todo',this.state.todo);
            localStorage.setItem('todos',this.state.todotodo);
        })
        
        
    }
    deltodos=(f)=>{
        var q=this.state.todotodo[f];
        var todotodo=[...this.state.todotodo];
        todotodo.splice(f,1);
        this.setState({
            todotodo:todotodo,
            todo:[...this.state.todo,q]
        },()=>{
            localStorage.setItem('todo',this.state.todo);
            localStorage.setItem('todos',this.state.todotodo);
        })
        
    }

    
    render() {
        return (
            <div>
                <Todoinput additem={this.additem}/>
                <Todoing delitem={this.delitem} todo={this.state.todo} todotodo={this.state.todotodo} 
                delitems={this.delitems} deltodo={this.deltodo} deltodos={this.deltodos}/>
            </div>
        )
    }
}



