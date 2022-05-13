import React from "react";
import './background.scss';
import GoPremium from "./GoPremium/GoPremium";

const Background = () => {
    return (
        <div className="background">
            <div className="background-container">
                <div className="background-user">
                    <div className="background-user__block">
                        <img    className="background-user__block-logo" 
                                src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" 
                                alt=""></img>
                    </div>
                    <h2 className="background-user__name">Խաչիկ Բալասանյան</h2>
                    <p className="background-user__profession">React Developer | C# DEV</p>
                </div>
                <div className="background-statistics">
                    <div className="background-statistics__block">
                        <p>Էջի դիտում</p>
                        <p>0</p>
                    </div>
                    <div className="background-statistics__block">
                        <p>Էջի դիտումների քանակ</p>
                        <p>0</p>
                    </div>
                </div>
                <GoPremium/>
            </div>
        </div>
    )
}

export default Background;