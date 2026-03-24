import React from 'react';

export default class TaskInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
    };
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.onAddTitleEventHandler = this.onAddTitleEventHandler.bind(this);
    this.onAddBodyEventHandler = this.onAddBodyEventHandler.bind(this);
  }
  onSubmitEventHandler(e) {
    e.preventDefault();
    this.props.addTask(this.state);
    this.setState({
      title: '',
      body: ''
    });
  }
  onAddTitleEventHandler(e) {
    if (e.target.value.length <= 50) {
      this.setState({
        title: e.target.value
      });
    };
  }
  onAddBodyEventHandler(e) {
    if (e.target.value.length <= 100) {
      this.setState({
        body: e.target.value
      });
    };
  }
  render() {
    return (
      <form action="" onSubmit={this.onSubmitEventHandler}>
        <h2>Tambah Misi</h2>
        <label htmlFor="tambahMisi">Title</label>
        <br />
        <input type="text" id='tambahMisi' name='tambahMisi' value={this.state.title} onChange={this.onAddTitleEventHandler} autoFocus />
        <br />
        {this.state.title.length < 50 ? <span>Sisa { 50 - this.state.title.length } karakter</span> : 'Max'}
        <br />
        <br />
        <label htmlFor="body">Deskripsi</label>
        <br />
        <textarea name="body" id="body" value={this.state.body} onChange={this.onAddBodyEventHandler}>
        </textarea>
        <br />
        {this.state.body.length < 100 ? <span>Sisa { 100 - this.state.body.length } karakter</span> : 'Max'}
        <br />
        <button>Tambah Misi</button>
      </form>
    );
  };
};