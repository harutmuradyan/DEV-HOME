import React,{ useState,useCallback } from "react";
import './createComment.scss';

import { useSelector , useDispatch} from "react-redux";

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addComment } from "../../Redux/slices/comment.slices";

const CreateComment = ({commentBar ,postId}) => {

    const {users} = useSelector((state) => state.user);

    const [changeComment,setChangeComment] = useState("");

    const dispatch = useDispatch();

    const currentUser = 4;

    const commentHendler = useCallback( async () => {
        await dispatch( addComment ( {
            id:Math.floor(Math.random() * 3000),
            userId : currentUser,
            postId : postId,
            desc : changeComment
        }))
        
        setChangeComment('')
    },[dispatch, postId, changeComment,currentUser])

    return (
        <div className={commentBar ? "createComment active" : "createComment"}>
            {
                users.filter((u) => u.id === currentUser).map((e) => {
                    return  <img    className="createComment-img" 
                                    key={e.id}
                                    src={e.logo} 
                                    alt=""></img>
                })
            }
            <input  className="createComment-input" 
                    placeholder="Մեկնաբանություն"
                    value={changeComment} 
                    onChange={(e) => {setChangeComment(e.target.value)}}
                    />
            <button className="createComment-btn"
                    onClick={commentHendler}>
                <FontAwesomeIcon    icon={faPaperPlane} 
                                    className="createComment-icon"
                                    />
            </button>
        </div>
    )
}

export default CreateComment