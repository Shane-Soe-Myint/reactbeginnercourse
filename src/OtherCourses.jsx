import React from 'react'
import blog1 from "./images/blog-1.svg";
import blog2 from "./images/blog2.svg";
import blog3 from "./images/blog3.svg";
import blog4 from "./images/blog4.svg";

export const OtherCourses = () => {
  return (
    <div>
        <div className="otherCoursesTitleGrp">
            <div className="secondsTitle">Other Courses</div>
            <p className="courseP">
                Looking to elevate your web development skills?
                Browse through 1,000+ web development courses and
                find the one that fits your needs.
            </p>
        </div>

        <div className="otherCoursesPjGrp">
            <div>
                <img src={blog1} />
                <h3 className="boxsTitles">Future of Web Development: Trends and Innovations</h3>
                <p className="secondsP">
                    Discover the latest trends and innovations shaping the future of web development.
                </p>
                <div className="homeContact contactRightBoxBtn otherCoursesBtn">
                    <button className="amazonSecP">REGISTER FOR FREE</button>
                </div>
            </div>

            <div>
                <img src={blog2} />
                <h3 className="boxsTitles">WebDev Pro Code-a-Thon: Build a Responsive Website</h3>
                <p className="secondsP">
                    Participants will have 48 hours to create a responsive website from scratch using HTML, CSS, and JavaScript.
                </p>
                <div className="homeContact contactRightBoxBtn otherCoursesBtn">
                    <button className="amazonSecP">REGISTER FOR FREE</button>
                </div>
            </div>

            <div>
                <img src={blog3} />
                <h3 className="boxsTitles">Ask the Experts: Frontend Web Development</h3>
                <p className="secondsP">
                    Join our live Q&A session with our experienced instructors. Get answers to your queries, insights into best practices.
                </p>
                <div className="homeContact contactRightBoxBtn otherCoursesBtn">
                    <button className="amazonSecP">GET TICKET</button>
                </div>
            </div>

            <div>
                <img src={blog4} />
                <h3 className="boxsTitles">Web Accessibility: Building Inclusive Websites</h3>
                <p className="secondsP">
                    Industry experts will discuss the importance of inclusive design and share strategies for creating websites.
                </p>
                <div className="homeContact contactRightBoxBtn otherCoursesBtn">
                    <button className="amazonSecP">GET TICKET</button>
                </div>
            </div>
        </div>
    </div>
  )
}
