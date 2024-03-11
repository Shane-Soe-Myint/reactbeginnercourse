import React from 'react'
import courseImg from "./images/online-course.webp";

export const Course = () => {
  return (
    <div className="courseContactContainer">
        <div className="courseImage">
            <img src={courseImg} alt="image" />
        </div>

        <div className="rightSideCourse">
          <div className="upTextCourse">
            <div className="secondsTitle">Online Course</div>
            <p className="courseP">
              In this comprehensive React Course, you'll delve into the world of React,
              from its fundamentals to advanced techniques. Our expert instructors will
              guide you through every step.
            </p>
          </div>

          <div className="bottomTextCourseGroup">
            <div className="box">
              <i className="fa-solid fa-briefcase"></i>
              <h3 className="boxsTitles">Hands-On Projects</h3>
              <p className="secondsP">
                Apply your knowledge to real-world projects, building a robust portfolio.
              </p>
            </div>

            <div className="box">
              <i className="fa-solid fa-graduation-cap"></i>
                <h3 className="boxsTitles">Career Opportunities</h3>
                <p className="secondsP">
                  React developers are in high demand and this course is designed for you!
                </p>
            </div>

            <div className="box">
              <i className="fa-solid fa-circle-check"></i>
                <h3 className="boxsTitles">Flexible Learning</h3>
                <p className="secondsP">
                  Access course materials whenever it suits your schedule.
                </p>
            </div>
          </div>
        </div>
    </div>
  )
}
