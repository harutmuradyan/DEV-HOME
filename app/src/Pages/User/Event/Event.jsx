import React from "react";
import './event.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Event = () => {
    return (
        <div className="event">
            <div className="event-container">
                <div className="event-content">
                    <div className="event-content__background">
                        <img    className="event-content__background-img" 
                                src="https://i.ytimg.com/vi/OA8NGgOD_AE/maxresdefault.jpg" 
                                alt=""></img>
                    </div>
                    <div className="event-content__header">
                        <h2>NFT Street Fair - Los Angeles - Hybrid Event - Crypto * Metaverse * Web 3.0NFT Street Fair - Los Angeles  </h2>
                        <p>Կազմակերպիչ ` PINK WEV COMPNAY</p>
                        <p>20.04.22 20.30</p>
                        <p>Հայաստան Երևան քանաքեռ 3փ.</p>
                        <p>Գնալու են (109) </p>
                        <button>
                            <FontAwesomeIcon icon={faLink}/>
                            <p>http://www.webcompany.com</p>
                        </button>
                    </div>
                    <div className="event-content__desc">
                        <p>
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
                    <div className="event-content__footer">
                        <div>
                            <img    className="" 
                                    src="" 
                                    alt=""></img>
                            <div>
                                <p>WEB TEXNOLOGIG</p>
                                <p>Գնալու են (492)</p>
                                <p>2 ամիս առաջ</p>
                            </div>
                            <button>Հետևել</button>
                        </div>
                        <div>
                            <p>Ինտերնետային կայք ` http://www.webcompany.com</p>
                        </div>
                    </div>
                </div>
                <div className="eventSidebar">

                </div>
            </div>
        </div>
    )
}

export default Event;