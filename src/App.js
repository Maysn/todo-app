import React from "react";
import './App.css';
import Donebutton from './Donebutton';
// hi intruder
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      input:'',
      toDoList:[]
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleChange(e){
    this.setState({
      input:e.target.value
    })
  }
  handleSubmit(){
     const itemsArr= this.state.input.split(',');
     this.setState({
       toDoList: itemsArr
     }) 
  }
  render(){

    return(
      <div>
        <div className={"bluepart"}>
          <h1>To-Do App!</h1>
          <label>What needs to be done?</label><br/>
        <textarea
        value={this.state.input}
        onChange={this.handleChange}
        placeholder="Always plan ahea"></textarea>
        <br/>
        <button onClick={this.handleSubmit}>Magic button!</button>
        </div>
        <div className={"grey"}>
          <h2>Good luck getting that done!</h2>
          <div className="listCont">
        <div className="theList">
          <Donebutton todolist={this.state.toDoList}/>
</div>
        </div>
    </div>
      </div>
    )
  }
}

export default App;
