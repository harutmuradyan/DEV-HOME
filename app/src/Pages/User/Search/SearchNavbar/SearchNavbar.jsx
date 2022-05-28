import React from "react";
import './searchNavbar.scss'

const SearchNavbar = () => {
    return (
        <div className="searchNavbar">
            <nav className="searchNavbar-nav">
                <ul className="searchNavbar-group">
                    <li className="searchNavbar-group__item">Դիտել Բոլորը</li>
                    <li className="searchNavbar-group__item">Մարդիք</li>
                    <li className="searchNavbar-group__item">Աշխատանքներ</li>
                    <li className="searchNavbar-group__item">Հոդվածներ</li>
                    <li className="searchNavbar-group__item">կազմակերպություններ</li>
                    <li className="searchNavbar-group__item">Կրթահամալինրներ</li>
                    <li className="searchNavbar-group__item">Միջոցառումներ</li>
                    <li className="searchNavbar-group__item">Ծառայություններ</li>
                </ul>
            </nav>
        </div>
    )
}

export default SearchNavbar;