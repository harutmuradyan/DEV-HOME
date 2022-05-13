import React from "react";
import './notifications.scss';

import NotifikationContent from "./NotificationContent/NotificationContent";
import NotifikationSertings from "./NotifikationSertings/NotificationSertings";
import NotifikationSidebar from "./NotifikationSidebar/NotifikationSidebar";

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
                <NotifikationSidebar/>
            </div>
        </div>
    )
}

export default Notifications;