import React from "react";
import './networkNotfications.scss';

import NetworkNotification from "./NetworkNotfication/NetworkNotfication";


const NetworkNotfications = () => {
    return (
        <div className="networkNotfications">
            <NetworkNotification/>
            <NetworkNotification/>
            <NetworkNotification/>
            <NetworkNotification/>
        </div>
    )
}

export default NetworkNotfications;