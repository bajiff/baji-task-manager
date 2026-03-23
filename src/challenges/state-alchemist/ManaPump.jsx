import React from 'react';

export default class ManaPump extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mana: 0
    };
    this.onIcreaseMana = this.onIcreaseMana.bind(this);
    this.onDecreaseMana = this.onDecreaseMana.bind(this);
    this.onReset = this.onReset.bind(this);
  };

  onIcreaseMana(){
    this.setState((prevState)=> {
      return {
        mana: prevState.mana + 1
      };
    });
  };

  onDecreaseMana(){
    this.setState((prevState)=> {
      return {
        mana: prevState.mana - 1
      };
    });
  };

  onReset() {
    this.setState({
      mana: 0
    });
  };
  render() {
    return (
      <section>
        <p>Mana: {this.state.mana}</p>
        <button onClick={this.onIcreaseMana}>Increase Mana</button>
        <br />
        <button onClick={this.onDecreaseMana}>Decrease Mana</button>
        <br />
        <button onClick={this.onReset}>Reset</button>
        <br />
        {this.state.mana >= 10 ? <span>WARNING: Mana Overload!</span> : ''}
      </section>
    );
  };
};