import React from 'react';

class Engine extends React.Component {
  render() {
    let engine = (this.props.ie && <span>Engine: OFF</span>) || <span>Engine: ON</span>;
    return <div>{engine}</div>;
  }
}

export default Engine;
