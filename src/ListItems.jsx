import React from 'react';
import './ListItems.css'


export default class ListItem extends React.Component{
    render(){
        const {item, todoDone, todoDelete, todoEdit} = this.props;
        const list= item.theTodo;
        return(
            <div id="listContainer">
                {item.done? 
                <input  style={{ textDecoration: 'line-through' }} value={list}></input>
                 : <input onChange={(e)=>{todoEdit(e.target.value,item.id)}}  value={list}></input>}
                {(item.theTodo && !item.done) && <button id="dnBtn" onClick={() => todoDone(item.id)} >Done</button>}
                {(item.theTodo && item.done) && <button id="dnBtn" onClick={() => todoDone(item.id)}>Undo</button>}
                {item.theTodo && <button id="dltBtn" onClick={() => todoDelete(item.id)}>X</button>}
                </div>
            
        )
    }
}