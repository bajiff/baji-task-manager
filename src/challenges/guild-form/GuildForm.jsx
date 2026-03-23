import { Component } from 'react';

export default class GuildForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
    this.onInputEventHandler = this.onInputEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  };
  onSubmitEventHandler(e){
    e.preventDefault();
  };
  onInputEventHandler(e){
    if (e.target.value.length <= 15) {
      this.setState({
        username : e.target.value
      });
    };
  };
  render() {
    return (
      <form onSubmit={this.onSubmitEventHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" value={this.state.username} onChange={this.onInputEventHandler} required autoFocus />
        <button>Submit</button>
        <br />
        {this.state.username.length < 15 ? <span>Sisa {15 - this.state.username.length} Karakter</span> : ''}
      </form>
    );
  };
};
