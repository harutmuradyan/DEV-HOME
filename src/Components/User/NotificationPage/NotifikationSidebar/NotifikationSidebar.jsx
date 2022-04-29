import React from "react";
import './notifikationSidebar.scss'

const NotifikationSidebar = () => {
    return (
        <div className="notifikationSidebar">
            <div className="notifikationSidebar-container">
                <div className="notifikationSidebar-contaier__img">
                    <img src="https://us.123rf.com/450wm/lassedesignen/lassedesignen1901/lassedesignen190100018/126282291-megaphone-with-speech-bubble.jpg?ver=6" alt=""></img>
                </div>
                <div className="notifikationSidebar-block">
                    <ul className="notifikationSidebar-bar">
                        <li className="notifikationSidebar-bar__item">Տեղեկություն</li>
                        <li className="notifikationSidebar-bar__item">Հնարավորություններ</li>
                        <li className="notifikationSidebar-bar__item">Հարցեր</li>
                        <li className="notifikationSidebar-bar__item">Գովազդ</li>
                        <li className="notifikationSidebar-bar__item">Ծառայություններ</li>
                        <li className="notifikationSidebar-bar__item"></li>
                    </ul>
                    <h2>DEV HOME © 2022</h2>
                </div>
            </div>
        </div>
    )
}

export default NotifikationSidebar;