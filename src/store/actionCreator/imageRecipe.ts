import { AdminTypes } from "../action/action";

export const image_save = (name: string, src: any, file: any, id: string) => {
  return {
    type: AdminTypes.RECIPE_IMAGE_ADD,
    src: src,
    name: name,
    file: file,
    id: id
  };
};
