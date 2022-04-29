import React from "react";
import './companyes.scss';

import Company from "./Company/Company";

const Companyes = () => {
    return (
        <div className="companyes">
            <div className="companyes-header">
                <h2 className="companyes-header__title">
                    Կազմակերպություններ որոնց կարող եք հետևել
                </h2>
                <button className="companyes-header__more">Դիտել ավելին</button>
            </div>
            <div className="companyes-container">
                <Company/>
                <Company/>
                <Company/>
                <Company/>
                <Company/>
                <Company/>
                <Company/>
                <Company/>
            </div>
        </div>
    )
}

export default Companyes;
