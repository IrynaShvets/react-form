import { useState } from 'react';
import './TodoEditor.scss';

function TodoEditor({ onSubmit }) {
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setMessage(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(message);
    setMessage('');
  };

  return (
    <form className="TodoEditor" onSubmit={handleSubmit}>
      <textarea
        className="TodoEditor__textarea"
        value={message}
        onChange={handleChange}
      ></textarea>
      <button type="submit" className="TodoEditor__button">
        Сохранить
      </button>
    </form>
  );
}

export default TodoEditor;

//class
/* import React, { Component } from 'react';
import './TodoEditor.scss';

class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.message);

    this.setState({ message: '' });
  };

  render() {
    return (
      <form className="TodoEditor" onSubmit={this.handleSubmit}>
        <textarea
          className="TodoEditor__textarea"
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit" className="TodoEditor__button">
          Сохранить
        </button>
      </form>
    );
  }
}

export default TodoEditor;

 */
