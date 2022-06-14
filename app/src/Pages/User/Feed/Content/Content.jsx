import React from "react";
import './content.scss';

import { useSelector } from "react-redux";

import CreatePost from "./CreatePost/CreatePost";
import Posts from "./Posts/Posts";

const Content = () => {

    const {users} = useSelector((state) => state.user)

    return (
        <div className="content">
            <div className="content-container">
                {
                    users.filter((elem) => elem.id === 4).map((el,index) => {
                        return  <CreatePost     key={el.id}
                                                logo={el.logo}
                                                />
                    })
                }
            </div>
            <div className="content-container">
                <Posts />
            </div>
        </div>
    )
}

export default Content;