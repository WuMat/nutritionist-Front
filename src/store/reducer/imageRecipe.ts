import { AdminTypes } from "../action/action";

export interface ImageProps {
  img_main: { id: string; src: any; file: any };
  img1: { id: string; src: any; file: any };
  img2: { id: string; src: any; file: any };
  img3: { id: string; src: any; file: any };
  img4: { id: string; src: any; file: any };
}

const initialState: ImageProps = {
  img_main: { id: "", src: null, file: null },
  img1: { id: "", src: null, file: null },
  img2: { id: "", src: null, file: null },
  img3: { id: "", src: null, file: null },
  img4: { id: "", src: null, file: null }
};

const reducer = (
  state = initialState,
  action: { type: string; name: string; src: any; file: any; id: string }
): ImageProps => {
  switch (action.type) {
    case AdminTypes.RECIPE_IMAGE_ADD:
      return {
        ...state,
        [action.name]: { id: action.id, src: action.src, file: action.file }
      };
    default:
      return state;
  }
};

export default reducer;
