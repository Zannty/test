import React from 'react';

class Wheels extends React.Component {
  render() {
    let wheels = (this.props.iw && <span>Wheels: OFF</span>) || <span>Wheels: ON</span>;
    return <div>{wheels}</div>;
  }
}

export default Wheels;
