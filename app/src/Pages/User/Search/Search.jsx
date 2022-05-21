import React from "react";
import './search.scss';

import SearchFooter from "./SearchFooter/SearchFooter";
import SearchNavbar from "./SearchNavbar/SearchNavbar";
import SearchRezult from "./SearchRezult/SearchRezult";

const Search = () => {
    return (
        <div className="search">
            <div className="search-navbar">
                <SearchNavbar/>
            </div>
            <div className="search-container">
                <div className="search-block">
                    <div className="search-block__content">
                        <SearchRezult/>
                    </div>
                    <div className="search-block__footer">
                        <SearchFooter />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search