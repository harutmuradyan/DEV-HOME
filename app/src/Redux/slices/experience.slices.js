import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    experiances: [
        { 
            "id" : 1,
            "userId" : 4,
            "companyName" : "Code Academy",
            "startWork" : "06/06/20",
            "endWork" : "06/12/20",
            "profession" : "Web developer",
            "logo" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRWWG5SUKFWNv-UBY-3oNWRATw68kN4M4zvg&usqp=CAU",
        },
        { 
            "id" : 2,
            "userId" : 4,
            "companyName" : "GAN Services",
            "startWork" : "06/01/21",
            "endWork" : "25/12/21",
            "profession" : "senyor Web DEV",
            "logo" : "https://alextass.com/wp-content/uploads/2015/05/the-index-web-mobile-apps-applications-developer-logo-design-by-alex-tass.jpg",
        },{ 
            "id" : 3,
            "userId" : 4,
            "companyName" : "Code Academy",
            "startWork" : "13/02/22",
            "endWork" : "15/07/22",
            "profession" : "Softwar DEV",
            "logo" : "https://www.designevo.com/res/templates/thumb_small/paper-folding-tridimensional-developer.webp",
        },
    ]        
}

const experianceSlice = createSlice({
    name: 'experianceSlice',
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

export const { addPlayer} = experianceSlice.actions;
export default experianceSlice.reducer;