import React, { useState } from "react";
import "./navbar.css";
import logo from "../Assets/Peepermint Logo.png";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import {
    AiFillFacebook,
    AiFillTwitterSquare,
    AiFillLinkedin,
    AiFillYoutube,
    AiFillMail
} from "react-icons/ai";

const Navbar = () => {
    const [menu, setMenu] = useState(true);

    const toggleMenu = () => {
        setMenu(!menu);
    };

    return (
        <div className="main">
            <div className="navbar">
                <div className="logo">
                    <img alt="logo" src={logo} />
                </div>

                <div className="social">
                    <ul>
                        <li>
                            <Link to="https://twitter.com/getpeppermint" target="_blank">
                                <AiFillFacebook />
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="https://www.linkedin.com/company/getpeppermint"
                                target="_blank">
                                <AiFillLinkedin />
                            </Link>
                        </li>
                        <li>
                            <Link to="https://twitter.com/getpeppermint" target="_blank">
                                <AiFillTwitterSquare />
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="https://www.youtube.com/channel/UCsBgxvgDYRPHEKPp_tU-Qyw" target="_blank">
                                <AiFillYoutube />
                            </Link>
                        </li>
                        <li>
                            <Link to="mailto:info@getpeppermint.co" target="_blank">
                                <AiFillMail />
                            </Link>
                        </li>
                    </ul>

                </div>
                <ul className="link">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/">ABOUT US</Link></li>
                    <li><Link to="/">SOLUTIONS</Link></li>
                    <li><Link to="/">PRODUCTS</Link></li>
                    <li><Link to="/">RESOURCES</Link></li>
                    <li>
                        <button className="career-btn">CAREERS
                        </button>
                    </li>
                </ul>
                <div className="toggleBtn" onClick={toggleMenu}>
                    {menu ? <FaBars /> : <RxCross2 />}
                </div>
            </div>
            <div style={{ display: menu ? "none" : "block" }} className="dropDownMenu">
                <ul>
                    <li>
                        <Link to="/">
                            <b>HOME</b>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <b>ABOUT US</b>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <b>SOLUTIONS</b>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <b>PRODUCTS</b>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <b>RESOURCES</b>
                        </Link>
                    </li>
                    <li>
                        <Link to="/careers">
                            <b>CAREERS</b>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;