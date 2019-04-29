import { AdminTypes } from "../action/action";

export const open = () => {
  return {
    type: AdminTypes.HAM_MENU
  };
};

export const mobile = () => {
  return {
    type: AdminTypes.MOBILE
  };
};

export const desktop = () => {
  return {
    type: AdminTypes.DESKTOP
  };
};
