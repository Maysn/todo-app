import React from 'react';
class Donebutton extends React.Component{
    constructor(props){
        super(props);
        this.doneDeal=this.doneDeal.bind(this);

    }

    doneDeal(){
        
    }

    render() {
        return(
            this.props.todolist.map(item => <label>{item}<button type="submit" onClick={this.doneDeal}>Done</button><button type="submit">Undo</button></label>)
        )
    }
}

export default Donebutton;