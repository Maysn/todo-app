import React from "react";
import './App.css';
import Donebutton from './Donebutton';

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
import React from "react";
import "./App.css";
import ListItem from "./Donebutton";
// import Donebutton from "./Donebutton";
// hi intruder
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      toDoList: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.todoDone = this.todoDone.bind(this);
    this.todoDelete = this.todoDelete.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }
  handleSubmit() {
    if (!this.state.input) {
      return;
    }
    const newTodo = {
      theTodo: this.state.input,
      id: this.state.toDoList.length,
      done: false,
    };
    this.setState({ input:'', toDoList: [...this.state.toDoList, newTodo] });
  }
  handleClear() {
    this.setState({
      input: "",
      toDoList: [],
    });
  }
  todoDone(id){
    const donot = this.state.toDoList.map((item) => {
      if (item.id === id) {
        return {...item, done:!item.done};
      }
        return item;
    })
    this.setState({toDoList: donot})
  }
  todoDelete(id){
    // const dodlt= this.state.toDoList.map(item => {
    //   if (item.id === id) {
    //     return this.state.toDoList.splice(item.id, 1);
    //   }
    //     return item;
    // })
    // this.setState({toDoList: dodlt})
    const filteredTodo = this.state.toDoList.filter(item => item.id !== id)
    this.setState({toDoList: filteredTodo})
  }
  render() {
    return (
      <div>
        <div className={"bluepart"}>
          <h1>To-Do App!</h1>
          <label>What needs to be done?</label>
          <br />
          <textarea
            value={this.state.input}
            onChange={this.handleChange}
            placeholder="Always plan ahea"
          ></textarea>
          <br />
          <button onClick={this.handleSubmit}>Magic button!</button>
          <button onClick={this.handleClear}>Clear</button>
        </div>
        <div className={"grey"}>
          {this.state.toDoList.length > 0 && (
            <h2>Good luck getting that done!</h2>
          )}
          <div className="listCont">
            <div className="theList">
              {this.state.toDoList.map(item => <ListItem key={item.id} item={item} todoDone={this.todoDone} todoDelete={this.todoDelete} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
