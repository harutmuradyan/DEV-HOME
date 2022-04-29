import React from "react";
import './Landing.scss';

import ServicesBlock from "./ServicesBlock/ServicesBlock";
import SlayderNews from "./SlayderNews/SlayderNews";
import StartProject from "./StartProject/StartProject";
import WorkSearch from "./WorkSearch/WorlSearch";
import Companies from "./Companies/Companies";
import CreateJobs from "./CreateJobs/CreateJobs";

const Landing = () => {
    return (
        <div className="landing">
            <ServicesBlock/>
            <CreateJobs/>
            <SlayderNews/>
            <WorkSearch/>
            <StartProject/>
            <Companies/>
        </div>
    )
}

export default Landing;