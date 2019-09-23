import React from 'react';
import WrapperCar from './WrapperCar';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { carReducer, defaultState } from './../store/Car/Reducers';

class ProviderCar extends React.Component {
  render() {
    const store = createStore(carReducer, defaultState);
    return (
      <Provider store={store}>
        <div>
          <WrapperCar name={this.props.name} id={this.props.id} rem={this.props.rem} />
        </div>
      </Provider>
    );
  }
}

export default ProviderCar;
