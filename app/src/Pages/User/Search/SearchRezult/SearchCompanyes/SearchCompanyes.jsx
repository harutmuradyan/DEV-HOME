import React from "react";
import './searchCompanyes.scss';
import SearchCompanyesItem from "./SearchCompanyesItem/SearchCompanesItem";

const SearchCompanyes = () => {
    return (
        <div className="searchCompanyes">    
            <h2 className="searchCompanyes-title">Կազմակերպություններ</h2>            
            <div className="searchCompanyes-container">
                <SearchCompanyesItem />
                <SearchCompanyesItem />
                <SearchCompanyesItem />
                <SearchCompanyesItem />
                <SearchCompanyesItem />
                <SearchCompanyesItem />
                <SearchCompanyesItem />
                <SearchCompanyesItem />
                <SearchCompanyesItem />
                <SearchCompanyesItem />
            </div>
        </div>
    )
}

export default SearchCompanyes;