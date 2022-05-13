import React from "react";
import './login.scss';

const login = () => {
    return (
        <div className="login">
            <div className="login-container">
                <h2 className="login-title">Մուտք համակարգ</h2>
                <form   method="post" 
                        className="login-form">
                    <div className="login-from__group">
                        <label className="login-from__label">Էլ․հասցե կամ Հեռ․`</label>
                        <input  required 
                                className="login-from__input" 
                                placeholder="Էլ հասցե"/>
                    </div>
                    <div className="login-from__group">
                        <label className="login-from__label">Գախնաբառ `</label>
                        <input  required 
                                className="login-from__input" 
                                placeholder="Գախնաբառ"/>
                    </div>
                    <div className="login-from__submit">
                        <button className="login-from__submit-btn">Հաստատել</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default login;