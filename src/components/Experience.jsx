import React from 'react'
import '../styles/components/experience.scss'

const Experience = ({xpRef}) => {
    return (
        <div ref={xpRef} className="xp-wrapper">
            <h1 className="title">MY EXPERIENCE</h1>
            <div className="grid-wrapper">

            <div className="grid-logos">
                <div className="item">
                    <img src="./assets/img/html5.svg" alt="logo" />
                </div>
                <div className="item">
                    <img src="./assets/img/css-3.svg" alt="logo" />
                </div>
                <div className="item">
                    <img src="./assets/img/javascript.svg" alt="logo" />
                </div>
                <div className="item">
                    <img src="./assets/img/java.svg" alt="logo" />
                </div>
                <div className="item">
                    <img src="./assets/img/materialui.svg" alt="logo" />
                </div>
                <div className="item">
                    <img src="./assets/img/nodejs.svg" alt="logo" />
                </div>
                <div className="item">
                    <img src="./assets/img/express.svg" alt="logo" />
                </div>
                <div className="item">
                    <img src="./assets/img/typescript.svg" alt="logo" />
                </div>
                <div className="item">
                    <img src="./assets/img/mongodb.svg" alt="logo" />
                </div>
                <div className="item">
                    <img src="./assets/img/react.svg" alt="logo" />
                </div>
                <div className="item">
                    <img src="./assets/img/sass.svg" alt="logo" />
                </div>
                <div className="item">
                    <img src="./assets/img/github.svg" alt="logo" />
                </div>
            </div>
                        
            </div>
        </div>
    )
}

export default Experience
