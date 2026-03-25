import React from 'react';

const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <li>
      <br />
      <h2>Title: {task.title}</h2>
      <p>Description: {task.body}</p>
      <p>Status: {task.isCompleted ? 'Success' : 'Not Yet' }</p>
      <button onClick={() => onToggle(task.id)}>{task.isCompleted ? 'Batalkan misi' : 'Selesaikan Misi'}</button>
      <br />
      <button onClick={() => onDelete(task.id)}>Hapus misi</button>
      <br />
    </li>
  );
};

export default TaskItem;