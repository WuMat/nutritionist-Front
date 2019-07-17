import { AdminTypes } from "../action/action";

export interface RecipesState {
  title: string;
  time: number | boolean;
  portion: number | boolean;
  category: string;
  description_short: string;
}

const initialState: RecipesState = {
  title: "",
  time: false,
  portion: false,
  category: "Śniadania",
  description_short: ""
};

const reducer = (
  state = initialState,
  action: { type: string; val: any; name: string }
): RecipesState => {
  switch (action.type) {
    case AdminTypes.CLEAR_FORM_RECIPE_DETAIL:
      return initialState;
    case AdminTypes.CHANGE_INPUTS:
      return {
        ...state,
        [action.name]: action.val
      };

    default:
      return state;
  }
};

export default reducer;
