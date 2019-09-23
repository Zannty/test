import React from 'react';
import Car from './Car.js';
import { connect } from 'react-redux';
import { engineON, engineOFF, moveON, moveOFF } from '../store/Car/Actions';

class WrapperCar extends React.Component {
  render() {
    return (
      <div>
        <Car
          name={this.props.name}
          id={this.props.id}
          rem={this.props.rem}
          engineON={this.props.engineON}
          engineOFF={this.props.engineOFF}
          moveON={this.props.moveON}
          moveOFF={this.props.moveOFF}
          isEngine={this.props.isEngine}
          isMove={this.props.isMove}
          isWheels={this.props.isWheels}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isEngine: state.isEngine,
    isMove: state.isMove,
    isWheels: state.isWheels,
  };
};

const mapDispatchToProps = dispatch => ({
  engineON: () => dispatch(engineON()),
  engineOFF: () => dispatch(engineOFF()),
  moveON: () => dispatch(moveON()),
  moveOFF: () => dispatch(moveOFF()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrapperCar);
