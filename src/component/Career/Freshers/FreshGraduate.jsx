import React from 'react'
import { Link } from "react-router-dom";
import "./freshgraduate.css"

const FreshGraduate = () => {
    return (
        <div className="dialog-container">
            <h2>Welcome!</h2>
            <div className="all-text">
            <div className="para1">
            <p>
                Congratulations on completing your studies! We have exciting
                opportunities for fresh graduates to kickstart their careers.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <h3 className='sorry-text'>Verry Sorry!!! Currently We dont't Have any oppurtunities for Freshers!</h3>
            </div>
            <div className="para2">
            <p>
                If you are eager to learn, innovate, and contribute to cutting-edge
                projects, we encourage you to apply and join our team.
            </p>
            </div>
            <p>
                “If you are excited about the prospect of building awesome tech and
                robots, we’d love to hear from you”. Please email us at{" "}
                <Link to="mailto:hr@getpeppermint.co">hr@getpeppermint.co</Link>
            </p>
            </div>
        </div>
    )
}

export default FreshGraduate