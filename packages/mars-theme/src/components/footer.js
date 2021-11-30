import React from "react";
import { FaInstagram, FaFacebookSquare, FaTwitter } from "react-icons/fa";


const footerStyle = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
}

const footerLi = {
    display: "inline-block",
    padding: "10px 0",
    margin: "0 15px",
    fontSize: "0.8rem",
    cursor: "pointer",
}

const social = {
    display: "inline-block",
    cursor: "pointer",
    margin: "0 25px",
    fontSize: "1.2rem"
}

function Footer() {
    return (
    <div>
        <div style={footerStyle}>
            <ul >
                <li style={social}><FaInstagram /></li>
                <li style={social}><FaFacebookSquare /></li>
                <li style={social}><FaTwitter /></li>
            </ul>
            <ul >
                <li style={footerLi}>Made with ♥ in Finland</li>
                <li style={footerLi}>Terms of service</li>
                <li style={footerLi}>Privacy Policy</li>
            </ul>
        </div>
    </div>
    )
}

export default Footer