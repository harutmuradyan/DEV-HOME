import React from "react";
import './searchUsers.scss';

import SearchUsersItem from "./SearchUsersItem/SearchUsersItem";

const SearchUsers = () => {
    return (
        <div className="searchUsers">    
            <h2 className="searchUsers-title">Մարդիք</h2>            
            <div className="searchUsers-container">
                <SearchUsersItem/>
                <SearchUsersItem/>
                <SearchUsersItem/>
                <SearchUsersItem/>
                <SearchUsersItem/>
                <SearchUsersItem/>
                <SearchUsersItem/>
                <SearchUsersItem/>
                <SearchUsersItem/>
                <SearchUsersItem/>
            </div>
        </div>
    )
}

export default SearchUsers;