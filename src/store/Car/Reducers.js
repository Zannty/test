import { ENGINE_ON, ENGINE_OFF, MOVE_ON, MOVE_OFF } from './Actions';

export const defaultState = { isEngine: true, isMove: true, isWheels: true };

export const carReducer = (state, action) => {
  switch (action.type) {
    case ENGINE_ON:
      return {
        ...state,
        isEngine: !state.isEngine,
      };
    case ENGINE_OFF:
      return {
        ...state,
        isEngine: action.payload.isEngine,
        isMove: action.payload.isMove,
        isWheels: action.payload.isWheels,
      };
    case MOVE_ON:
      return {
        ...state,
        isMove: action.payload.isMove,
        isWheels: action.payload.isWheels,
      };

    case MOVE_OFF:
      return {
        ...state,
        isMove: action.payload.isMove,
        isWheels: action.payload.isWheels,
      };

    default:
      return state;
  }
};
