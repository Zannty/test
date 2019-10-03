import { CHECKED, ADD_CAR, REMOVE_CAR, MOVE_OFF, MOVE_ON, ENGINE_OFF, ENGINE_ON, CLEAR } from './Actions';

const defaultState = {
  check: true,
  carlist: [],
};

export const carlistReducer = (state = defaultState, action) => {
  console.log(state);
  // eslint-disable-next-line default-case
  switch (action.type) {
    case CLEAR:
      return {
        ...state,
        carlist: state.carlist.filter(car => car.id !== undefined),
      };
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
        carlist: state.carlist.filter(car => car.id !== action.payload),
      };
    case ENGINE_ON:
      return {
        ...state,
        carlist: [...state.carlist, (state.carlist.find(car => car.id === action.id).isEngine = action.payload)],
      };
    case ENGINE_OFF:
      return {
        ...state,
        carlist: [
          ...state.carlist,
          (state.carlist.find(car => car.id === action.id).isEngine = action.payload.isEngine),
          (state.carlist.find(car => car.id === action.id).isMove = action.payload.isMove),
          (state.carlist.find(car => car.id === action.id).isWheels = action.payload.isWheels),
        ],
      };
    case MOVE_ON:
      return {
        ...state,
        carlist: [
          ...state.carlist,
          (state.carlist.find(car => car.id === action.id).isMove = action.payload.isMove),
          (state.carlist.find(car => car.id === action.id).isWheels = action.payload.isWheels),
        ],
      };

    case MOVE_OFF:
      return {
        ...state,
        carlist: [
          ...state.carlist,
          (state.carlist.find(car => car.id === action.id).isMove = action.payload.isMove),
          (state.carlist.find(car => car.id === action.id).isWheels = action.payload.isWheels),
        ],
      };
  }
  return state;
};
