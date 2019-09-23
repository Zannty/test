export const ENGINE_ON = 'ENGINE_ON';
export const ENGINE_OFF = 'ENGINE_OFF';
export const MOVE_ON = 'MOVE_ON';
export const MOVE_OFF = 'MOVE_OFF';

export const engineON = () => ({
  type: ENGINE_ON,
  payload: false,
});

export const engineOFF = () => ({
  type: ENGINE_OFF,
  payload: {
    isEngine: true,
    isMove: true,
    isWheels: true,
  },
});

export const moveON = () => ({
  type: MOVE_ON,
  payload: {
    isMove: false,
    isWheels: false,
  },
});

export const moveOFF = () => ({
  type: MOVE_ON,
  payload: {
    isMove: true,
    isWheels: true,
  },
});
