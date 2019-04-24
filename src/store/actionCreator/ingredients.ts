import { AdminTypes } from "../action/action";

export const add_ingredient_name = () => {
  return {
    type: AdminTypes.ADD_INGREDIENT_NAME
  };
};

export const change_ingredient_name = (
  id: string,
  val: string,
  children: any
) => {
  return {
    type: AdminTypes.CHANGE_INGREDIENT_NAME,
    id: id,
    val: val,
    child: children
  };
};

export const remove_ingredient_name = (id: string) => {
  return {
    type: AdminTypes.REMOVE_INGREDIENT_NAME,
    id: id
  };
};

export const ingredient_value = (id: string, val: string) => {
  return {
    type: AdminTypes.INGREDIENT_VALUE,
    id: id,
    val: val
  };
};

export const add_ingredient = (id: string) => {
  return {
    type: AdminTypes.ADD_INGREDIENT,
    id: id
  };
};

export const remove_ingredient = (id: string) => {
  return {
    type: AdminTypes.REMOVE_INGREDIENT,
    id: id
  };
};
