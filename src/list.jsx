import React from 'react';

class ListItem extends React.Component {
  render() {
    const { item, setDone } = this.props;
    return (
      <label>
        {item.done ? 'DONE' : ''}
        {item.text}
        <button onClick={() => setDone(item.id)}>Done</button>
        <button>Undo</button>
      </label>
    );
  }
}

export default ListItem;
