import React from "react";
import './searchEvents.scss';

import SearchEventsItem from "./SearchEventsItem/SearchEventsItem";

const SearchEvents = () => {
    return (
        <div className="searchEvents">    
            <h2 className="searchEvents-title">Միջոցառումներ</h2>            
            <div className="searchEvents-container">
                <SearchEventsItem/>
                <SearchEventsItem/>
                <SearchEventsItem/>                
                <SearchEventsItem/>
                <SearchEventsItem/>
                <SearchEventsItem/>
                <SearchEventsItem/>
                <SearchEventsItem/>
                <SearchEventsItem/>
                <SearchEventsItem/>
                <SearchEventsItem/>
                <SearchEventsItem/>
                <SearchEventsItem/>
            </div>
        </div>
    )
}

export default SearchEvents;