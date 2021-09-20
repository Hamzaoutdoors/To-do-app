/* eslint-disable react/prop-types */

import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const { todo } = props;
  const { title } = todo;
  return (
    <>
      <li>{title}</li>
    </>
  );
};

export default TodoItem;

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
};
