import { AdminTypes } from "../action/action";

interface RecipesState {
  ham: boolean;
}

const initialState: RecipesState = {
  ham: false
};

const reducer = (
  state = initialState,
  action: { type: string }
): RecipesState => {
  switch (action.type) {
    case AdminTypes.HAM_MENU:
      return {
        ...state,
        ham: !state.ham
      };

    case AdminTypes.MOBILE: {
      return {
        ...state,
        ham: true
      };
    }
    case AdminTypes.DESKTOP: {
      return {
        ...state,
        ham: false
      };
    }
    default:
      return state;
  }
};

export default reducer;
