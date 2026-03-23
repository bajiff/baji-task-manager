import React from 'react';

export default class PotionButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hp: 100
    };
    this.onTakeDamage = this.onTakeDamage.bind(this);
  };

  onTakeDamage() {
    this.setState((prevState) => {
      return { hp: prevState.hp - 10 };
    });
  };
  render(){
    return (
      <section>
        <p>Currently HP: {this.state.hp}</p>
        <button onClick={this.onTakeDamage}>-10</button>
      </section>
    );
  };
};