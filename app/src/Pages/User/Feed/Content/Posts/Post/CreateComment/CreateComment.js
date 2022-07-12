import React,{ useState,useCallback } from "react";
import './createComment.scss';

import { useSelector , useDispatch} from "react-redux";

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addPostComment } from "../../../../../../../Redux/slices/postComment.slices";

const CreateComment = ({commentBar ,postId}) => {

    const {users} = useSelector((state) => state.user);

    const [changeComment,setChangeComment] = useState("");

    const dispatch = useDispatch();

    const currentUser = 4;

    const commentHendler = useCallback( async () => {
        await dispatch( addPostComment ( {
            id:Math.floor(Math.random() * 3000),
            userId : currentUser,
            postId : postId,
            desc : changeComment
        }))
        
        setChangeComment('')
    },[changeComment,postId,currentUser])

    return (
        <div className={commentBar ? "post-content__comment active" : "post-content__comment"}>
            {
                users.filter((u) => u.id === currentUser).map((e) => {
                    return  <img    className="post-content__comment-img" 
                                    key={e.id}
                                    src={e.logo} 
                                    alt=""></img>
                })
            }
            <input  className="post-content__comment-input" 
                    placeholder="Մեկնաբանություն"
                    value={changeComment} 
                    onChange={(e) => {setChangeComment(e.target.value)}}
                    />
            <button className="post-content__comment-btn">
                <FontAwesomeIcon    icon={faPaperPlane} 
                                    className="post-content__comment-icon"
                                    onClick={commentHendler}
                                    />
            </button>
        </div>
    )
}

export default CreateComment