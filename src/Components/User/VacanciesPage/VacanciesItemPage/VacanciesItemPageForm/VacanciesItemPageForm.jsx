import React from "react";
import './VacanciesItemPageForm.scss';

const VacanciesItemPageForm = () => {
    return (
        <div className="vacanciesItemPageForm">
            <div className="vacanciesItemPageForm-header">
                <div className="vacanciesItemPageForm-header__info">
                    <h2 className="vacanciesItemPageForm-header__info-title">Freelance React Developer</h2>
                    <div className="vacanciesItemPageForm-header__info-block">
                        <p>Հայաստան</p>
                        <p>Երևան</p>
                        <p>Աշխատանք տանից</p>
                        <p>12 ժամ</p>
                    </div>
                </div>
                <div className="vacanciesItemPageForm-header__btns">
                    <button>Դիմել օնլայն</button>
                    <button>Ուղղարկել SV</button>
                </div>
            </div>
            <nav className="vacanciesItemPageForm-nav">
                <ul className="vacanciesItemPageForm-nav__block">
                    <li className="vacanciesItemPageForm-nav__block-item">
                        <span>Մակարդակ :</span>
                        Միջին
                    </li>
                    <li className="vacanciesItemPageForm-nav__block-item">
                        <span>Աշխատանքի պայմաններ :</span>
                        Մշտական
                    </li>
                    <li className="vacanciesItemPageForm-nav__block-item">
                        <span>Կատեգորիա :</span>
                        Ծրագրավորում
                    </li>
                    <li className="vacanciesItemPageForm-nav__block-item">
                        <span>Աշխատանքի տեսակը :</span>
                        Ամբողջ դրույք
                    </li>
                </ul>
            </nav>
            <div className="vacanciesItemPageForm-block">
                <h3 className="vacanciesItemPageForm-title">Աշխատանքի նկարագրություն՝</h3>
                <p className="vacanciesItemPageForm-text">Are you GAME to JUMP INTO MAGENTA and be our new DevOps Engineer?</p>
            </div>
            <div className="vacanciesItemPageForm-block">
                <h3 className="vacanciesItemPageForm-title">Աշխատանքային պարտականություններ</h3>
                <p className="vacanciesItemPageForm-text">Select and deploy appropriate CI/CD tools
                Set up new tools and required infrastructure
                Provision, secure and own infrastructure using Docker, Kubernetes and service meshes.
                Monitor the infrastructure and respond to security incidents and alerts.
                Encourage and build automated processes</p>
            </div>
            <div className="vacanciesItemPageForm-block">
                <h3 className="vacanciesItemPageForm-title">Անհրաժեշտ հմտություններ</h3>
                <p className="vacanciesItemPageForm-text">
                BS or MS in Computer Science or related field;
                2+ years of experience in deploying and managing medium/large scale distributed systems;
                Experience in Linux and Windows-based infrastructure;
                Knowledge in modern configuration management tools (Ansible, Terraform, Packer, SaltStack);
                Experience in setting up CI/CD pipelines(TeamCity/TFS/GitLab/Octopus…)
                Scripting experience: (PowerShell/Bash/Python/Ruby…)
                Experience with cloud infrastructure (Azure/GCP…)
                Experience using container technologies (Docker, Kubernetes, Elixir)
                Passionate about learning and adopting new technologies that will ease your day-to-day job;
                Is magenta your favorite color?
                Are you a team player?
                </p>
            </div>
            <div className="vacanciesItemPageForm-company">
                <div className="vacanciesItemPageForm-company__block">
                    <div className="vacanciesItemPageForm-company__block">
                        <img src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png"
                            alt=""
                            className="vacanciesItemPageForm-company__block-img"></img>
                        <h4 className="vacanciesItemPageForm-company__block-name">Toptal Digitain</h4>
                    </div>
                    <button className="vacanciesItemPageForm-company__block-btn">Հետևալ</button>
                </div>
                <p className="vacanciesItemPageForm-company__emploee">3000 Աշխատող</p>
                <p className="vacanciesItemPageForm-company__info">Toptal is a network of the world's top talent in business, design, and technology that enables companies to scale their teams, on demand. With $200+ million in annual revenue and over 40% year-over-year growth, Toptal is the largest fully distributed workforce in the world.</p>
            </div>
        </div>
    )
}

export default VacanciesItemPageForm;