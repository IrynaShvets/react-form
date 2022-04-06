import { useState } from 'react';

function Form({ onSubmitChange }) {
  const [name, setName] = useState('');
  const [tag, setTag] = useState('');
  const [experience, setExperience] = useState('junior');
  const [licence, setLicence] = useState(false);

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'tag':
        setTag(value);
        break;
      case 'experience':
        setExperience(value);
        break;

      default:
        break;
    }
  };

  const handleLicenceChange = event => {
    setLicence(event.currentTarget.checked);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmitChange({ name, tag, experience });

    reset();
  };

  const reset = () => {
    setName('');
    setTag('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ім'я
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <label>
        Прізвище
        <input type="text" name="tag" value={tag} onChange={handleChange} />
      </label>

      <p>Твій рівень: </p>
      <label>
        <input
          type="radio"
          name="experience"
          onChange={handleChange}
          value="junior"
          checked={experience === 'junior'}
        />
        Junior
      </label>
      <label>
        <input
          type="radio"
          name="experience"
          onChange={handleChange}
          value="middle"
          checked={experience === 'middle'}
        />
        Middle
      </label>
      <label>
        <input
          type="radio"
          name="experience"
          onChange={handleChange}
          value="senior"
          checked={experience === 'senior'}
        />
        Senior
      </label>

      <label>
        <input
          type="checkbox"
          name="licence"
          checked={licence}
          onChange={handleLicenceChange}
        />
        Згідний з умовами
      </label>

      <button type="submit" disabled={!licence}>
        Відправити
      </button>
    </form>
  );
}

export default Form;

//class
/* 
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
 */
