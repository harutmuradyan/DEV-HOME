import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    data: [
        { 
            "id" : 1,
            "name" : "Angelina Goli",
            "profession" : "Actores",
            "logo" : "https://deadline.com/wp-content/uploads/2022/03/Angelina-Jolie-photo-Netflix-Alexei-Hay-e1646407877581.jpeg",
            "cover" : "https://www.janbasktraining.com/blog/uploads/images/2019/03/How-to-Be-More-Assertive-at-Work-Pro-tips-2019-info-Banner01.jpg"
        },
        { 
            "id" : 2,
            "name" : "Bred Pitt",
            "profession" : "Actores",
            "logo" : "https://n1s1.starhit.ru/6f/58/f5/6f58f5de8ef7a8669cef896d4b704f99/444x460_0_92764dc43eeb25ee237acec0c520fd36@480x497_0xac120003_20009305281589455348.jpg",
            "cover" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzJMuCLvhmAe0zYd9wC-atMZE5J4A8VUZWIbgHFSCawpkXokkh-AX-NDWwFZ-9wzEOjg&usqp=CAU"
        },
        { 
            "id" : 3,
            "name" : "Nicol kidman",
            "profession" : "Actores",
            "logo" : "https://icdn.lenta.ru/images/2021/02/26/12/20210226124504184/square_320_b67ee8eb9f0e9e8653f6bc6528bf3f7c.jpg",
            "cover" : "https://cdn-images.zety.com/pages/how_to_address_a_cover_letter_uk_2.jpg?w=1950&h=500&fit=crop&auto=compress"
        },
        { 
            "id" : 4,
            "name" : "Niki minaj",
            "profession" : "Singer",
            "logo" : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nicki-minaj-attends-the-2017-mtv-video-music-awards-at-the-news-photo-1601573344.jpg?crop=0.668xw:1.00xh;0.332xw,0&resize=640:*",
            "cover" : "https://cdn-images.zety.com/pages/business_cover_letter_example_2.jpg"
        },
        { 
            "id" : 5,
            "name" : "Bill gates",
            "profession" : "Developer",
            "logo" : "https://assets.entrepreneur.com/content/1x1/300/20161006135150-BillGatesHeadshotCasual.jpeg",
            "cover" : "https://www.edarabia.com/wp-content/uploads/2018/12/how-write-perfect-teacher-cover-letter-1.jpg"
        },
        { 
            "id" : 6,
            "name" : "Arkadi dumikyan",
            "profession" : "Singer",
            "logo" : "https://yt3.ggpht.com/WewyF42_u145LZFwIHVQKhgdXeIDs_VOg_XzwI_bh3vklsLTHkmaw_6yLlXaLygR6qa3pwV4=s900-c-k-c0x00ffffff-no-rj",
            "cover" : "https://cdn-images.zety.com/pages/business_cover_letter_example_2.jpg"
        }
    ]
}

const userSlice = createSlice({
    name: 'UserSlice',
    initialState,
    reducers: {
        addPlayer(state,action){
            state.data = [
                ...state.data,
                {
                    id: action.payload.id,
                    firstName: action.payload.firstName,
                    lastName : action.payload.lastName,
                    createdAt : action.payload.createdAt,
                    teamName : action.payload.teamName
                }
            ]
        },
    },
})

export const { addPlayer} = userSlice.actions;
export default userSlice.reducer;