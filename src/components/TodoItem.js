/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const { todo, handleChangeProps, deleteTodoProps } = props;
  const { title, completed, id } = todo;
  return (
    <>
      <li>
        <button type="button" onClick={() => deleteTodoProps(id)}>Delete</button>
        <input type="checkbox" checked={completed} onChange={() => handleChangeProps(id)} />
        {' '}
        {title}
      </li>
    </>
  );
};

export default TodoItem;

TodoItem.propTypes = {
  deleteTodoProps: PropTypes.func.isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
};
