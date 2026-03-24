import React from 'react';
import TaskItem from './TaskItem';
const TaskList = ({ taskList }) => {
  return (
    <section>
      <h2>Misi</h2>
      {taskList?.length > 0 ? (
        <ul>
          {taskList.map((task) => {
            return (
              <TaskItem key={task.id} task={task} />
            );
          })}
        </ul>
      ) : (<p>Tidak ada misi aktif saat ini</p>)}
    </section>
  );
};
export default TaskList;