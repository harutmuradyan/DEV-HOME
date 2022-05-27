import React from "react";
import './searchUniversityItem.scss';

const SearchUniversityItem = () => {
    return (
        <div className="searchUniversityItem">
            <img    src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" 
                    alt=""
                    className="searchUniversityItem-logo"></img>
            <div className="searchUniversityItem-block">
                <h2 className="searchUniversityItem-name">Solo Game Round</h2>
                <p className="searchUniversityItem-direction">WEB UNYVERCITY</p>
                <p className="searchUniversityItem-students">798 Ուղանողներ</p>
            </div>
            <button className="searchUniversityItem-follow">
                ՀԵտևել
            </button>
        </div>
    )
}

export default SearchUniversityItem; 