import React from "react";
import './event.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    faLink , 
            faDownLong , 
            faBars } from "@fortawesome/free-solid-svg-icons";

const Event = () => {
    return (
        <div className="event">
            <div className="event-container">
                <div className="event-content">
                    <div className="event-content__background">
                        <img    className="event-content__background-img" 
                                src="https://q7x6p2k8.rocketcdn.me/wp-content/uploads/2019/10/website-design-issues.jpg" 
                                alt=""></img>
                    </div>
                    <div className="event-content__header">
                        <h2 className="event-content__header-eventName">NFT Street Fair - Los Angeles - Hybrid Event - Crypto * Metaverse * Web 3.0NFT Street Fair - Los Angeles  </h2>
                        <p className="event-content__header-companyName">Կազմակերպիչ ` PINK WEV COMPNAY</p>
                        <p className="event-content__header-data">Սկիզբ 20.04.22 20.30</p>
                        <p className="event-content__header-address">Հայաստան Երևան քանաքեռ 3փ.</p>
                        <p className="event-content__header-follower">Գնալու են (109) </p>
                        <button className="event-content__header-btn">
                            <FontAwesomeIcon    icon={faLink} 
                                                className="event-content__header-icon"/>
                            http://www.webcompany.com
                        </button>
                        <div className="event-content__header-btns">
                            <button className="event-content__header-add">Միանալ</button>
                            <button className="event-content__header-share">
                                ԿԻսվել
                                <FontAwesomeIcon    icon={faDownLong} 
                                                    className="event-content__header-icon"/>
                            </button>
                            <button className="event-content__header-complain">
                                <FontAwesomeIcon icon={faBars}/>
                            </button>
                        </div>
                    </div>
                    <div className="event-content__desc">
                        <h3 className="event-content__desc-title">Տեղեկատվություն Միջոցառման մասին</h3>
                        <p className="event-content__desc-text">
                        investors, project founders and enthusiasts.
                        Register on Eventbrite for tickets and speaker, sponsor and 
                        exhibitor opportunities.Free Registration
                        https://www.eventbrite.com/e/nft-street-fair-tickets-
                        291541557647?aff=LinkedInEventPageMay 28, 2022 - NFT Street Fair
                        The NFT Street Fair is a one day in person and live streamed NFT, 
                        Blockchain, Crypto Street Fair and Conference located in Southern 
                        Califonia that will bring together NFT collectors, investors, 
                        project founders and enthusiasts from around the globe.

                        The NFT Street Fair and conference will include approximately 1000 
                        attendees, 30 speakers, educational panels, immersive experiences, 
                        artists displaying their NFT artwork, exhibitors, live performances 
                        and entertainment, VIP cocktail party and VIP gift bag and many other 
                        special surprises.
                        </p>
                        <p className="event-content__desc-text">
                        investors, project founders and enthusiasts.
                        Register on Eventbrite for tickets and speaker, sponsor and 
                        exhibitor opportunities.Free Registration
                        https://www.eventbrite.com/e/nft-street-fair-tickets-
                        291541557647?aff=LinkedInEventPageMay 28, 2022 - NFT Street Fair
                        The NFT Street Fair is a one day in person and live streamed NFT, 
                        Blockchain, Crypto Street Fair and Conference located in Southern 
                        Califonia that will bring together NFT collectors, investors, 
                        project founders and enthusiasts from around the globe.

                        The NFT Street Fair and conference will include approximately 1000 
                        attendees, 30 speakers, educational panels, immersive experiences, 
                        artists displaying their NFT artwork, exhibitors, live performances 
                        and entertainment, VIP cocktail party and VIP gift bag and many other 
                        special surprises.
                        </p>
                    </div>
                    <div className="event-content__company">
                        <div className="event-content__company-block">
                            <img    className="event-content__company-img" 
                                    src="https://thumbs.dreamstime.com/b/business-company-logo-27438246.jpg" 
                                    alt=""></img>
                            <div className="event-content__company-info">
                                <p className="event-content__company-name">WEB TEXNOLOGIG</p>
                                <p className="event-content__company-followers">Գնալու են (492)</p>
                                <p className="event-content__company-data">2 ամիս առաջ</p>
                            </div>
                            <button className="event-content__company-add">Հետևել</button>
                        </div>
                        <p className="event-content__company-linq">
                            Ինտերնետային կայք ` http://www.webcompany.com
                        </p>
                    </div>
                </div>
                <div className="event-sidebar">
                    <div className="event-sidebar__block">
                        <button className="event-sidebar__block-addEvant">Ստեղծել Նոր միջոցառում</button>
                        <img    className="event-sidebar__block-cover" 
                                src="https://doruma-it.jp/wp-content/uploads/2021/02/InsignificantFortunateGallinule-size_restricted.gif" 
                                alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event;