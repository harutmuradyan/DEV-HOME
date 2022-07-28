import {useState,useCallback} from "react";
import {useDispatch} from "react-redux";
import { addPost } from "../../Redux/slices/post.slices";


export function useCreatePost() {
    const [textPostArcticel,setTextPostArcticel] = useState();
    const [filePostPhoto, setFilePostPhoto] = useState();
    const [textPostPhoto , setChangeTextPostPhoto] = useState("");
    const [filePostVideo, setFilePostVideo] = useState();
    const [textPostVideo , setTextPostVideo] = useState("");

    const dispatch = useDispatch();
    const currentUser = 4;

    const stopPropagation = useCallback( async (e) => {await e.stopPropagation()},[])

    const changeTextPostArcticelhandler = useCallback ( async (e) => {
        await   setTextPostArcticel(e.target.value);
    },[setTextPostArcticel])

    const addPostArcticelHandler = useCallback ( async () => {
        await   dispatch(addPost( { 
                    id:Math.floor(Math.random() * 3000),
                    userId:currentUser , 
                    desc:textPostArcticel,
                }))
                setTextPostArcticel('')
    },[currentUser,textPostArcticel,dispatch])

    const changePhotoPosthandler = useCallback ( async (e) => {
        await   setFilePostPhoto(URL.createObjectURL(e.target.files[0]));
    },[])

    const closeFilePostHandler = useCallback ( async () => {
        await   setFilePostPhoto("")
                setFilePostVideo("")
    },[])

    const changeTextPostPhotohandler = useCallback ( async (e) => {
        await   setChangeTextPostPhoto(e.target.value);
    },[])

    const addPostPhotoHandler = useCallback( async () => {
        await   dispatch(addPost( { 
            id:Math.floor(Math.random() * 6000),
            userId:currentUser , 
            desc:textPostPhoto,
            cover: filePostPhoto,
            video : null
        }))
        setChangeTextPostPhoto("")
        setFilePostPhoto(null)
    },[dispatch, textPostPhoto, filePostPhoto])


    const changeVideoPosthandler = useCallback ( async (e) => {
        await   setFilePostVideo(URL.createObjectURL(e.target.files[0]));
    },[])

    const changeTextPostVideohandler = useCallback ( async (e) => {
        await   setTextPostVideo(e.target.value);
    },[])

    const addPostVideoHandler = useCallback( async () => {
        await   dispatch(addPost( { 
            id:Math.floor(Math.random() * 6000),
            userId:currentUser , 
            desc:textPostVideo,
            cover:null,
            video: filePostVideo
        }))
        setTextPostVideo("")
        setFilePostVideo(null)
    },[dispatch, textPostVideo,filePostVideo])

    return {
        textPostArcticel,
        setTextPostArcticel,
        changeTextPostArcticelhandler,
        addPostArcticelHandler,

        stopPropagation,

        addPostPhotoHandler,
        changeTextPostPhotohandler,
        changePhotoPosthandler,
        filePostPhoto,
        textPostPhoto,

        closeFilePostHandler,
        
        addPostVideoHandler,
        filePostVideo,
        changeTextPostVideohandler,
        changeVideoPosthandler,
        textPostVideo,
    }
}