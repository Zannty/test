import React from 'react';
import { connect } from 'react-redux';
import { addcar, checked, removeCar, engineON, engineOFF, moveOFF, moveON } from './../store/Carlist/Actions';
const cars = ['mercedes', 'jeep', 'fiat'];
class Carlist extends React.Component {
  render() {
    const option = [1, 2, 3];

    return (
      <div>
        <ul>
          {this.props.carlist.map(car => (
            <li key={car.id}>
              <div> {car.name}</div>
              <div>
                <div> {(car.isEngine && <span>Engine: OFF</span>) || <span>Engine: ON</span>} </div>
                <div> {(car.isMove && <span>Move: OFF</span>) || <span>Move: ON</span>} </div>
                <div> {(car.isWheels && <span>Wheels: OFF</span>) || <span>Wheels: ON</span>} </div>
              </div>
              <button
                onClick={() => {
                  this.props.engineON(car.id);
                }}
              >
                Запустить двигатель
              </button>
              <button
                onClick={() => {
                  this.props.engineOFF(car.id);
                }}
              >
                Заглушить двигатель
              </button>
              <button
                onClick={() => {
                  this.props.moveON(car.id);
                }}
                disabled={car.isEngine}
              >
                Поехать
              </button>
              <button
                onClick={() => {
                  this.props.moveOFF(car.id);
                }}
              >
                Остановиться
              </button>
              <button
                onClick={() => {
                  this.props.removeCar(car.id);
                }}
              >
                Удалить
              </button>
            </li>
          ))}
        </ul>
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
    if (this.x === 1) this.props.addcar(cars[0]);
    else if (this.x === 2) this.props.addcar(cars[1]);
    else if (this.x === 3) this.props.addcar(cars[2]);
    else this.props.addcar(cars[0]);
  };

  change = e => {
    this.x = +e.currentTarget.value;
  };
}

const mapStateToProps = state => {
  return {
    check: state.check,
    carlist: state.carlist,
    carstate: state.carstate,
  };
};

const mapDispatchToProps = dispatch => ({
  addcar: car => dispatch(addcar(car)),
  checked: () => dispatch(checked()),
  removeCar: id => dispatch(removeCar(id)),
  engineON: id => dispatch(engineON(id)),
  engineOFF: id => dispatch(engineOFF(id)),
  moveON: id => dispatch(moveON(id)),
  moveOFF: id => dispatch(moveOFF(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Carlist);
