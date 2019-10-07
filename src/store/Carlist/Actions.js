export const CHECKED = 'CHECKED';
export const ADD_CAR = 'ADD_CAR';
export const REMOVE_CAR = 'REMOVE_CAR';
export const ENGINE_ON = 'ENGINE_ON';
export const ENGINE_OFF = 'ENGINE_OFF';
export const MOVE_ON = 'MOVE_ON';
export const MOVE_OFF = 'MOVE_OFF';

export const removeCar = id => ({
  type: REMOVE_CAR,
  payload: id,
});

export const checked = () => ({
  type: CHECKED,
});
let id = 1;
export const addcar = car => ({
  type: ADD_CAR,
  payload: car,
  id: id++,
});

export const engineON = id => ({
  type: ENGINE_ON,
  id: id,
  payload: false,
});

export const engineOFF = id => ({
  type: ENGINE_OFF,
  id: id,
  payload: {
    isEngine: true,
    isMove: true,
    isWheels: true,
  },
});

export const moveON = id => ({
  type: MOVE_ON,
  id: id,
  payload: {
    isMove: false,
    isWheels: false,
  },
});

export const moveOFF = id => ({
  type: MOVE_ON,
  id: id,
  payload: {
    isMove: true,
    isWheels: true,
  },
});
