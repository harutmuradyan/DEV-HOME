import React from "react";
import './searchFooter.scss';

const SearchFooter = () => {
    return (
        <div className="searchFooter">
            <div className="searchFooter-container">
                <h2 className="searchFooter-container__title">Օգտվիր Վճարովի տարբերակից</h2>
                <img    className="searchFooter-container__img" 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9joaQqOh9drhZd4blGX3SJ-SlUCiDFfvSZOYgZa6oRb91QrlIoXvuokFRM9F8WpauESw&usqp=CAU" 
                        alt=""></img>
            </div>
        </div>
    )
}

export default SearchFooter;