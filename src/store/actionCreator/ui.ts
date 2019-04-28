import { AdminTypes } from "../action/action";

export const open = () => {
  return {
    type: AdminTypes.HAM_MENU
  };
};

export const close = () => {
  return {
    type: AdminTypes.CLOSE_HAM
  };
};
