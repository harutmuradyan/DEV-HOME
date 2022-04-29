import React from "react";
import { Link } from "react-router-dom";
import './modalUser.scss';

const ModalUser = ({userModal}) => {
    return (
        <div className={userModal ? "modalUser active" : "modalUser"}>
            <div className="modalUser-header">
                <img className="modalUser-header__img" src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" alt=""></img>
                <div className="modalUser-block">
                    <h2 className="modalUser-block__name">Գագիկ Խաչատրյան</h2>
                    <p className="modalUser-block__profesions">WEB DEVELOPER</p>
                </div>
            </div>
            <div className="modalUser-page">
                <Link to="/profile" className="modalUser-page__linq">
                    <button className="modalUser-page__btn">
                        Օգտվողի էջ
                    </button>
                </Link>
            </div>
            <div className="modalUser-btns">
                <button className="modalUser-btns__item">ԼԵզու</button>
                <button className="modalUser-btns__item">Օգտագործեք Վճարային տարբերակը</button>
                <button className="modalUser-btns__item">Ելք</button>
            </div>
        </div>
    )
}

export default ModalUser;