import React from 'react'
import HeadShake from 'react-reveal/HeadShake';
import Fade from 'react-reveal/Fade';
import "./style.css/About.css"

function About() {
    return (
        <>
        <div className="aboutName">

        </div>
            <div className="about" id='about'>
                <HeadShake>

                <div className="abtimg">
                    <img src={require('../Component/asset/abtimg.jpeg')} alt="" />
                </div>
                </HeadShake>
                <div className="phara">
                    <Fade right>

                  
                    <p>
                        Hello, I'm Nayan, a Mechanical Engineer turned web developer passionate about crafting exceptional digital experiences. With a strong foundation in HTML, CSS, JavaScript, Bootstrap, Python, React, MongoDB, Node.js, and Express.js, I bring a unique blend of technical expertise and analytical thinking to my projects. My background in Mechanical Engineering enhances my problem-solving skills, allowing me to approach web development with a meticulous and innovative mindset. Let's collaborate on building impactful solutions that stand out in the digital landscape.


                    </p>
                    </Fade>
                </div>
            </div>
        </>
    )
}

export default About