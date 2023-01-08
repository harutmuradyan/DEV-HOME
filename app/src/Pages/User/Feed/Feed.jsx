import React from "react";
import './feed.scss';
import Posts from "../../../Components/Posts/Posts";
import SidebarFooter from "../../../Components/SidebarFooter/SidebarFooter";
import Befriend from "../../../Components/Befriend/Befriend";
import GoNewSkill from "../../../Components/GoNewSkill/GoNewSkill";
import { useCurrentUser } from "../../../Utils/Hooks/useCurrentUser";

const Feed = () => {
    const {CurrentUserStatisticsSidebar , CurrentUserCreatePost} = useCurrentUser();

    return (
        <div className="feed">
            <div className="feed-container">
                <div className="feed-sidebarLeft">
                    <CurrentUserStatisticsSidebar/>
                    <GoNewSkill/>
                </div>
                <div className="feed-content">
                    <div className="feed-block">
                        <CurrentUserCreatePost/>
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