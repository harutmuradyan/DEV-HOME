import React from "react";
import './notifications.scss';

import NotifikationContent from "./NotificationContent/NotificationContent";
import NotifikationSertings from "./NotifikationSertings/NotificationSertings";
import SidebarFooter from "../../../Components/SidebarFooter/SidebarFooter";

const Notifications = () => {
    return (
        <div className="notification">
            <div className="notification-leftBlock">
                <NotifikationSertings/>                 
            </div>
            <div className="notification-content">
                <NotifikationContent/>
            </div>
            <div className="notification-rightBlock">
                <SidebarFooter/>
            </div>
        </div>
    )
}

export default Notifications;