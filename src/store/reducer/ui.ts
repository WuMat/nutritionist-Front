import { AdminTypes } from "../action/action";

interface RecipesState {
  ham: boolean;
  gallery: boolean;
}

const initialState: RecipesState = {
  ham: false,
  gallery: false
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
    case AdminTypes.PHOTOS_GALLERY: {
      return {
        ...state,
        gallery: !state.gallery
      };
    }
    default:
      return state;
  }
};

export default reducer;
