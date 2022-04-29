import React from "react";
import './vacanciesSearch.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const VacanciesSearch = () => {
    return (
        <div className="vacanciesSearch">
            <div className="vacanciesSearch-block">
                <p className="vacanciesSearch-block__title">Փնտրեք Ձեզ հարմար աշխատանք կամ Ինտերշիփ</p>
            </div>
            <div className="vacanciesSearch-block">
                <button className="vacanciesSearch-block__btn">
                    <FontAwesomeIcon icon={faSearch} className="vacanciesSearch-block__btn-icon"/>
                    <input className="vacanciesSearch-block__btn-input" placeholder="   Փնտրել"/>
                </button>
            </div>
            <div className="vacanciesSearch-category">
                <ul className="vacanciesSearch-category__bar">
                    <li className="vacanciesSearch-category__item">Ծրագրավորում</li>
                    <li className="vacanciesSearch-category__item">Որակի Կառավարում</li>
                    <li className="vacanciesSearch-category__item">Սարքերի նախագծում</li>
                    <li className="vacanciesSearch-category__item">UI/UX դիզայներ</li>
                    <li className="vacanciesSearch-category__item">Ֆինանսների կառավարում</li>
                    <li className="vacanciesSearch-category__item">Մարքեդինգ/գովազդ</li>
                    <li className="vacanciesSearch-category__item">Տուրիզմ</li>
                    <li className="vacanciesSearch-category__item">Վաճառք</li>
                    <li className="vacanciesSearch-category__item">կառավարում</li>
                    <li className="vacanciesSearch-category__item">Կրթություն</li>
                    <li className="vacanciesSearch-category__item">Իրավական</li>
                    <button className="vacanciesSearch-category__more">Նայել ավելին</button>
                </ul>
            </div>
        </div>
    )
}

export default VacanciesSearch;