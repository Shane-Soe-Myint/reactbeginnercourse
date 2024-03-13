import { useRef } from "react";
import { useEffect, useState } from "react";
import { Course } from "./Course";
import { SecondsCourse } from "./SecondsCourse";
import {SimpleSlider} from "./Slider";
import { Contact } from "./Contact";
import { OtherCourses } from "./OtherCourses";
import { Footer } from "./Footer";
import { Developer } from "./Developer";

function App() {
    const [menuShow, setMenuShow] = useState(false);
    const overLayContainerRef = useRef(null);
    const [scrolling, setScrolling] = useState(false);

    const buttonRef = useRef();

    const handler = () => {
        setMenuShow(!menuShow);
    }

    useEffect(() => {

        const scrollHandler = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
                setMenuShow(false);
            } else {
                setScrolling(false);
                setMenuShow(false);
            }
        };

        window.addEventListener("scroll", scrollHandler);
        return()=> {
            window.removeEventListener("scroll", scrollHandler);
        }
    })

    useEffect(() => {
        const outSideClick = (event) => {
            if (
                overLayContainerRef.current &&
                !overLayContainerRef.current.contains(event.target)
            ) {
                setMenuShow(false);
            }
        };

        document.addEventListener("click", outSideClick);
        return() => {
            document.removeEventListener("click", outSideClick);
        }
    }, []);

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
            <div className={`navBarContainer ${scrolling?"scrolled":"navBarContainer"}`} ref={overLayContainerRef}>
                <div className="logoContainer"><h3>Logo</h3></div>

                <div className={`navBarMenuContainer ${scrolling?"scrolled":""}`}>
                    <a href="#">Home</a>
                    <a href="#course">Course</a>
                    <a href="#contact">Contact Us</a>
                </div>

                <div className={`hamburgerContainer ${menuShow?"showOverLay":""}`} onClick={handler}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div className={`overLayContainer ${menuShow?"showOverLay":""}`}>
                    <a href="#"><h3>Home</h3></a>
                    <a href="#course"><h3>Course</h3></a>
                    <a href="#contact"><h3>Contact Us</h3></a>
                </div>
            </div>

            <div className="homeContainer">

                <div className="homeContact">
                    <h1>Master the Power of React Beginner Course</h1>
                    <p>
                        Our React Course is your gateway to becoming a proficient React developer.
                        Learn to build dynamic and interactive web applications using one of the most
                        popular JavaScript libraries in the industry.
                    </p>

                    <button ref={buttonRef}>ENROLL TODAY</button>
                    
                </div>
            </div>

            <div className="courseContainer" id="course">
                <Course />
            </div>

            <div className="secondsCourseContainer">
                <SecondsCourse />
            </div>

            <div className="sliderContainer">
                <SimpleSlider />
            </div>

            <div className="ContactContainer" id="contact">
                <Contact />
            </div>

            <div className="otherCourses">
                <OtherCourses />
            </div>

            <div className="footerContainer">
                <Footer />
            </div>

            <div className="developerMeContainer">
                <Developer />
            </div>
        </div>
    )
}



export default App;