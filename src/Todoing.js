import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Todoing extends Component {
    
    render() {
        return (
            <div>
                <h2>正在进行<span style={{marginLeft:50,color:'blue'}}>{this.props.todo.length}</span></h2>
                <ul className='listone'>
                    {
                        this.props.todo.map((item,idx)=><ol key={idx}>
                            <input type="checkbox" onClick={()=>{this.props.deltodo(idx)}}/>
                            {item}<button onClick={()=>{this.props.delitem(idx)}}>删除</button></ol>)
                    }
                </ul>
                <h2>已经完成<span style={{marginLeft:50,color:'blue'}}>{this.props.todotodo.length}</span></h2>
                <ul className="listtwo">
                    {
                        this.props.todotodo.map((item,index)=><ol key={index}>
                            <input type="checkbox" defaultChecked onClick={()=>{this.props.deltodos(index)}}/>
                            {item}<button onClick={()=>{this.props.delitems(index)}}>删除</button></ol>)
                    }
                </ul>
            </div>
        )
    }
}
Todoing.propTypes = {

    todo: PropTypes.array,
    todotodo:PropTypes.array

}
