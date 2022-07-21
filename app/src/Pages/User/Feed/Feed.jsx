import React from "react";
import './feed.scss';

import {useSelector} from 'react-redux'


import Posts from "../../../Components/Posts/Posts";
import CreatePost from "../../../Components/CreatePost/CreatePost";

import SidebarFooter from "../../../Components/SidebarFooter/SidebarFooter";
import Befriend from "../../../Components/Befriend/Befriend";
import GoNewSkill from "../../../Components/GoNewSkill/GoNewSkill";
import StatisticsSidebar from "../../../Components/StatisticsSidebar/StatisticsSidebar";

const Feed = () => {

    const {users} = useSelector((state) => state.user);

    const currentUser = 4;

    return (
        <div className="feed">
            <div className="feed-container">
                <div className="feed-container__leftBlock">
                    {   
                        [...users].filter((elem) => elem.id === currentUser).map((el) => {
                            return  <StatisticsSidebar  key={el.id}
                                                        userId={el.id}
                                                        name={el.name} 
                                                        profession={el.profession}
                                                        cover={el.cover}
                                                        logo={el.logo}
                                                    /> 
                        })
                    }
                    <GoNewSkill/>
                </div>
                <div className="feed-container__content">
                    <div className="feed-content__block">
                        {
                            [...users].filter((elem) => elem.id === currentUser).map((el) => {
                                return  <CreatePost     key={el.id}
                                                        userId={el.id}
                                                        logo={el.logo}
                                                        />
                            })
                        }
                    </div>
                    <div className="feed-content__block">
                        <Posts />
                    </div>
                </div>
                <div className="feed-container__rightBlock">
                    <Befriend/>
                    <SidebarFooter/>
                </div>
            </div>
        </div>
    )
}

export default Feed;