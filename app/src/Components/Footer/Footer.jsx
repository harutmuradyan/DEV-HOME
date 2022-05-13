import React from "react";
import './footer.scss'

const Footer = () => {
    return(
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <h1>DEV HOME</h1>
          </div>
          <div className="footer-content">
            <div className="footer-block">
              <h2 className="footer-block__title">
                Ընդհանուր տեղեկություն
              </h2>
              <ul className="footer-block__bar">
                <li className="footer-block__item">Գրանցվել</li>
                <li className="footer-block__item">Բլոգ</li>
                <li className="footer-block__item">Կարերա</li>
              </ul>
            </div>
            <div className="footer-block">
              <h2 className="footer-block__title">
                Տեղեկություն մեր մասին
              </h2>
              <ul className="footer-block__bar">
                <li className="footer-block__item">Ուսուցում</li>
                <li className="footer-block__item">Աշխատանք</li>
                <li className="footer-block__item">Ծառայություններ</li>
                <li className="footer-block__item">Ապրանքներ</li>
              </ul>
            </div>
            <div className="footer-block">
              <h2 className="footer-block__title">
                Բիզնեսի լուծումներ
              </h2>
              <ul className="footer-block__bar">
                <li className="footer-block__item">Մարքետինգ</li>
                <li className="footer-block__item">Վաճառք</li>
                <li className="footer-block__item">Ուսուցում</li>
              </ul>
            </div>
            <div className="footer-block">
              <h2 className="footer-block__title">
                Բաժիններ
              </h2>
              <ul className="footer-block__bar">
                <li className="footer-block__item">Մասնակիցներ</li>
                <li className="footer-block__item">Աշխատանքներ</li>
                <li className="footer-block__item">Օֆիսներ</li>
                <li className="footer-block__item">Ուսուցում</li>
                <li className="footer-block__item">Գրառումներ</li>
                <li className="footer-block__item">Նորություններ</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-container">
          <div className="footer-logo">
            
          </div>
          <div className="footer-content">
            <ul className="footer-company">
              <li className="footer-company__item">Կազմակերպության մասին</li>
              <li className="footer-company__item">Օգտվելու կանոններ</li>
              <li className="footer-company__item ">
                Լեզու
                <select className="language">
                  <option>RU</option>
                  <option>EN</option>
                  <option>HAY</option>
                </select>
              </li>
              <li className="footer-company__item">Գաղտնիության քաղաքականություն</li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright">
          <h2 className="footer-copyright__item">DEV HOME © 2022</h2>
        </div>
      </footer>
    )
}

export default Footer;