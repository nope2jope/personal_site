import React from "react";

const Footer = () => {

    const d = new Date().getFullYear();
    
    return <div>
        <div className="row buffer"><p></p></div>
        <footer>

            <div className="center">
                <p id="foot-text" className="footer-text">this website was created by me, <a id="foot-name-link" target="_blank" href="https://josephkisbye.com/">Joseph Kisbye</a>. Copyright {d}</p>

            </div>
        </footer>
        </div>
}

export default Footer;