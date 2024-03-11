import React, { useState } from 'react';
import amazon from "./images/logo-amazon 3.svg";

export const SimpleSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(1);
        }
    };

    const prevSlide = () => {
        if (currentSlide === 1) {
            setCurrentSlide(0);
        }
    };

    return (
        <div className="slider">
            <div className="slideTitleGroup">
                <div className="secondsCourseTitle">What Students Say</div>
                <p className="secondsCourseP slideP">
                    Discover what our students have to say about our course!
                </p>
            </div>

            <div className="slideBoxGroup" style={{ overflow: 'hidden' }}>
                <div className="slideBox slideBoxOne" style={{ transform: `translateX(-${currentSlide * 100}%)`,width:"100%",height:"100%"}}>
                    <div className="amazonBoxOneContainer">
                        <div className="amazonOneleft">
                            <p>
                                Easy Shopping, Quick Delivery <br/>
                                No need to stress about shopping for books.
                                Order online and have your textbooks and supplies delivered straight to your doorstep for free.
                            </p>
                            <p className="amazonSecP">
                                LOUIS MIRIAM, <span>WEB DEVELOPER @ AMAZON INC.</span>
                            </p>
                        </div>

                        <div className="amazonImg">
                            <img src={amazon} alt="amazonimg"/>
                        </div>
                    </div>
                </div>

                {/* {currentSlide === 1 && ( */}
                    <div className="slideBox slideBoxTwo" style={{ transform: `translateX(-${currentSlide * 100}%)`, width:"100%",height:"100%",marginLeft:"200%"}}>
                        <div className="amazonBoxOneContainer">
                            <div className="amazonOneleft">
                                <p>
                                    Easy Shopping, Quick Delivery <br/>
                                    No need to stress about shopping for books.
                                    Order online and have your textbooks and supplies delivered straight to your doorstep for free.
                                </p>
                                <p className="amazonSecP">
                                    LOUIS MIRIAM, <span>WEB DEVELOPER @ AMAZON INC.</span>
                                </p>
                            </div>

                            <div className="amazonImg">
                                <img src={amazon} alt="amazonimg"/>
                            </div>
                        </div>
                    </div>
             {/* )} */}

                <div className="sliderBtnContainer">
                    <button onClick={prevSlide} style={{backgroundColor:currentSlide === 0?"white":"gray"}}></button>
                    <button onClick={nextSlide} style={{backgroundColor:currentSlide === 1?"white":"gray"}}></button>
                </div>
            </div>

        </div>
    );
  }
