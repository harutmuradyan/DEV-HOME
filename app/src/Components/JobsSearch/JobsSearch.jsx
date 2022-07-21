import React from "react";
import './jobsSearch.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const JobsSearch = () => {
    return (
        <div className="jobsSearch">
            <div className="jobsSearch-block">
                <p className="jobsSearch-block__title">Փնտրեք Ձեզ հարմար աշխատանք կամ Ինտերշիփ</p>
            </div>
            <div className="jobsSearch-block">
                <button className="jobsSearch-block__btn">
                    <FontAwesomeIcon    icon={faSearch} 
                                        className="jobsSearch-block__btn-icon"/>
                    <input  className="jobsSearch-block__btn-input" 
                            placeholder="   Փնտրել"/>
                </button>
            </div>
            <div className="jobsSearch-category">
                <ul className="jobsSearch-category__bar">
                    <li className="jobsSearch-category__item">Ծրագրավորում</li>
                    <li className="jobsSearch-category__item">Որակի Կառավարում</li>
                    <li className="jobsSearch-category__item">Սարքերի նախագծում</li>
                    <li className="jobsSearch-category__item">UI/UX դիզայներ</li>
                    <li className="jobsSearch-category__item">Ֆինանսների կառավարում</li>
                    <li className="jobsSearch-category__item">Մարքեդինգ/գովազդ</li>
                    <li className="jobsSearch-category__item">Տուրիզմ</li>
                    <li className="jobsSearch-category__item">Վաճառք</li>
                    <li className="jobsSearch-category__item">կառավարում</li>
                    <li className="jobsSearch-category__item">Կրթություն</li>
                    <li className="jobsSearch-category__item">Իրավական</li>
                    <button className="jobsSearch-category__more">Նայել ավելին</button>
                </ul>
            </div>
        </div>
    )
}

export default JobsSearch;