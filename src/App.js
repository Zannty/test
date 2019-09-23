import React from 'react';
import Carlist from './components/Carlist.js';
import { carlistReducer } from './store/Carlist/Reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
const store = createStore(carlistReducer);
class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <div>
            <Carlist />
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
