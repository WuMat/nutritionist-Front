import { AdminTypes } from "../action/action";

export const add_prepare = () => {
  return {
    type: AdminTypes.ADD_PREPARE
  };
};

export const remove_prepare = (id: string) => {
  return {
    id: id,
    type: AdminTypes.REMOVE_PREPARE
  };
};

export const change_prepare = (id: string, val: string) => {
  return {
    type: AdminTypes.CHANGE_PREPARE,
    id: id,
    val: val
  };
};

export const clear_prepare = () => {
  return {
    type: AdminTypes.CLEAR_FORM_RECIPE_PREPARE
  };
};
