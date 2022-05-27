import React from "react";
import './searchCompanyesItem.scss';

const SearchCompanyesItem = () => {
    return (
        <div className="searchCompanyesItem">
            <img    src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" 
                    alt=""
                    className="searchCompanyesItem-logo"></img>
            <div className="searchCompanyesItem-block">
                <h2 className="searchCompanyesItem-name">Solo Game Round</h2>
                <p className="searchCompanyesItem-direction">WEB Company</p>
                <p className="searchCompanyesItem-followers">798 հետևորդ</p>
                <p className="searchCompanyesItem-jobs">2 Աշխատատեղ</p>
            </div>
            <button className="searchCompanyesItem-follow">
                ՀԵտևել
            </button>
        </div>
    )
}

export default SearchCompanyesItem; 