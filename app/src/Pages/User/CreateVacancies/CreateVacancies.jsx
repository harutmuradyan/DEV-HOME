import React from "react";
import './createVacancies.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const CreateVacancies = () => {
    return (
        <div className="createVacancies">
            <div className="createVacancies-container">
                <div className="createVacancies-content">
                    <form   className="createVacancies-form" 
                            method="post">
                        <div className="createVacancies-form__block">
                            <h2 className="createVacancies-form__title">Մաս 1</h2>
                            <div className="createVacancies-form__block-content">
                                <label  className="createVacancies-form__label" 
                                        for="jobename">Աշխատանքի անվանում *</label>
                                <p className="createCompany-form__message">Սխալ է լրացված</p>
                                <input  type="text" 
                                        className="createVacancies-form__input"
                                        required
                                        id=""
                                        name="jobename"
                                        value=""
                                        placeholder="   Աշխատանքի անվանում"></input>
                                <label  className="createVacancies-form__label"
                                        for="companyname">Կազմակերպության անվանում *</label>
                                <p className="createCompany-form__message">Սխալ է լրացված</p>
                                <input  type="text" 
                                        className="createVacancies-form__input"
                                        required
                                        id=""
                                        name="companyname"
                                        value=""
                                        placeholder="   Կազ․ անվանում"></input>
                                <label  className="createVacancies-form__label"
                                        for="jobaddress">Աշխ․ Գտնվելու վայր *</label>
                                <p className="createCompany-form__message">Սխալ է լրացված</p>
                                <input  type="text" 
                                        className="createVacancies-form__input"
                                        required
                                        id=""
                                        name="jobaddress"
                                        value=""
                                        placeholder="   Աշխ․ Գտնվելու վայրը"></input>
                                <label  className="createVacancies-form__label"
                                        for="jobtype">Աշխատանքի տեսակ *</label>
                                <p className="createCompany-form__message">Ընտրեք որեվիցե մեկը</p>
                                <select className="createVacancies-form__select"
                                        name="jobtype">
                                    <option     className="createVacancies-form__select-option"
                                                value="">Ընտրել Աշխատանքի տեսակ</option>
                                </select>
                                <label  className="createVacancies-form__label"
                                        for="jobtime">Աշխատանքային ժամեր *</label>
                                <p className="createCompany-form__message">Ընտրեք որեվիցե մեկը</p>
                                <select className="createVacancies-form__select"
                                        name="jobtime">
                                    <option     className="createVacancies-form__select-option"
                                                value="">Ընտրել Աշխատանքային ժամեր</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="createVacancies-form__block">
                            <h2 className="createVacancies-form__title">Մաս 2</h2>
                            <div className="createVacancies-form__block-content">
                                <label  className="createVacancies-form__label"
                                        for="about">Ավելացնել աշխատանքի Նկարագրություն *</label>
                                <p className="createCompany-form__message">Սխալ է լրացված</p>
                                <textarea   className="createVacancies-form__textare"
                                            required
                                            name="about"></textarea>
                                <div className="createVacancies-form__btns">
                                    <p className="createVacancies-form__btns-title">Ավելացնել պահանջվող հմտություններ *</p>
                                    <div className="createVacancies-form__btns-content">
                                        <div className="createVacancies-form__btn">JavaScript</div>
                                        <div className="createVacancies-form__btn">NodeJs</div>
                                        <div className="createVacancies-form__btn">JavaScript</div>
                                        <div className="createVacancies-form__btn">NodeJs</div>
                                        <div className="createVacancies-form__btn">JavaScript</div>
                                        <div className="createVacancies-form__btn">NodeJs</div>
                                        <div className="createVacancies-form__btn">JavaScript</div>
                                        <div className="createVacancies-form__btn">NodeJs</div>
                                        <div className="createVacancies-form__btn-add">
                                            <input  className="createVacancies-form__btn-input"
                                                    placeholder="Ավելացնել հմտություն"
                                                    type="text"></input>
                                            <FontAwesomeIcon    icon={faPlus} 
                                                                className="createVacancies-form__btn-icon"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="createVacancies-form__block">
                            <h2 className="createVacancies-form__title">Մաս 3</h2>
                            <div className="createVacancies-form__block-content">
                                <label  className="createVacancies-form__label"
                                        for="jobemail">Աշխատանքի էլեկտրոնային հասցե *</label>
                                <p className="createCompany-form__message">Սխալ է լրացված</p>
                                <input  type="email" 
                                        className="createVacancies-form__input"
                                        required
                                        id=""
                                        name="jobemail"
                                        value=""
                                        placeholder="   Աշխատանքի էլեկտրոնային հասցե "></input>
                                <div className="createVacancies-form__btns">
                                    <p className="createVacancies-form__btns-title">Ավելացնել պահանջվող հարցեր *</p>
                                    <div className="createVacancies-form__btns-content">
                                        <div className="createVacancies-form__btn">Պատասխանատու</div>
                                        <div className="createVacancies-form__btn">Խելացի</div>
                                        <div className="createVacancies-form__btn">Հանդուրժող</div>
                                        <div className="createVacancies-form__btn">Հուսալի</div>
                                        <div className="createVacancies-form__btn">Կարգապահ</div>
                                        <div className="createVacancies-form__btn-add">
                                            <input  className="createVacancies-form__btn-input"
                                                    placeholder="Ավելացնել"
                                                    type="text"></input>
                                            <FontAwesomeIcon    icon={faPlus} 
                                                                className="createVacancies-form__btn-icon"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="createVacancies-form__block">
                            <div className="createVacancies-form__block-confirm">
                                <button className="createVacancies-form__btn">
                                    <input  type="checkbox" 
                                            className="createVacancies-form__checkbox"
                                            required
                                            value=""></input>
                                </button>
                                <p className="createVacancies-form__text">Հաստատել որ դուք լիազորված եք այս կազմակերպության էջի ստեղխման համար</p>
                            </div>
                        </div>

                        <div className="createVacancies-form__sent">
                            <button className="createVacancies-form__sent-btn" 
                                    type="submit" 
                                    value="Submit">Հաստատել</button>
                        </div>
                    </form>
                </div>
                <div className="createVacancies-view">
                
                </div>
            </div>
        </div>
    )
}

export default CreateVacancies;