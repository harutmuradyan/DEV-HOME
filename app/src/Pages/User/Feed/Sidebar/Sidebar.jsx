import React from "react";
import './sidebar.scss';

import CompanyFollow from "./CompanyFollow/CompanyFollow";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <div className="sidebar-container__block">
                    <div className="sidebar-container__block-title">
                        <h2>Ավելացրեք Ձեր Էջում</h2>
                    </div>
                    <div className="sidebar-container__blockContent">
                        <CompanyFollow />
                        <CompanyFollow />
                        <CompanyFollow />
                    </div>
                    <div className="sidebar-container__seeMore">
                        <button className="sidebar-container__seeMore-btn">
                            Դիտել ավելին
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;