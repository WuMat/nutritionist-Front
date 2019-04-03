interface RecipesState {
  result: { title: string };
}

const initialState: RecipesState = {
  result: {
    title: "helo"
  }
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "add":
      return {
        ...state
      };

    default:
      return state;
  }
};

export default reducer;
