import { AdminTypes } from "../action/action";

export interface ArticleState {
  title: string;
  mainImg?: any;
  description_short: string;
  paragraf: { description: string }[];
  epik: {
    title: string;
    paragraf: {
      description: string;
      img: { name: any; file: any; src: any };
      list: string[];
    }[];
  }[];
}

const initialState: ArticleState = {
  title: "",
  mainImg: "",
  description_short: "",
  paragraf: [{ description: "" }],
  epik: [
    {
      title: "",
      paragraf: [
        { description: "", img: { name: "", file: null, src: null }, list: [] }
      ]
    }
  ]
};

const INIT = {
  epik: {
    title: "",
    paragraf: [
      { description: "", img: { name: "", file: null, src: null }, list: [] }
    ]
  },
  description: { description: "" },
  paragraf: {
    description: "",
    img: { name: "", file: null, src: null },
    list: []
  }
};

const reducer = (
  state = initialState,
  action: {
    type: string;
    val: any;
    name: string;
    id: number;
    idDeep: number;
    idElement: number;
  }
): ArticleState => {
  switch (action.type) {
    case AdminTypes.CLEAR_FORM_LIFESTYLE:
      return initialState;
    case AdminTypes.ADD_ARTICLE_HEADER:
      return {
        ...state,
        [action.name]: action.val
      };
    case AdminTypes.ADD_ARTICLE_PARAGRAF:
      return {
        ...state,
        paragraf: [...state.paragraf, INIT.description]
      };
    case AdminTypes.DELETE_ARTICLE_PARAGRAF: {
      return {
        ...state,
        paragraf: state.paragraf.filter(
          (val: any, i: number) => i !== action.id
        )
      };
    }
    case AdminTypes.ADD_PARAGRAF_VALUE: {
      return {
        ...state,
        paragraf: state.paragraf.map((el: any, i: number) =>
          i === action.id ? { description: action.val } : el
        )
      };
    }
    case AdminTypes.ADD_SECTION: {
      return {
        ...state,
        epik: [...state.epik, INIT.epik]
      };
    }
    case AdminTypes.ADD_SECTION_TITLE: {
      return {
        ...state,
        epik: state.epik.map((el, i) =>
          i === action.id ? { title: action.val, paragraf: el.paragraf } : el
        )
      };
    }
    case AdminTypes.DELETE_SECTION: {
      return {
        ...state,
        epik: state.epik.filter((el, i) => i !== action.id)
      };
    }
    case AdminTypes.ADD_PARAGRAF_SECTION: {
      return {
        ...state,
        epik: state.epik.map((el, i) =>
          i === action.id
            ? { title: el.title, paragraf: [...el.paragraf, INIT.paragraf] }
            : el
        )
      };
    }
    case AdminTypes.DELETE_PARAGRAF_SECTION: {
      return {
        ...state,
        epik: state.epik.map((el, i) =>
          i === action.id
            ? {
                title: el.title,
                paragraf: el.paragraf.filter((el, i) => i !== action.idDeep)
              }
            : el
        )
      };
    }
    case AdminTypes.ADD_VALUE_SECTION: {
      return {
        ...state,
        epik: state.epik.map((el, i) =>
          i === action.id
            ? {
                title: el.title,
                paragraf: el.paragraf.map((el, i) =>
                  i === action.idDeep
                    ? {
                        description: action.val,
                        img: el.img,
                        list: el.list
                      }
                    : el
                )
              }
            : el
        )
      };
    }
    case AdminTypes.ADD_LIST: {
      return {
        ...state,
        epik: state.epik.map((el, i) =>
          i === action.id
            ? {
                title: el.title,
                paragraf: el.paragraf.map((elDeep, i) =>
                  i === action.idDeep
                    ? {
                        description: elDeep.description,
                        img: elDeep.img,
                        list: [...elDeep.list, ""]
                      }
                    : elDeep
                )
              }
            : el
        )
      };
    }
    case AdminTypes.LIST_VALUE: {
      return {
        ...state,
        epik: state.epik.map((el, i) =>
          i === action.id
            ? {
                title: el.title,
                paragraf: el.paragraf.map((elDeep, i) =>
                  i === action.idDeep
                    ? {
                        description: elDeep.description,
                        img: elDeep.img,
                        list: elDeep.list.map((elList, i) =>
                          i === action.idElement ? action.val : elList
                        )
                      }
                    : elDeep
                )
              }
            : el
        )
      };
    }
    case AdminTypes.DELETE_LIST_ELEMENT: {
      return {
        ...state,
        epik: state.epik.map((el, i) =>
          i === action.id
            ? {
                title: el.title,
                paragraf: el.paragraf.map((elDeep, i) =>
                  i === action.idDeep
                    ? {
                        description: elDeep.description,
                        img: elDeep.img,
                        list: elDeep.list.filter(
                          (el, i) => i !== action.idElement
                        )
                      }
                    : elDeep
                )
              }
            : el
        )
      };
    }
    case AdminTypes.ADD_IMG_SECTION: {
      return {
        ...state,
        epik: state.epik.map((el, i) =>
          i === action.id
            ? {
                title: el.title,
                paragraf: el.paragraf.map((el, i) =>
                  i === action.idDeep
                    ? {
                        description: el.description,
                        list: el.list,
                        img: action.val
                      }
                    : el
                )
              }
            : el
        )
      };
    }
    case AdminTypes.DELETE_IMG_SECTION: {
      return {
        ...state,
        epik: state.epik.map((el, i) =>
          i === action.id
            ? {
                title: el.title,
                paragraf: el.paragraf.map((el, i) =>
                  i === action.idDeep
                    ? {
                        description: el.description,
                        list: el.list,
                        img: INIT.paragraf.img
                      }
                    : el
                )
              }
            : el
        )
      };
    }
    default:
      return state;
  }
};

export default reducer;
