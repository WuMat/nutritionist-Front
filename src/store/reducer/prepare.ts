import { AdminTypes } from "../action/action";

export interface RecipesState {
  clicker: number;
  clickPrepare: { id: string; val: string }[];
}

const initialState: RecipesState = {
  clicker: 1,
  clickPrepare: [{ id: "0", val: "" }]
};

const reducer = (
  state = initialState,
  action: { type: string; id: string; val: string }
): RecipesState => {
  switch (action.type) {
    case AdminTypes.ADD_PREPARE:
      return {
        ...state,
        clicker: state.clicker + 1,
        clickPrepare: [
          ...state.clickPrepare,
          { id: state.clicker.toString(), val: "" }
        ]
      };
    case AdminTypes.REMOVE_PREPARE:
      return {
        ...state,
        clickPrepare: state.clickPrepare.filter(el => el.id !== action.id)
      };
    case AdminTypes.CHANGE_PREPARE:
      return {
        ...state,
        clickPrepare: state.clickPrepare.map(el =>
          el.id === action.id ? { id: el.id, val: action.val } : el
        )
      };

    default:
      return state;
  }
};

export default reducer;
