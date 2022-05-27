import React from "react";
import './searchRezult.scss';

//import SearchUsers from "./SearchUsers/SearchUsers";
//import SearchCompanyes from "./SearchCompanyes/SearchCompanyes";
//import SearchUniversity from "./SearchUniversity/SearchUniversity";
import SearchPosts from "./SearchPosts/SearchPosts";

const SearchRezult = () => {
    return (
        <div className="searchRezult">
            {/**<SearchUsers/>**/}
            {/**<SearchCompanyes/>**/}
            {/**<SearchUniversity/>**/}
            <SearchPosts/>
        </div>
    )
}

export default SearchRezult;