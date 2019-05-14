import { AdminTypes } from "../action/action";

interface RecipesState {
  title: string;
  time: number | boolean;
  portion: number | boolean;
  category: string;
}

const initialState: RecipesState = {
  title: "",
  time: false,
  portion: false,
  category: ""
};

const reducer = (
  state = initialState,
  action: { type: string; val: any; name: string }
): RecipesState => {
  switch (action.type) {
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
