import React from 'react';
// class Donebutton extends React.Component{
//     render() {
//         return(
//             <label>
//                 {item}
//                 <button>Done</button>
//                 <button>Undo</button>
//             </label>)
//         )
//     }
// }

// export default Donebutton;
export default class ListItem extends React.Component{
    render(){
        const {item, todoDone, todoDelete} = this.props;
        return(
            <label>
                {item.done? <s>{item.theTodo}</s> : item.theTodo}
                {item.theTodo && <button onClick={() => todoDone(item.id)} >Done</button>}
                {item.theTodo && <button onClick={() => todoDelete(item.id)}>Delete</button>}
            </label>
        )
    }
}