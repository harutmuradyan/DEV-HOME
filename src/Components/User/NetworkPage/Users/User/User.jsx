import React from "react";
import './user.scss';

const User = () => {
    return (
        <div className="user">
            <div className="user-block">
                <img    className="user-block__logo" 
                        src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" 
                        alt=""></img>
            </div>
            <h2 className="user-name">Խաչիկ Բալասանյան</h2>
            <p className="user-profession">React Developer | C# DEV</p>
            <div className="user-frends">
                <button className="user-frends__btn">Ընկերանալ</button>
            </div>
        </div>
    )
}

export default User;
