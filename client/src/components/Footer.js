import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {

    return(
        <footer className="footer">
            <nav className="footer__nav">
                <Link to="/">Home</Link>
                <Link to="/animals" className="footer__nav__animals">Animals</Link>
            </nav>
            <div className="footer__center">
                <div className="footer__center__quote">   
                    <p>You can't change an animals past, but you could rewrite its future.</p>
                </div>
                <div className="footer__center__social-media">
                    <div className="footer__center__social-media__icon facebook">
                        <img src={require('../images/facebook-logo-button-white.png')} alt="facebook" />
                    </div>
                    <div className="footer__center__social-media__icon instagram">
                        <img src={require('../images/instagram-logo-white.png')} alt="instagram" />
                    </div>
                    <div className="footer__center__social-media__icon linkedin">
                        <img src={require('../images/linkedin-button.png')} alt="linkedin" />
                    </div>
                    <div className="footer__center__social-media__icon pinterest">
                        <img src={require('../images/pinterest.png')} alt="pinterest" />
                    </div>
                    <div className="footer__center__social-media__icon google-plus">
                        <img src={require('../images/google-plus-logo-button.png')} alt="google-plus" />
                    </div>
                </div>
            </div>
            <div className="footer__copyright">
                <label className="footer__copyright__text">@2017 Vana Brajčić, All Rights Reserved</label>
            </div>
        </footer>
    );
}

export default Footer;