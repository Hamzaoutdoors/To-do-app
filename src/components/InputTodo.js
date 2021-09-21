/* eslint-disable no-alert */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { addTodoProps } = this.props;
    e.preventDefault();
    if (this.state.title.trim()) {
      addTodoProps(this.state.title);
      this.setState({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input type="text" placeholder="Add Todo..." value={title} onChange={this.onChange} name="title" className="input-text" />
        <button type="button" className="input-submit">Submit</button>
      </form>
    );
  }
}
export default InputTodo;

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};
