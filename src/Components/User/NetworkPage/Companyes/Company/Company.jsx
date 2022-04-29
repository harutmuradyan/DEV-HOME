import React from "react";
import './company.scss';

const Company = () => {
    return (
        <div className="company">
            <div className="company-block">
                <img className="company-block__logo" src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" alt=""></img>
            </div>
            <h2 className="company-name">Խաչիկ Բալասանյան</h2>
            <p className="company-profession">React Developer | C# DEV</p>
            <div className="company-frends">
                <button className="company-frends__btn">Հետևել</button>
            </div>
        </div>
    )
}

export default Company;
