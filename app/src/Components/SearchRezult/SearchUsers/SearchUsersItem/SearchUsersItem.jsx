import React from "react";
import './searchUsersItem.scss';

const SearchUsersItem = () => {
    return (
        <div className="searchUsersItem">
            <img    src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" 
                    alt=""
                    className="searchUsersItem-img"></img>
            <div className="searchUsersItem-block">
                <h2 className="searchUsersItem-name">Լիանա Ղազարյան</h2>
                <p className="searchUsersItem-profession">WEB DEVELOPER</p>
                <p className="searchUsersItem-earth">Հայաստան</p>
                <p className="searchUsersItem-followUsers">Ընդհանուր կոնտակտներ</p>
            </div>
            <button className="searchUsersItem-follow">
                ՀԵտևել
            </button>
        </div>
    )
}

export default SearchUsersItem; 