import { AdminTypes } from "../action/action";
import Admin from "../../pages/Admin/Admin";

interface RecipesState {
  clicker: number;
  ingredients: {
    id: string;
    val: string;
    ingredients: { id: string; ingredient: string }[];
  }[];
}

const initialState: RecipesState = {
  clicker: 2,
  ingredients: [
    {
      id: "0",
      val: "",
      ingredients: [{ id: "1", ingredient: "" }]
    }
  ]
};

const reducer = (
  state = initialState,
  action: { type: string; id: string; val: string; child: any }
): RecipesState => {
  switch (action.type) {
    case AdminTypes.ADD_INGREDIENT_NAME:
      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          {
            id: state.clicker.toString(),
            val: "",
            ingredients: [{ id: state.clicker.toString(), ingredient: "" }]
          }
        ],
        clicker: state.clicker + 2
      };

    case AdminTypes.REMOVE_INGREDIENT_NAME:
      return {
        ...state,
        ingredients: state.ingredients.filter(el => el.id !== action.id)
      };

    case AdminTypes.CHANGE_INGREDIENT_NAME:
      const newValue = state.ingredients.map(el =>
        el.id === action.id
          ? {
              id: action.id,
              val: action.val,
              ingredients: action.child.ingredients
            }
          : el
      );
      return {
        ...state,
        ingredients: newValue
      };

    case AdminTypes.INGREDIENT_VALUE:
      const ing = state.ingredients.map(el => [
        {
          id: el.id,
          val: el.val,
          ingredients: el.ingredients.map(el =>
            el.id === action.id ? { id: action.id, ingredient: action.val } : el
          )
        }
      ]);
      return {
        ...state,
        ingredients: ing.flat()
      };

    case AdminTypes.ADD_INGREDIENT:
      const addingredient = state.ingredients.map(el =>
        el.id === action.id
          ? {
              id: el.id,
              val: el.val,
              ingredients: [
                ...el.ingredients,
                { id: state.clicker.toString(), ingredient: "" }
              ]
            }
          : el
      );
      return {
        ...state,
        clicker: state.clicker + 1,
        ingredients: addingredient
      };

    case AdminTypes.REMOVE_INGREDIENT:
      const deleteIngredient = state.ingredients.map(el => [
        {
          id: el.id,
          val: el.val,
          ingredients: el.ingredients.filter(el => el.id !== action.id)
        }
      ]);
      console.log(deleteIngredient);
      return {
        ...state,
        ingredients: deleteIngredient.flat()
      };
    default:
      return state;
  }
};

export default reducer;
