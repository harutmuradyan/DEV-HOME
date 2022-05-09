import React from "react";
import './profileSidebar.scss';

const ProfileSidebar = () => {
    return (
        <div className="profileSidebar">
            <div className="profileSidebar-container">
                <div className="profileSidebar-contaier__img">
                    <img    src="https://us.123rf.com/450wm/lassedesignen/lassedesignen1901/lassedesignen190100018/126282291-megaphone-with-speech-bubble.jpg?ver=6" 
                            alt=""></img>
                </div>
                <div className="profileSidebar-block">
                    <ul className="profileSidebar-bar">
                        <li className="profileSidebar-bar__item">Տեղեկություն</li>
                        <li className="profileSidebar-bar__item">Հնարավորություններ</li>
                        <li className="profileSidebar-bar__item">Հարցեր</li>
                        <li className="profileSidebar-bar__item">Գովազդ</li>
                        <li className="profileSidebar-bar__item">Ծառայություններ</li>
                        <li className="profileSidebar-bar__item"></li>
                    </ul>
                    <h2>DEV HOME © 2022</h2>
                </div>
            </div>
        </div>
    )
}

export default ProfileSidebar;