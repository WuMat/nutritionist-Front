import { AdminTypes } from "../action/action";
import axios from "../../axios";
import { Dispatch } from "redux";
import _ from "lodash";

export const fetch_home = (data: any) => {
  return {
    type: AdminTypes.GET_HOME_API,
    data: data
  };
};
export const fetch_all_data = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post("/api/mix/getHomView");
      const lifestyle = response.data.lifestyle.map((el: any) => ({
        type: 1,
        ...el
      }));
      const recipe = response.data.recipe.map((el: any) => ({
        type: 2,
        ...el
      }));
      const mix = [...lifestyle, ...recipe];
      dispatch(fetch_home(mix));
    } catch (error) {
      console.log(error);
    }
  };
};
