import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    tag: '',
    experience: 'junior',
    licence: false,
  };

  handleChange = event => {
    console.log(event.currentTarget.name);
    console.log(event.currentTarget.value);

    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleLicenceChange = event => {
    console.log(event.currentTarget.checked);
    this.setState({
      licence: event.currentTarget.checked,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.onSubmitChange(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', tag: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Ім'я
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Прізвище
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
          />
        </label>

        <p>Твій рівень: </p>
        <label>
          <input
            type="radio"
            name="experience"
            onChange={this.handleChange}
            value="junior"
            checked={this.state.experience === 'junior'}
          />
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            onChange={this.handleChange}
            value="middle"
            checked={this.state.experience === 'middle'}
          />
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            onChange={this.handleChange}
            value="senior"
            checked={this.state.experience === 'senior'}
          />
          Senior
        </label>

        <label>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleLicenceChange}
          />
          Згідний з умовами
        </label>

        <button type="submit" disabled={!this.state.licence}>
          Відправити
        </button>
      </form>
    );
  }
}

export default Form;
