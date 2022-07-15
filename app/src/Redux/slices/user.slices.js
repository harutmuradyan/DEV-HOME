import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    users: [
        { 
            "id" : 1,
            "name" : "Angelina Goli",
            "earth" : "USA",
            "city" : "California",
            "profession" : "Actores",
            "teacher" : false,
            "workplace" : "Holivud",
            "logo" : "https://deadline.com/wp-content/uploads/2022/03/Angelina-Jolie-photo-Netflix-Alexei-Hay-e1646407877581.jpeg",
            "cover" : "https://www.janbasktraining.com/blog/uploads/images/2019/03/How-to-Be-More-Assertive-at-Work-Pro-tips-2019-info-Banner01.jpg"
        },
        { 
            "id" : 2,
            "name" : "Bred Pitt",
            "earth" : "USA",
            "city" : "Arkanzas",
            "profession" : "Actores",
            "teacher" : false,
            "workplace" : "Holivud",
            "logo" : "https://n1s1.starhit.ru/6f/58/f5/6f58f5de8ef7a8669cef896d4b704f99/444x460_0_92764dc43eeb25ee237acec0c520fd36@480x497_0xac120003_20009305281589455348.jpg",
            "cover" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzJMuCLvhmAe0zYd9wC-atMZE5J4A8VUZWIbgHFSCawpkXokkh-AX-NDWwFZ-9wzEOjg&usqp=CAU",
            posts: [
                { 
                    "id" : 1,
                    "userId" : 1,
                    "desc" : "is a workplace where you can be in the know about crypto as the crypto world is still new and ever-changing, and there is an endless supply of i nnovative projects and features to keep an eye on.",
                    "postCover" : "https://www.janbasktraining.com/blog/uploads/images/2019/03/How-to-Be-More-Assertive-at-Work-Pro-tips-2019-info-Banner01.jpg"
                },
                { 
                    "id" : 2,
                    "userId" : 2,
                    "desc" : "is a workplace where you can be in the know about crypto as the crypto world is still new and ever-changing, and there is an endless supply of i nnovative projects and features to keep an eye on. an endless supply of i nnovative projects and features to keep an eye on.",
                    "postCover" : "https://cdn-images.zety.com/pages/business_cover_letter_example_2.jpg"
                },
                { 
                    "id" : 3,
                    "userId" : 1,
                    "desc" : "is a workplace where you can be in the know about crypto as the crypto world is still new and ever-changing, and there is an endless supply of i nnovative projects and features to keep an eye on.",
                    "postCover" : "https://www.janbasktraining.com/blog/uploads/images/2019/03/How-to-Be-More-Assertive-at-Work-Pro-tips-2019-info-Banner01.jpg"
                },
                { 
                    "id" : 4,
                    "userId" : 2,
                    "desc" : "is a workplace where you can be in the know about crypto as the crypto world is still new and ever-changing, and there is an endless supply of i nnovative projects and features to keep an eye on. an endless supply of i nnovative projects and features to keep an eye on.",
                    "postCover" : "https://cdn-images.zety.com/pages/business_cover_letter_example_2.jpg"
                }
            ]
        },
        { 
            "id" : 3,
            "name" : "Nicol kidman",
            "earth" : "USA",
            "city" : "New York",
            "profession" : "Actores",
            "teacher" : false,
            "workplace" : "Holivud",
            "logo" : "https://icdn.lenta.ru/images/2021/02/26/12/20210226124504184/square_320_b67ee8eb9f0e9e8653f6bc6528bf3f7c.jpg",
            "cover" : "https://cdn-images.zety.com/pages/how_to_address_a_cover_letter_uk_2.jpg?w=1950&h=500&fit=crop&auto=compress"
        },
        { 
            "id" : 4,
            "name" : "Niki minaj",
            "earth" : "USA",
            "city" : "Arkanzas",
            "profession" : "Singer",
            "teacher" : false,
            "workplace" : "DGS Center",
            "logo" : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nicki-minaj-attends-the-2017-mtv-video-music-awards-at-the-news-photo-1601573344.jpg?crop=0.668xw:1.00xh;0.332xw,0&resize=640:*",
            "cover" : "https://cdn-images.zety.com/pages/business_cover_letter_example_2.jpg"
        },
        { 
            "id" : 5,
            "name" : "Bill gates",
            "earth" : "USA",
            "city" : "Kanzas",
            "profession" : "Developer",
            "teacher" : false,
            "workplace" : "Facebook.com",
            "logo" : "https://assets.entrepreneur.com/content/1x1/300/20161006135150-BillGatesHeadshotCasual.jpeg",
            "cover" : "https://www.edarabia.com/wp-content/uploads/2018/12/how-write-perfect-teacher-cover-letter-1.jpg"
        },
        { 
            "id" : 6,
            "name" : "Arkadi dumikyan",
            "earth" : "Armenia",
            "city" : "Erevan",
            "profession" : "Singer",
            "teacher" : false,
            "workplace" : "Armenian Pub",
            "logo" : "https://yt3.ggpht.com/WewyF42_u145LZFwIHVQKhgdXeIDs_VOg_XzwI_bh3vklsLTHkmaw_6yLlXaLygR6qa3pwV4=s900-c-k-c0x00ffffff-no-rj",
            "cover" : "https://cdn-images.zety.com/pages/business_cover_letter_example_2.jpg"
        },
        { 
            "id" : 7,
            "name" : "Anna Joe",
            "earth" : "Armenia",
            "city" : "Erevan",
            "profession" : "Seo Marketing",
            "teacher" : true,
            "workplace" : "Armenian Pub",
            "logo" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzmPE4ds23YsUNzHmvJu349QemnMZoPW9Lzg&usqp=CAU",
            "cover" : "https://cdn-images.zety.com/pages/business_cover_letter_example_2.jpg"
        },
        { 
            "id" : 8,
            "name" : "Gary Anderson",
            "earth" : "Armenia",
            "city" : "Erevan",
            "profession" : "Android Developer",
            "teacher" : true,
            "workplace" : "Armenian Pub",
            "logo" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvatlV1XCcuZ0wY_o4_EzNOspCKy1DH0_9aQ&usqp=CAU",
            "cover" : "https://cdn-images.zety.com/pages/business_cover_letter_example_2.jpg"
        },
        { 
            "id" : 9,
            "name" : "Jon Soon",
            "earth" : "Armenia",
            "city" : "Erevan",
            "profession" : "Senyor Web Developer",
            "teacher" : true,
            "workplace" : "Armenian Pub",
            "logo" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXg70J8td4HQA6_zLYKYDaFWpSeGMjT-fSng&usqp=CAU",
            "cover" : "https://cdn-images.zety.com/pages/business_cover_letter_example_2.jpg"
        },
        { 
            "id" : 10,
            "name" : "Nice Lucas",
            "earth" : "Armenia",
            "city" : "Erevan",
            "profession" : "Senyor C# DEV",
            "teacher" : true,
            "workplace" : "Armenian Pub",
            "logo" : "https://media.istockphoto.com/photos/headshot-of-cheerful-handsome-man-with-trendy-haircut-and-eyeglasses-picture-id1171169127?k=20&m=1171169127&s=612x612&w=0&h=DxYc1UDQagCiuuaiR1OMRztEsOnWBXwjLPlVqVnn4eY=",
            "cover" : "https://cdn-images.zety.com/pages/business_cover_letter_example_2.jpg"
        }
    ]
}

const userSlice = createSlice({
    name: 'userSlice',
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