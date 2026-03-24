import React from 'react';

export default class TaskList extends React.Component {
  render() {
    const { taskList } = this.props;
    return (
      <section>
        <h2>Misi</h2>{taskList.map((task) => {
          return (
            <ul key={task.id}>
              <li>ID: {task.id}</li>
              <br />
              <li>TITLE: {task.title}</li>
              <br />
              <li>DESCRIPTIONS: {task.body}</li>
              <br />
              <li>STATUS: {task.isCompleted ? 'Success' : 'Not Yet'}</li>
            </ul>);
        })}
      </section>
    );
  };
};