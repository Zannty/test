import React from 'react';
import { connect } from 'react-redux';
import { addcar, checked, removeCar } from './../store/Carlist/Actions';
import ProviderCar from './ProviderCar.js';

class Carlist extends React.Component {
  rem = id => {
    this.props.removeCar(id);
  };

  render() {
    const option = [1, 2, 3];

    return (
      <div>
        <ul>{this.props.carlist}</ul>
        <select onChange={this.change}>
          <option value={option[0]}>mercedes</option>
          <option value={option[1]}>jeep</option>
          <option value={option[2]}>fiat</option>
        </select>
        <br />
        <input type="button" id="button" onClick={this.add} value="Добавить" disabled={this.props.check} />
        <input type="checkbox" id="box" onClick={this.props.checked} />
        <a href="http://google.com/" target="_blank" rel="noopener noreferrer">
          Пользовательское соглашение с правилами сервиса
        </a>
      </div>
    );
  }

  add = () => {
    const optionValue = [
      <ProviderCar name="mercedes" id={Math.random()} rem={this.rem} />,
      <ProviderCar name="jeep" id={Math.random()} rem={this.rem} />,
      <ProviderCar name="fiat" id={Math.random()} rem={this.rem} />,
    ];
    if (this.x === 1) this.props.addcar(optionValue[0]);
    else if (this.x === 2) this.props.addcar(optionValue[1]);
    else if (this.x === 3) this.props.addcar(optionValue[2]);
    else this.props.addcar(optionValue[0]);
  };

  change = e => {
    this.x = +e.currentTarget.value;
  };
}

const mapStateToProps = state => {
  return {
    check: state.check,
    carlist: state.carlist,
  };
};

const mapDispatchToProps = dispatch => ({
  addcar: car => dispatch(addcar(car)),
  checked: () => dispatch(checked()),
  removeCar: id => dispatch(removeCar(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Carlist);
