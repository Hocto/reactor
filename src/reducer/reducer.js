import actionTypes from "../action/actionTypes";
import { increase, decrease } from "../action/action";
const initialState = {
  counter: 0
};

export const cal_counter = (state = initialState, action) => {
  switch (action.type) {
    case "INC_COUNTER":
      return {
        ...this.state,
        state: {
          counter: state.counter + 1
        }
      };
    case "DEC_COUNTER":
      return {
        ...this.state,
        state: {
          counter: state.counter - 1
        }
      };
  }
};
