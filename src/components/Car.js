import React from 'react';
import Engine from './Engine';
import Move from './Move';
import Wheels from './Wheels';

export default class Car extends React.Component {
  render() {
    return (
      <div>
        {this.props.name}
        <Engine ie={this.props.isEngine} />
        <Move im={this.props.isMove} />
        <Wheels iw={this.props.isWheels} />
        <button onClick={this.props.engineON}>Запустить двигатель</button>
        <button onClick={this.props.engineOFF}>Заглушить двигатель</button>
        <button onClick={this.props.moveON} disabled={this.props.isEngine}>
          Поехать
        </button>
        <button onClick={this.props.moveOFF}>Остановиться</button>
        <button
          onClick={() => {
            this.props.rem(this.props.id);
          }}
        >
          Удалить
        </button>
      </div>
    );
  }
}
