import React from "react";
import './sidebar.scss';

import {useSelector} from 'react-redux'

import CompanyFollow from "./CompanyFollow/CompanyFollow";

const Sidebar = () => {

    const {users} = useSelector((state) => state.user);

    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <div className="sidebar-container__block">
                    <div className="sidebar-container__block-title">
                        <h2>Ավելացրեք Ձեր Էջում</h2>
                    </div>
                    <div className="sidebar-container__blockContent">
                        {
                            users.filter((elem) => elem.id <= 5).map((el,index) => {
                                return  <CompanyFollow  key={el.id}
                                                        name={el.name} 
                                                        profession={el.profession}
                                                        logo={el.logo}
                                                        workplace={el.workplace}
                                                        />
                            })
                        }
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