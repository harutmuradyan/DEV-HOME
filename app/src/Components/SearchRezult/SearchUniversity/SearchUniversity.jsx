import React from "react";
import './searchUniversity.scss';

import SearchUniversityItem from "./SearchUniversityItem/SearchUniversityItem";

const SearchUniversity = () => {
    return (
        <div className="searchUniversity">    
            <h2 className="searchUniversity-title">ՈՒսման վայրեր</h2>            
            <div className="searchUniversity-container">
                <SearchUniversityItem/>
                <SearchUniversityItem/>
                <SearchUniversityItem/>
                <SearchUniversityItem/>
                <SearchUniversityItem/>
                <SearchUniversityItem/>
                <SearchUniversityItem/>
                <SearchUniversityItem/>
                <SearchUniversityItem/>
                <SearchUniversityItem/>
                <SearchUniversityItem/>
            </div>
        </div>
    )
}

export default SearchUniversity;