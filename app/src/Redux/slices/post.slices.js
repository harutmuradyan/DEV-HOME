import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    posts: [
        { 
            "id" : 1,
            "userId" : 1,
            "companyId" : null,
            "like" : 33,
            "video": null, 
            "desc": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            "cover" : "https://www.janbasktraining.com/blog/uploads/images/2019/03/How-to-Be-More-Assertive-at-Work-Pro-tips-2019-info-Banner01.jpg"
        },
        { 
            "id" : 2,
            "userId" : 2,
            "companyId" : null,
            "like" : 50,
            "video": null, 
            "desc": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            "cover" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPXiokoNR44hzOnjjAHxdvo2O1tNM8Jej6Aw&usqp=CAU"
        },
        { 
            "id" : 3,
            "userId" : 3,
            "companyId" : null,
            "like" :5,
            "video": null, 
            "desc": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            "cover" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJnqnU5teCaph0WTbI42O0sEKCkvx9mA5jBQ&usqp=CAU"
        },
        { 
            "id" : 4,
            "userId" : null,
            "companyId" : 1,
            "like" : 33,
            "video": null, 
            "desc": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            "cover" : "https://www.janbasktraining.com/blog/uploads/images/2019/03/How-to-Be-More-Assertive-at-Work-Pro-tips-2019-info-Banner01.jpg"
        },
        { 
            "id" : 5,
            "userId" : null,
            "companyId" : 2,
            "like" : 33,
            "video": null, 
            "desc": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            "cover" : "https://www.janbasktraining.com/blog/uploads/images/2019/03/How-to-Be-More-Assertive-at-Work-Pro-tips-2019-info-Banner01.jpg"
        },
    ]
}

const postSlice = createSlice({
    name: 'PostSlice',
    initialState,
    reducers: {
        addPost(state,action){
            state.posts = [
                ...state.posts,
                {
                    id: action.payload.id,
                    userId : action.payload.userId,
                    desc : action.payload.desc,
                    cover : action.payload.cover,
                    video : action.payload.video
                }
            ]
        },
    },
})

export const { addPost} = postSlice.actions;
export default postSlice.reducer;