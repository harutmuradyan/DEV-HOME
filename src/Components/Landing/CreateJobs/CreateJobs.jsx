import React from "react";
import './createJobs.scss';

const CreateJobs = () => {
    return (
        <div className="createJobs">
            <div className="createJobs-content">
                <div className="createJobs-linq">
                    <button className="createJobs-linq__item">
                        Սկսել
                    </button>
                </div>
                <div className="createJobs-block">
                    <h2 className="createJobs-block__title">
                        Տեղադրեք աշխատանքի հայտարարություն
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default CreateJobs;