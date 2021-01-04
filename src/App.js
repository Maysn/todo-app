import React from 'react';
import './App.css';
import ListItem from './list';
// hi intruder
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      toDoList: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setDone = this.setDone.bind(this);
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
    const textArray = this.state.input.split(',');

    const newTodo = textArray.map((text, index) => ({ text, id: this.state.toDoList.length + index, done: false }));
    this.setState({
      toDoList: [...this.state.toDoList, ...newTodo],
    });
  }

  setDone(id) {
    const newList = this.state.toDoList.map((item) => {
      if (item.id === id) {
        return { ...item, done: true };
      }
      return item;
    });
    this.setState({
      toDoList: newList,
    });
  }
  render() {
    return (
      <div>
        <div className={'bluepart'}>
          <h1>To-Do App!</h1>
          <label>What needs to be done?</label>
          <br />
          <textarea value={this.state.input} onChange={this.handleChange} placeholder="Always plan ahea"></textarea>
          <br />
          <button onClick={this.handleSubmit}>Magic button!</button>
        </div>
        <div className={'grey'}>
          {this.state.toDoList.length > 0 && <h2>Good luck getting that done!</h2>}
          <div className="listCont">
            <div className="theList">
              {this.state.toDoList.map((item) => (
                <ListItem key={item.id} item={item} setDone={this.setDone} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
