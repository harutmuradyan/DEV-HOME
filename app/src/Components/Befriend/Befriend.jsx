import React from "react";
import './befriend.scss';

import {useSelector} from 'react-redux'
import BefriendUser from "./BefriendUser/BefriendUser";

const Befriend = () => {

    const {users} = useSelector((state) => state.user);

    return (
        <div className="befriend">
            <div className="befriend-container">
                <div className="befriend-container__block">
                    <div className="befriend-container__block-title">
                        <h2>Ավելացրեք Ձեր Էջում</h2>
                    </div>
                    <div className="befriend-container__blockContent">
                        {
                            [...users].filter((elem) => elem.id <= 5).map((el,index) => {
                                return  <BefriendUser   key={el.id}
                                                        id={el.id}
                                                        name={el.name} 
                                                        profession={el.profession}
                                                        logo={el.logo}
                                                        workplace={el.workplace}
                                                    />
                            })
                        }
                    </div>
                    <div className="befriend-container__seeMore">
                        <button className="befriend-container__seeMore-btn">
                            Դիտել ավելին
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Befriend;