import React from "react";
import {useSelector} from 'react-redux'
import './feed.scss';
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
                <div className="feed-sidebarLeft">
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
                <div className="feed-content">
                    <div className="feed-block">
                        {
                            [...users].filter((elem) => elem.id === currentUser).map((el) => {
                                return  <CreatePost     key={el.id}
                                                        userId={el.id}
                                                        logo={el.logo}
                                                        />
                            })
                        }
                    </div>
                    <div className="feed-block">
                        <Posts />
                    </div>
                </div>
                <div className="feed-sidebarRight">
                    <Befriend/>
                    <SidebarFooter/>
                </div>
            </div>
        </div>
    )
}

export default Feed;