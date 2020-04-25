const initState = {
    posts: [
        {
            id: "1",
            titre: "Premier article!",
            body: "C'est qui le cochon?",
        },
        {
            id: "2",
            titre: "Deuxieme article!",
            body: "C'est qui le cochon?",
        }, {
            id: "3",
            titre: "Troisieme article!",
            body: "C'est qui le cochon?",
        }, {
            id: "4",
            titre: "Quatrieme article!",
            body: "C'est qui le cochon?",
        }
    ]
}

const routeReducer = (state = initState, action) => {
    if (action.post === "DELETE_POST") {
        console.log(state.posts.length);
        let newPost = state.posts.filter(post => {
            return action.id !== post.id
        });
        console.log(newPost.length);
        return {
            ...state,
            posts: newPost
        }
    }
    return state;
}


export default routeReducer;