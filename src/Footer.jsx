import React, { useState } from 'react'

export const Footer = () => {
    const [focused, setFocused] = useState(false);

    const handleFocus = () => {
        setFocused(true);
    }

    const handleBlur = () => {
        setFocused(false);
    }
    
  return (
    <div className="footerGrp">
        <div className="footerLeftGrp">
            <div className="companyGrp">
                <div className="contactBoxMidGrp companyTitle">
                <h3 className="boxsTitles">Company</h3>
                </div>
                <a className="footA" href="#">
                    <p className="secondsP">
                        About Us
                    </p>
                </a>

                <a className="footA" href="#">
                    <p className="secondsP">
                        Careers
                    </p>
                </a>

                <a className="footA" href="#">
                    <p className="secondsP">
                        Premium Tools
                    </p>
                </a>

                <a className="footA" href="#">
                    <p className="secondsP">
                        Blog
                    </p>
                </a>
            </div>

            <div className="companyGrp">
                <div className="contactBoxMidGrp companyTitle">
                <h3 className="boxsTitles">Pages</h3>
                </div>
                <a className="footA" href="#">
                    <p className="secondsP">
                        Login
                    </p>
                </a>

                <a className="footA" href="#">
                    <p className="secondsP">
                        Register
                    </p>
                </a>

                <a className="footA" href="#">
                    <p className="secondsP">
                        Add List
                    </p>
                </a>

                <a className="footA" href="#">
                    <p className="secondsP">
                        Contact
                    </p>
                </a>
            </div>

            <div className="companyGrp endCompanyGrp">
                <div className="contactBoxMidGrp companyTitle">
                <h3 className="boxsTitles">Legal</h3>
                </div>
                <a className="footA" href="#">
                    <p className="secondsP">
                        Terms
                    </p>
                </a>

                <a className="footA" href="#">
                    <p className="secondsP">
                        Privacy
                    </p>
                </a>

                <a className="footA" href="#">
                    <p className="secondsP">
                        Team
                    </p>
                </a>

                <a className="footA" href="#">
                    <p className="secondsP">
                        About Us
                    </p>
                </a>
            </div>
        </div>

        <div className="footerRightGrp">
            <div>
                <div className="companyGrp footerRInputTitle">Subscribe</div>
                <p className="secondsP">
                    Get access to subscriber exclusive deals and be the first who gets informed about fresh sales.
                </p>
                <label>Your Email</label>
                <div className="inputGrp">
                    <input type="emil" onFocus={handleFocus} onBlur={handleBlur} className={focused?"focused":""} placeholder=""/>
                    <div className={focused?"aniEmail":"aniEmailPlaceholder"}>Email</div>
                </div>
                <div className="homeContact contactRightBoxBtn footBtn">
                    <button className="amazonSecP">BUTTON</button>
                </div>
                <p className="secondsP contactBoxP footerTextArea">
                    I agree the <a href="#">Terms and Conditions</a>
                </p>
            </div>
        </div>
    </div>
  )
}