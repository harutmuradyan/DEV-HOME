import React from "react";
import './companyes.scss';

import {useSelector} from 'react-redux'

import Company from "./Company/Company";

const Companyes = () => {

    const {data} = useSelector((state) => state.company);
    console.log(data) 

    return (
        <div className="companyes">
            <div className="companyes-header">
                <h2 className="companyes-header__title">
                    Կազմակերպություններ որոնց կարող եք հետևել
                </h2>
                <button className="companyes-header__more">Դիտել ավելին</button>
            </div>
            <div className="companyes-container">
                {
                    data.map((el,index) => {
                        return    <Company  key={el.id} 
                                            name={el.name} 
                                            shpere={el.shpere} 
                                            logo={el.logo}
                                            cover={el.cover}
                                            />
                    })
                }
            </div>
        </div>
    )
}

export default Companyes;
