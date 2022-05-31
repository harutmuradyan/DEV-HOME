import React from "react";
import './createCompany.scss';

const CreateCompany = () => {
    return (
        <div className="createCompany">
            <div className="createCompany-container">
                <div className="createCompany-content">
                    <form className="createCompany-form" method="post">
                        <div className="createCompany-form__block">
                            <h2 className="createCompany-form__title">Էջի մասին տվյալներ</h2>
                            <div className="createCompany-form__block-content">
                                <label  className="createCompany-form__label" 
                                        for="companyname">Անվանում *</label>
                                <input  type="text" 
                                        className="createCompany-form__input"
                                        required
                                        id=""
                                        name="name"
                                        value=""
                                        placeholder="   Կազ․ Անվանում"></input>
                                <label  className="createCompany-form__label"
                                        for="tell">Հեռախոսահամար *</label>
                                <input  type="text" 
                                        className="createCompany-form__input"
                                        required
                                        id=""
                                        name="tell"
                                        value=""
                                        placeholder="   Կազ․ Հեռախոսահամար"></input>
                                <label  className="createCompany-form__label"
                                        for="address">Գտնվելու վայր *</label>
                                <input  type="text" 
                                        className="createCompany-form__input"
                                        required
                                        id=""
                                        name="address"
                                        value=""
                                        placeholder="   Կազ․ Գտնվելու վայրը"></input>
                                <label  className="createCompany-form__label"
                                        for="url">Կազ`URL *  </label>
                                <input  type="text" 
                                        className="createCompany-form__input"
                                        required
                                        id=""
                                        name="url"
                                        value=""
                                        placeholder="   Կազ․ Ինտերնետային կայքի հասցեն"></input>
                                <label  className="createCompany-form__label"
                                        for="site">Ինտերնետային կայք *</label>
                                <input  type="text" 
                                        className="createCompany-form__input"
                                        required
                                        id=""
                                        name="site"
                                        value=""
                                        placeholder="   Կազ․ Ինտերնետային կայքի անվանումը"></input>
                            </div>
                        </div>
                        <div className="createCompany-form__block">
                            <h3 className="createCompany-form__title">Կազմակերպության մասին տվյալներ</h3>
                            <div className="createCompany-form__block-content">
                                <label  className="createCompany-form__label"
                                        for="direction">Ուղվածություն *</label>
                                <input  type="text" 
                                        className="createCompany-form__input"
                                        required
                                        id=""
                                        name="direction"
                                        value=""
                                        placeholder="   Կազ․ Աշխատանքային բնագավառը"></input>
                                <label  className="createCompany-form__label"
                                        for="count">Աշխատակիցների քանակ *</label>
                                <select className="createCompany-form__select"
                                        name="count">
                                    <option     className="createCompany-form__select-option"
                                                value="">Ընտրել աշխատակիցների քանակը</option>
                                </select>
                                <label  className="createCompany-form__label"
                                        for="category">Կազմակերպության տիպ *</label>
                                <select className="createCompany-form__select"
                                        name="category">
                                    <option className="createCompany-form__select-option"
                                            value="">Ընտրել կազմակերպության տիպը</option>
                                </select>
                            </div>
                        </div>
                        <div className="createCompany-form__block">
                            <h3 className="createCompany-form__title">Էջի մասին տվյալներ</h3>
                            <div className="createCompany-form__block-content">
                                <label  className="createCompany-form__label"
                                        name="logo">Ավելացնել Կազ․ լոգոն *</label>
                                <input  type="file" 
                                        className="createCompany-form__input-img"
                                        required
                                        id=""
                                        name="logo"
                                        value=""
                                        ></input>
                                <label  className="createCompany-form__label"
                                        for="background">Ավելացնել Կազ․ ետևի ֆոնի նկար *</label>
                                <input  type="file" 
                                        className="createCompany-form__input-img"
                                        required
                                        id=""
                                        name="background"
                                        value=""
                                        ></input>
                                <label  className="createCompany-form__label"
                                        for="about">Կազ. Նկարագրություն</label>
                                <textarea   className="createCompany-form__textare"
                                            required
                                            name="about"
                                            
                                            ></textarea>
                            </div>
                        </div>
                        <div className="createCompany-form__block">
                            <div className="createCompany-form__block-confirm">
                                <button className="createCompany-form__btn">
                                    <input  type="checkbox" 
                                            className="createCompany-form__checkbox"
                                            required
                                            value=""></input>
                                </button>
                                <p className="createCompany-form__text">Հաստատել որ դուք լիազորված եք այս կազմակերպության էջի ստեղխման համար</p>
                            </div>
                        </div>
                        <div className="createCompany-form__sent">
                            <button className="createCompany-form__sent-btn" 
                                    type="submit" 
                                    value="Submit">Հաստատել</button>
                        </div>
                    </form>
                </div>
                <div className="createCompany-view">
                    <h4 className="createCompany-view__title">Նախնական տեսք</h4>
                    <div className="createCompany-view__content">
                        <div className="createCompany-view__background">
                            <img    src=""
                                    alt=""
                                    className="createCompany-view__background-img"></img>
                        </div>
                        <img    src=""
                                alt=""
                                className="createCompany-view__logo"></img>
                        <p className="createCompany-view__about">Կարճ նկարագրություն</p>
                        <p className="createCompany-view__direction">Ուղվածություն</p>
                        <p className="createCompany-view__follow">Հետևել</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateCompany;