import { CHECKED, ADD_CAR, REMOVE_CAR } from './Actions';

const defaultState = {
  check: true,
  carlist: [],
};

export const carlistReducer = (state = defaultState, action) => {
  console.log(state);
  // eslint-disable-next-line default-case
  switch (action.type) {
    case CHECKED:
      return {
        ...state,
        check: !state.check,
      };
    // eslint-disable-next-line no-fallthrough
    case ADD_CAR:
      return {
        ...state,
        carlist: [...state.carlist, action.payload],
      };
    case REMOVE_CAR:
      console.log(action.payload);
      return {
        ...state,
        carlist: state.carlist.filter(car => car.props.id !== action.payload),
      };
  }
  return state;
};
