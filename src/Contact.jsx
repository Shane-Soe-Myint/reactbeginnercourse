import React, { useEffect, useRef } from 'react';

export const Contact = () => {
  const buttonRef = useRef();

  useEffect(() => {
    const applyContainerProperties = () => {
        buttonRef.current.classList.add("effect-container");
    };

    const applyStyle = (e) => {
        const {offsetX, offsetY} = e;
        const {style} = buttonRef.current;
        const sizeOffset = 50;

        style.setProperty("--effect-top", `${offsetY - sizeOffset}px`);
        style.setProperty("--effect-left", `${offsetX - sizeOffset}px`);
    }

    const onClick = (e) => {
        buttonRef.current.classList.remove("active");
        applyStyle(e);
        buttonRef.current.classList.add("active");
    }

    applyContainerProperties();

    buttonRef.current.addEventListener("mouseup", onClick);

    const cleanupRef = buttonRef.current;

    return () => {
        cleanupRef.removeEventListener("mouseup", onClick);
    };
  })

  return (
    <div>
        <div className="slideTitleGroup contactTitle">
            <div className="secondsCourseTitle">Best no-tricks pricing</div>
            <p className="secondsCourseP slideP">
              If you are not satisfied, contact us within the first 30 days and we will send you a full refund.
            </p>
        </div>

        <div className="contactBox">
          <div className="contactLeft">
            <div className="contactBoxTitleGrp">
              <div className="secondsTitle contactBoxTitle">React Course Membership</div>
              <p className="secondsP contactBoxP">
                Our Course Package offers full access to the React Course,
                including all course materials, assignments, and projects.
              </p>
            </div>

            <div className="contactBoxMidGrp">
              <h3 className="boxsTitles">What is included</h3> <hr/>
            </div>

            <div className="contactBoxBottomGrp">
              <div className="contBoxBottomOneGrp">
                <div>
                  <i className="fa-solid fa-check"></i>
                  <p className="secondsP"  style={{display:"inline",marginLeft:"20px"}}>
                    25 Classes
                  </p>
                </div>

                <div>
                  <i className="fa-solid fa-check"></i>
                  <p className="secondsP"  style={{display:"inline",marginLeft:"20px"}}>
                    Expert-led instruction
                  </p>
                </div>
              </div>

              <div className="contBoxBottomOneGrp">
                <div>
                  <i className="fa-solid fa-check"></i>
                  <p className="secondsP"  style={{display:"inline",marginLeft:"20px"}}>
                    200 Learning hours
                  </p>
                </div>

                <div>
                  <i className="fa-solid fa-check"></i>
                  <p className="secondsP"  style={{display:"inline",marginLeft:"20px"}}>
                    Certificate of completion
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="contactRight">
            <h3 className="boxsTitles contactRBoxTitle">Pay once, own it forever</h3>
            <div className="homeContact contactRightBoxBigTitle">
                <h1>$399</h1>
            </div>
            <div className="homeContact contactRightBoxBtn">
                <button ref={buttonRef} className="amazonSecP">GET ACCESS</button>
            </div>
            <p className="secondsP">
                Get a free sample (20MB)
            </p>
          </div>
        </div>
    </div>
  )
}
