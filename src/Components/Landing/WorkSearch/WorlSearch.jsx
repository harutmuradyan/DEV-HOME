import React from "react";
import './workSearch.scss'

const WorkSearch = () => {
    return (
        <div className="workSearch">
            <div className="workSearch-title">
                Փնտրեք Ձեզ հարմար աշխատանք կամ Ինտերշիփ
            </div>
            <div className="workSearch-category">
                <ul className="workSearch-category__bar">
                    <li className="workSearch-category__item">Ծրագրավորում</li>
                    <li className="workSearch-category__item">Որակի Կառավարում</li>
                    <li className="workSearch-category__item">Սարքերի նախագծում</li>
                    <li className="workSearch-category__item">UI/UX դիզայներ</li>
                    <li className="workSearch-category__item">Ֆինանսների կառավարում</li>
                    <li className="workSearch-category__item">Մարքեդինգ/գովազդ</li>
                    <li className="workSearch-category__item">Տուրիզմ</li>
                    <li className="workSearch-category__item">Վաճառք</li>
                    <li className="workSearch-category__item">կառավարում</li>
                    <li className="workSearch-category__item">Կրթություն</li>
                    <li className="workSearch-category__item">Իրավական</li>
                    <button className="workSeacrh-category__more">Նայել ավելին</button>
                </ul>
            </div>
        </div>
    )
}

export default WorkSearch;