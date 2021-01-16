import React from "react";
import "./App.css";
import ListItem from "./ListItems";

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
    this.todoEdit = this.todoEdit.bind(this);
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
    this.setState({ input: "", toDoList: [...this.state.toDoList, newTodo] });
  }
  handleClear() {
    this.setState({
      input: "",
      toDoList: [],
    });
  }
  todoDone(id) {
    const donot = this.state.toDoList.map((item) => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    this.setState({ toDoList: donot });
  }
  todoDelete(id) {
    const filteredTodo = this.state.toDoList.filter((item) => item.id !== id);
    this.setState({ toDoList: filteredTodo });
  }

  todoEdit(text, id) {
    const editedTodo = this.state.toDoList.map((item) => {
      if (item.id === id) {
        return { ...item, theTodo: text };
      }
      return item;
    });
    this.setState({
      toDoList: editedTodo,
    });
  }
  render() {
    return (
      <div className={'parent'}>
        <div className={"bluePart"}>
          <div className={"title"}>
            <h1>To-Do App!</h1>
          </div>
          <div className={"dataEntry"}>
            <input
              value={this.state.input}
              onChange={this.handleChange}
              placeholder="Always plan ahea"
            />
            <button onClick={this.handleSubmit}>Don't hit me!</button>
            <button onClick={this.handleClear}>W.M.D</button>
          </div>
        </div>
        <div className={"grey"}>
          {this.state.toDoList.length > 0 && 
          <div className={"theList"}>
            <h2>Told you not to..Now get to work!</h2>
            {this.state.toDoList.map((item) => (
              <ListItem
                key={item.id}
                item={item}
                todoDone={this.todoDone}
                todoDelete={this.todoDelete}
                todoEdit={this.todoEdit}
              />
            ))}
          </div>}
        </div>
      </div>
    );
  }
}

export default App;
