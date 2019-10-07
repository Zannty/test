import { CHECKED, ADD_CAR, REMOVE_CAR, MOVE_OFF, MOVE_ON, ENGINE_OFF, ENGINE_ON } from './Actions';

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
        carlist: [
          ...state.carlist,
          { name: action.payload, id: action.id, isEngine: true, isMove: true, isWheels: true },
        ],
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
        carlist: state.carlist.map(car => (car.id === action.id ? { ...car, isEngine: action.payload } : car)),
      };
    case ENGINE_OFF:
      return {
        ...state,
        carlist: state.carlist.map(car =>
          car.id === action.id
            ? {
                ...car,
                isEngine: action.payload.isEngine,
                isMove: action.payload.isMove,
                isWheels: action.payload.isWheels,
              }
            : car,
        ),
      };
    case MOVE_ON:
      return {
        ...state,
        carlist: state.carlist.map(car =>
          car.id === action.id
            ? {
                ...car,
                isMove: action.payload.isMove,
                isWheels: action.payload.isWheels,
              }
            : car,
        ),
      };

    case MOVE_OFF:
      return {
        ...state,
        carlist: state.carlist.map(car =>
          car.id === action.id
            ? {
                ...car,
                isMove: action.payload.isMove,
                isWheels: action.payload.isWheels,
              }
            : car,
        ),
      };
  }
  return state;
};
