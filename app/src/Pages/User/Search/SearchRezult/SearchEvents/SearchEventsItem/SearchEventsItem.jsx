import React from "react";
import './searchEventsItem.scss';

const SearchEventsItem = () => {
    return (
        <div className="searchEventsItem">
            <img    src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" 
                    alt=""
                    className="searchEventsItem-logo"></img>
            <div className="searchEventsItem-block">
                <h2 className="searchEventsItem-name">Solo Game Round and Professions</h2>
                <p className="searchEventsItem-data">Վաղը 20.30</p>
                <p className="searchEventsItem-addres">Արամ խաչատյան փ․ 55շ</p>
                <p className="searchEventsItem-desc">Ավելին իմանալու համար զանգահարել տվյալ հեռախոսահամարով</p>
                <p className="searchEventsItem-follower">Գնալու են (55)</p>
            </div>
            <button className="searchEventsItem-follow">
                ՀԵտևել
            </button>
        </div>
    )
}

export default SearchEventsItem; 