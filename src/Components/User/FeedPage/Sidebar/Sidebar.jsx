import React from "react";
import CompanyFollow from "./CompanyFollow/CompanyFollow";
import './sidebar.scss';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <div className="sidebar-container__block">
                    <div className="sidebar-container__block-title">
                        <h2>Ավելացրեք Ձեր Էջում</h2>
                    </div>
                    <CompanyFollow />
                    <CompanyFollow />
                    <CompanyFollow />
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