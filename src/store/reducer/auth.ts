import { AdminTypes } from "../action/action";

interface RecipesState {
  isAuth: boolean;
}

const initialState: RecipesState = {
  isAuth: true
};

const reducer = (
  state = initialState,
  action: { type: string }
): RecipesState => {
  switch (action.type) {
    case AdminTypes.AUTH:
      return {
        ...state,
        isAuth: !state.isAuth
      };
    default:
      return state;
  }
};

export default reducer;
