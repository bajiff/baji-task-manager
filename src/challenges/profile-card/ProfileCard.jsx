// ? ProfileCard.jsx
import React from 'react';

export default class ProfileCard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
    };
  };
  render() {
    return (
      <section>
        <h2>{this.props.name}</h2>
        <p>{this.props.role}</p>
      </section>
    );
  }
};