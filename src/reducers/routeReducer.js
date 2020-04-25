const initState = {
  posts: [
    {
      id: 1,
      titre: "Premier article!",
      body: "C'est qui le cochon?",
    },
    {
      id: 2,
      titre: "Deuxieme article!",
      body: "C'est qui le cochon?",
    },
    {
      id: 3,
      titre: "Troisieme article!",
      body: "C'est qui le cochon?",
    },
    {
      id: 4,
      titre: "Quatrieme article!",
      body: "C'est qui le cochon?",
    },
  ],
};

const routeReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    return {
      ...state,
      posts: state.posts.filter((p) => p.id !== action.id),
    };
  }
  return state;
};

export default routeReducer;
