import React from "react";
import './networkSidebar.scss';

const NetworkSidebar = () => {
    return (
        <div className="networkSidebar">
            <div className="networkSidebar-container">
                <div className="networkSidebar-contaier__img">
                    <img    src="https://us.123rf.com/450wm/lassedesignen/lassedesignen1901/lassedesignen190100018/126282291-megaphone-with-speech-bubble.jpg?ver=6" 
                            alt=""></img>
                </div>
                <div className="networkSidebar-block">
                    <ul className="networkSidebar-bar">
                        <li className="networkSidebar-bar__item">Տեղեկություն</li>
                        <li className="networkSidebar-bar__item">Հնարավորություններ</li>
                        <li className="networkSidebar-bar__item">Հարցեր</li>
                        <li className="networkSidebar-bar__item">Գովազդ</li>
                        <li className="networkSidebar-bar__item">Ծառայություններ</li>
                        <li className="networkSidebar-bar__item"></li>
                    </ul>
                    <h2>DEV HOME © 2022</h2>
                </div>
            </div>
        </div>
    )
}

export default NetworkSidebar;