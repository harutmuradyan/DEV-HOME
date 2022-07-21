import React from "react";
import './notifications.scss';

import SidebarFooter from "../../../Components/SidebarFooter/SidebarFooter";

const Notifications = () => {
    return (
        <div className="notification">
            <div className="notification-leftBlock">
                <div className="notifikationSertings">
                    <div className="notifikationSertings-container">
                        <h2 className="notifikationSertings-container__title">Ծանուցումներ</h2>
                        <p className="notifikationSertings-container__text">Բոլոր նոր ծանուցումները բացված են</p>
                    </div>
                </div>               
            </div>
            <div className="notification-content">

            </div>
            <div className="notification-rightBlock">
                <SidebarFooter/>
            </div>
        </div>
    )
}

export default Notifications;