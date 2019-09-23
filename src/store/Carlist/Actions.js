export const CHECKED = 'CHECKED';
export const ADD_CAR = 'ADD_CAR';
export const REMOVE_CAR = 'REMOVE_CAR';

export const removeCar = id => ({
  type: REMOVE_CAR,
  payload: id,
});

export const checked = () => ({
  type: CHECKED,
});

export const addcar = car => ({
  type: ADD_CAR,
  payload: car,
});
