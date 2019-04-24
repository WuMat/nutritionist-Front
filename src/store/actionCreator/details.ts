import { AdminTypes } from "../action/action";

export const change_input = (name: string, val: string) => {
  return {
    type: AdminTypes.CHANGE_INPUTS,
    name: name,
    val: val
  };
};
