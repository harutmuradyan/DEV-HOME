import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    lessons:[
        {
            "groupId" : 1,
            "groupName" : "React and Redux lessons",
            "teacherName" : "Jon Soon",
            "teacherId" : 1,
            "lessonsGroup" : [
                { 
                    "id" : 1,
                    "like" : 33,
                    "video": null, 
                    "title" : "React and Redux Lessons 1",
                    "desc": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                    "cover" : "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/131326449/original/999d354d18243fd157383de41022ffcd528389e8/frontend-web-development-with-react.jpg"
                },
                { 
                    "id" : 2,
                    "like" : 50,
                    "video": null,
                    "title" : "React and Redux Lessons 2", 
                    "desc": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                    "cover" : "https://brainstation-23.com/wp-content/uploads/2019/07/React-for-Web-Development.png"
                },
                { 
                    "id" : 3,
                    "like" :5,
                    "video": null, 
                    "title" : "React and Redux Lessons 3",
                    "desc": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                    "cover" : "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/218006739/original/66e21ef99c3faeb3277bf177595cf0a1c2c0f80e/be-front-end-web-developer-in-react-js.jpg"
                },
                { 
                    "id" : 4,
                    "like" :50,
                    "video": null, 
                    "title" : "React and Redux Lessons 4",
                    "desc": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                    "cover" : "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/149475581/original/cff3502d406f35548d3c107224317ead192555b2/responsive-reactjs-web-app-firebase-nodejs-apollo-graphql-website-development.png"
                },
                { 
                    "id" : 5,
                    "like" :88,
                    "video": null, 
                    "title" : "React and Redux Lessons 5",
                    "desc": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                    "cover" : "https://miro.medium.com/max/750/1*P6vM-jYpfT55n3JYNtewJQ.png"
                }
            ]
        },{
            "groupId" : 2,
            "groupName" : "Web Lesosns",
            "teacherName" : "Anna",
            "teacherId" : 1,
            "lessonsGroup" : [
                { 
                    "id" : 1,
                    "like" : 33,
                    "video": null, 
                    "desc": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                    "cover" : "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/954564/COVER-dcbcd112f1d502d97d7f2467c1ce21da.png"
                },
                { 
                    "id" : 2,
                    "like" : 50,
                    "video": null, 
                    "desc": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                    "cover" : "https://advergroup.com/images/Careers/careers-ASP-C-Developer-pexels-pixabay-459653.jpg"
                },
                { 
                    "id" : 3,
                    "like" :5,
                    "video": null, 
                    "desc": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                    "cover" : "https://wpassets.brainstation.io/app/uploads/2021/10/24135334/Web-Dev.jpg"
                },
                { 
                    "id" : 4,
                    "like" :50,
                    "video": null, 
                    "desc": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                    "cover" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHH57ySg6CKxEsUq8oMf4AVkkv1PSDrOwJg&usqp=CAU"
                },
                { 
                    "id" : 5,
                    "like" :88,
                    "video": null, 
                    "desc": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                    "cover" : "https://i0.wp.com/www.currentschoolnews.com/wp-content/uploads/2019/06/Web-Developer.jpg?ssl=1"
                }
            ]
        }  
    ]
}

const lessonSlice = createSlice({
    name: 'lessonSlice',
    initialState,
    reducers: {
        addLesson(state,action){
            state.lessons = [
                ...state.lessons,
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

export const { addlesson } = lessonSlice.actions;
export default lessonSlice.reducer;