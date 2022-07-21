import React from "react";
import './searchPosts.scss';

import SearchPostsItem from "./SearchPostsItem/SearchPostsItem";

const SearchPosts = () => {

return (
        <div className="searchPosts">
            <h2 className="searchPosts">Հոդվածներ</h2>
            <div className="searchPosts-items">
                <SearchPostsItem/>  
                <SearchPostsItem/>  
                <SearchPostsItem/>                
                <SearchPostsItem/>  
                <SearchPostsItem/>  
                <SearchPostsItem/>  
                <SearchPostsItem/>  
                <SearchPostsItem/>  
                <SearchPostsItem/>  
                <SearchPostsItem/>  
                <SearchPostsItem/>  
            </div>
        </div>
    )
} 

export default SearchPosts;