import React from "react";
import './sidebarFooter.scss';

const SidebarFooter = () => {
    return (
        <div className="sidebarFooter">
            <div className="sidebarFooter-container">
                <div className="sidebarFooter-contaier__img">
                    <img    src="https://us.123rf.com/450wm/lassedesignen/lassedesignen1901/lassedesignen190100018/126282291-megaphone-with-speech-bubble.jpg?ver=6" 
                            alt=""></img>
                </div>
                <div className="sidebarFooter-block">
                    <ul className="sidebarFooter-bar">
                        <li className="sidebarFooter-bar__item">Տեղեկություն</li>
                        <li className="sidebarFooter-bar__item">Հնարավորություններ</li>
                        <li className="sidebarFooter-bar__item">Հարցեր</li>
                        <li className="sidebarFooter-bar__item">Գովազդ</li>
                        <li className="sidebarFooter-bar__item">Ծառայություններ</li>
                        <li className="sidebarFooter-bar__item"></li>
                    </ul>
                    <h2>DEV HOME © 2022</h2>
                </div>
            </div>
        </div>
    )
}

export default SidebarFooter;