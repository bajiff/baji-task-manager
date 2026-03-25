import React from 'react';
import TaskItem from './TaskItem';
const TaskList = ({ taskList, onDelete, onToggle }) => {
  return (
    <section>
      {taskList?.length > 0 ? (
        <ul>
          {taskList.map((task) => {
            return (
              <TaskItem key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
            );
          })}
        </ul>
      ) : (<p>Tidak ada misi aktif saat ini</p>)}
    </section>
  );
};
export default TaskList;