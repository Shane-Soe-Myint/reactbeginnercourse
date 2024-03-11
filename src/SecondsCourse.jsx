import React from 'react'

export const SecondsCourse = () => {
  return (
    <div className="secCourse">
        <div className="secCourseTitleGroup">
            <div className="secondsCourseTitle">Why choose our course?</div>
            <p className="secondsCourseP">
                Discover the unique advantages, benefits, and standout features that set our course apart from the rest.
            </p>
        </div>

        <div className="secCourseMidleGroup">
          <div className="midleBox">
            <div className="midleTitle">Expert Instructors</div>
            <p>
              Learn from industry professionals with years of hands-on experience in React development.
            </p>
          </div>
          {/* ------------------------ */}
          <div className="midleRightContainer">
            <div className="firstMidRight">
              <div><i className="fa-solid fa-cloud"></i></div>
              <div>
                <h3 className="midleBoxsRTitles">React Fundamentals</h3>
                <p>
                  Start with the basics. Understand React's core concepts, component structure, and the virtual DOM.
                </p>
              </div>
            </div>

            <div className="firstMidRight">
              <div><i className="fa-solid fa-chart-pie"></i></div>
              <div>
                <h3 className="midleBoxsRTitles">State and Props</h3>
                <p>
                  Learn how to manage component state and utilize props to pass data between components.
                </p>
              </div>
            </div>

            <div className="firstMidRight">
              <div><i className="fa-solid fa-gear"></i></div>
              <div>
                <h3 className="midleBoxsRTitles">Component Lifecycle</h3>
                <p>
                  Dive into the lifecycle of React components and harness its power to control your application's behavior.
                </p>
              </div>
            </div>
          </div>
        </div>


        <hr/>

        {/* ---------------------ThirdsCourse----------------------- */}
        <div className="secCourseMidleGroup thirdsCourse">

          {/* ------------------------ */}
          <div className="midleRightContainer">
            <div className="firstMidRight">
              <div><i className="fa-solid fa-key"></i></div>
              <div>
                <h3 className="midleBoxsRTitles">Routing with React Router</h3>
                <p>
                  Create single-page applications (SPAs) with seamless navigation using React Router.
                </p>
              </div>
            </div>

            <div className="firstMidRight">
              <div><i className="fa-solid fa-user-group"></i></div>
              <div>
                <h3 className="midleBoxsRTitles">Handling Forms</h3>
                <p>
                  Master form handling in React and manage user input effectively.
                </p>
              </div>
            </div>

            <div className="firstMidRight">
              <div><i className="fa-solid fa-cloud-arrow-down"></i></div>
              <div>
                <h3 className="midleBoxsRTitles">State Management</h3>
                <p>
                  Explore state management options, including local component state and global state using Redux or Context API.
                </p>
              </div>
            </div>
          </div>

          <div className="midleBox thirdMidleBox">
            <div className="midleTitle thirdMidTitle">Supportive Community</div>
            <p>
              Connect with fellow learners, share experiences, and get support from instructors and peers.
            </p>
          </div>
        </div>
    </div>
  )
}
