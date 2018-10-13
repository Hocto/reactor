import { INC_COUNTER, DEC_COUNTER } from "./actionTypes";

export const increase = () => ({
  type: INC_COUNTER
});

export const decrease = () => ({
  type: DEC_COUNTER
});
