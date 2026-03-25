import React from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        {
          id:1,
          title:'Kalahkan Slime',
          body: 'Temukan Slime di hutan timur',
          isCompleted: false
        },
        {
          id:2,
          title:'Kalahkan Golem',
          body: 'Golem ada di deket pohon sawit',
          isCompleted: false
        },
        {
          id:3,
          title:'Kalahkan pria solo',
          body: 'Perkuat skill dan kalahkan pria solo yang ada di Partai PSI',
          isCompleted: false
        },
        {
          id:4,
          title:'Gulingkan Rezim Sawitman',
          body: 'Upgrade skill coding dan kirimkan file ransomeware',
          isCompleted: false
        },
      ],
      searchKeyword: ''
    };
    this.onAddTaskHandler = this.onAddTaskHandler.bind(this);
    this.onDeleteTaskHandler = this.onDeleteTaskHandler.bind(this);
    this.onToggleTaskHandler = this.onToggleTaskHandler.bind(this);
    this.onSearchKeywordHandler = this.onSearchKeywordHandler.bind(this);
  };
  onAddTaskHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        tasks: [
          ...prevState.tasks,
          {
            id: +new Date(),
            title: title,
            body: body,
            isCompleted: false
          }
        ]
      };
    });
  }

  onDeleteTaskHandler(id) {
    this.setState((prevState) => {
      const remainingTask = prevState.tasks.filter((task) => task.id !== id);
      return {
        tasks: remainingTask
      };
    });
  }

  onToggleTaskHandler(id) {
    this.setState((prevState) => {
      const updatedState = prevState.tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        };
        return task;
      });
      return { tasks: updatedState };
    });
  }
  onSearchKeywordHandler(e) {
    this.setState({
      searchKeyword: e.target.value
    });
  }

  render() {
    const filteredTask = this.state.tasks.filter((task) => {
      return task.title.toLowerCase().includes(this.state.searchKeyword.toLowerCase());
    });
    const activeTask = filteredTask.filter((task) => task.isCompleted === false);
    const completedTask = filteredTask.filter((task) => task.isCompleted === true);
    return (
      <section>
        <h1>Aplikasi Manajemen Misi</h1>
        <p>Total Misi: {this.state.tasks.length}</p>
        <input type="text" name="searchKeyword" id="searchKeyword" value={this.state.searchKeyword} onChange={this.onSearchKeywordHandler} />
        <h2>Daftar Misi</h2>
        <br />
        <br />
        <h3>Misi Belum Terselesaikan YOWW</h3>
        <TaskList taskList={activeTask} onDelete={this.onDeleteTaskHandler} onToggle={this.onToggleTaskHandler} />

        <br />
        <br />
        <h3>Misi Terselesaikan YOWW</h3>
        <TaskList taskList={completedTask} onDelete={this.onDeleteTaskHandler} onToggle={this.onToggleTaskHandler} />
        <br />
        <TaskInput addTask={this.onAddTaskHandler} />
      </section>
    );
  };
};