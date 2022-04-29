import React from "react";
import './registration.scss';

const Registration = () => {
    return (
        <div className="registration">
            <div className="registration-container">
                <h2 className="registration-title">Գրանցում համակարգում</h2>
                <form method="post" className="registration-form">
                    <div className="registration-form__group">
                        <label className="registration-form__label">Էլ․հասցե կամ Հեռ․`</label>
                        <input required className="registration-form__input" placeholder="Էլ հասցե"/>
                    </div>
                    <div className="registration-form__group">
                        <label className="registration-form__label">Հեռ.</label>
                        <input required className="registration-form__input" placeholder="Հեռախոսահամար"/>
                    </div>
                    <div className="registration-form__groups">
                        <div className="registration-form__group">
                            <label className="registration-form__label">Գախ. `</label>
                            <input required className="registration-form__input" placeholder="Գախնաբառ"/>
                        </div>
                        <div className="registration-form__group">
                            <label className="registration-form__label">Կրկ `</label>
                            <input required className="registration-form__input" placeholder="Գախնաբառօ կրկ․"/>
                        </div>
                    </div>
                    <div className="registration-form__groups">
                        <div className="registration-form__group gender">
                            <label className="registration-form__label">Տղամարդ `</label>
                            <input required type="checkbox" className="registration-form__input"/>
                        </div>
                        <div className="registration-form__group gender">
                            <label className="registration-form__label">Կին `</label>
                            <input required type="checkbox" className="registration-form__input"/>
                        </div>
                    </div>
                    <div className="registration-form__groups">
                        <div className="registration-form__group">
                            <select required className="registration-form__input">
                                <option>Օր՝</option>                
                            </select>
                        </div>
                        <div className="registration-form__group">
                            <select required className="registration-form__input">
                                <option>Ամիս՝</option>
                            </select>
                        </div>
                        <div className="registration-form__group">
                            <select required className="registration-form__input">
                                <option>Տարեթիվ՝</option>
                            </select>
                        </div>
                    </div>
                    <div className="registration-form__submit">
                        <button className="registration-form__submit-btn">Հաստատել</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registration;