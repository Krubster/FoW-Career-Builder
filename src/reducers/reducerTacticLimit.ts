import {
  CALCULATE_TACTIC_LIMIT,
  RESET_TACTIC_LIMIT,
  SET_TACTIC_LIMIT,
  ActionTacticLimit,
} from '../actions/actionTacticLimit';

const initialLimit = 4;

export default (state = initialLimit, action: ActionTacticLimit) => {
  switch (action.type) {
    case CALCULATE_TACTIC_LIMIT:
      return action.payload;
    case RESET_TACTIC_LIMIT:
      return initialLimit;
    case SET_TACTIC_LIMIT:
      return action.payload;
    default:
      return state;
  }
};
