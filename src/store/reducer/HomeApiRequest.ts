import { AdminTypes } from "../action/action";

interface HomeData {
  home_data: any;
}

const initialState: HomeData = {
  home_data: []
};

const reducer = (
  state = initialState,
  action: { type: string; data: any }
): HomeData => {
  switch (action.type) {
    case AdminTypes.GET_HOME_API:
      return {
        ...state,
        home_data: action.data
      };

    default:
      return state;
  }
};

export default reducer;
