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
      const lifestyle = response.data.lifestyle;
      const recipe = response.data.recipe;
      const mix = [...lifestyle, ...recipe];
      const sortMix = _.orderBy(mix, ["create"], ["desc"]);
      dispatch(fetch_home(sortMix));
    } catch (error) {
      console.log(error);
    }
  };
};
