import React from 'react'
import "./footer.css"
import logo from "../../img/footer_logo.png";
import {Link} from 'react-router-dom';
import soc_inst from "../../img/soc_instagram.png";
import soc_fb from "../../img/soc_facebook.png";
import soc_twit from "../../img/soc_twitter.png";
import soc_yt from "../../img/soc_youtube.png";

export const Footer = () => {
  return (
    <div className="footer">
        <div className="footer_logo">
            <img src={logo} alt="The Meat Experience" />
        </div>
        <div className="footer_sched_links">
            <div className="footer_left">
                <div className="footer_box">
                    <div className="box_heading">
                        OPEN
                    </div>
                    <div className="box_text">
                        Mon.-Thurs.: 12AM - 11PM<br />
                        Fri. - Sun.: 9AM - 12PM
                    </div>
                </div>
            </div>
            <div className="footer_right">
                <div className="footer_links">
                    <div className="fLinkA">
                        <Link to="">Home</Link><br />
                        <Link to="/about">About</Link><br />
                        <Link to="/contact">Contact</Link>
                    </div>
                    <div className="fLinkB">
                        <Link to="">Blog</Link><br />
                        <Link to="">Cookies</Link><br />
                        <Link to="">Site</Link>
                    </div>
                </div>{/*footer_links*/}
            </div>
        </div>
        <div className="footer_add_soc">
            <div className="footer_add">
                Madison Street, 30 - City
            </div>
            <div className="footer_soc">
                <Link to=""><img src={soc_inst} alt="instagram" /></Link>
                <Link to=""><img src={soc_fb} alt="facebook" /></Link>
                <Link to=""><img src={soc_twit} alt="twitter" /></Link>
                <Link to=""><img src={soc_yt} alt="youtube" /></Link>
                @Grill_House
            </div>
        </div>{/*footer_add_soc*/}
    </div>
  )
}

