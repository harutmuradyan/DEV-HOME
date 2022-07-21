import React from "react";
import SearchNavbar from "../../../Components/SearchNavbar/SearchNavbar";
import SearchRezult from "../../../Components/SearchRezult/SearchRezult";
import SidebarFooter from "../../../Components/SidebarFooter/SidebarFooter";
import './search.scss';

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
                       <SidebarFooter />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search