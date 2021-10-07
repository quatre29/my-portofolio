import React from 'react'
import '../styles/components/passion.scss'

const Passion = ({passionRef}) => {
    return (
        <div ref={passionRef} className="passion-wrapper">
            <h1 className="title">WHAT I DO</h1>
            <div className="items-container">
                <div className="item">
                    <i class="fas fa-laptop item-icon"></i>
                    <h1 className="item-title">TITLE</h1>
                    <p className="item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nobis quaerat dolorum provident obcaecati rerum ad natus sed assumenda perspiciatis?</p>
                </div>
                <div className="item">
                    <i className="fas fa-laptop item-icon"></i>
                    <h1 className="item-title">Title</h1>
                    <p className="item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt illo cumque adipisci error aliquid et saepe, vitae quam? Et, dignissimos?</p>
                </div>
                <div className="item">
                    <i className="fas fa-laptop item-icon"></i>
                    <h1 className="item-title">Title</h1>
                    <p className="item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat sint reprehenderit maxime eveniet amet quaerat odio sunt nihil voluptatibus corrupti.</p>
                </div>
            </div>
        </div>
    )
}

export default Passion
