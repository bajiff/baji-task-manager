import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <li>
      <br />
      <h2>Title: {task.title}</h2>
      <p>Description: {task.body}</p>
      <p>Status: {task.isCompleted ? 'Success' : 'Not Yet' }</p>
      <button onClick={() => task.isCompleted}>Selesaikan Misi</button>
      <br />
    </li>
  );
};

export default TaskItem;