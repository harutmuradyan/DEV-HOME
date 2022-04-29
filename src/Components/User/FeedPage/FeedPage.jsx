import React from "react";
import './feedPage.scss';

import Content from "./Content/Content";
import GoNewSkill from "./GoNewSkill/GoNewSkill";
import Sidebar from "./Sidebar/Sidebar";
import SidebarFooter from "./SidebarFooter/SidebarFooter";
import Background from "./Background/Background";
import Chat from "../Chat/Chat";

const FeedPage = () => {
    return (
        <div className="feed">
            <div className="feed-container">
                <div className="feed-container__leftBlock">
                    <Background/>
                    <GoNewSkill/>
                </div>
                <div className="feed-container__content">
                    <Content/>
                </div>
                <div className="feed-container__rightBlock">
                    <Sidebar/>
                    <SidebarFooter/>
                </div>
                <div>
                    <Chat/>
                </div>
            </div>
        </div>
    )
}

export default FeedPage;