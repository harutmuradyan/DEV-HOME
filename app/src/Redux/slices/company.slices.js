import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    data: [
        { 
            "id" : 1,
            "name" : "Software Development Company",
            "shpere" : "Web Developerment",
            "logo" : "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/corporate-company-logo-design-template-2402e0689677112e3b2b6e0f399d7dc3_screen.jpg?ts=1561532453",
            "cover" : "https://www.janbasktraining.com/blog/uploads/images/2019/03/How-to-Be-More-Assertive-at-Work-Pro-tips-2019-info-Banner01.jpg"
        },
        { 
            "id" : 2,
            "name" : "Easy-Tech",
            "shpere" : "Android Developerment",
            "logo" : "https://dcassetcdn.com/design_img/3886078/29377/25245433/tgwgj2wz3d5ah66223s4sd8e0a_thumbnail.png",
            "cover" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzJMuCLvhmAe0zYd9wC-atMZE5J4A8VUZWIbgHFSCawpkXokkh-AX-NDWwFZ-9wzEOjg&usqp=CAU"
        },
        { 
            "id" : 3,
            "name" : "adesso - IT & Business Consultancy",
            "shpere" : "Soft Developerment",
            "logo" : "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/corporate-company-logo-design-template-2402e0689677112e3b2b6e0f399d7dc3_screen.jpg?ts=1561532453",
            "cover" : "https://cdn-images.zety.com/pages/how_to_address_a_cover_letter_uk_2.jpg?w=1950&h=500&fit=crop&auto=compress"
        },
        { 
            "id" : 4,
            "name" : "Easy-Tech",
            "shpere" : "Android Developerment",
            "logo" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSVczSuYOZ2esa1I6oKCKaeBOp904KJSt-ZoPI23g23JJEXWsiLUcmxqfmy24DqIU5BCE&usqp=CAU",
            "cover" : "https://cdn-images.zety.com/pages/business_cover_letter_example_2.jpg"
        },
        { 
            "id" : 5,
            "name" : "adesso - IT & Business Consultancy",
            "shpere" : "Soft Developerment",
            "logo" : "https://images-platform.99static.com//3I_HR556HO-VTZEhd5joRuXsr_E=/0x0:2001x2001/fit-in/500x500/99designs-contests-attachments/130/130318/attachment_130318132",
            "cover" : "https://www.edarabia.com/wp-content/uploads/2018/12/how-write-perfect-teacher-cover-letter-1.jpg"
        },
        { 
            "id" : 6,
            "name" : "Easy-Tech",
            "shpere" : "Android Developerment",
            "logo" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSVczSuYOZ2esa1I6oKCKaeBOp904KJSt-ZoPI23g23JJEXWsiLUcmxqfmy24DqIU5BCE&usqp=CAU",
            "cover" : "https://cdn-images.zety.com/pages/business_cover_letter_example_2.jpg"
        }
    ]
}

const companySlice = createSlice({
    name: 'CompanySlice',
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

export const { addPlayer} = companySlice.actions;
export default companySlice.reducer;