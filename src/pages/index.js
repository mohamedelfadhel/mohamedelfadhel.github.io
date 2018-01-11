import React, {Component} from 'react'
import scrollToElement from 'scroll-to-element';
import './index.sass'
import profileImg from './profileImg.png'
import Resume from '../static/Medelfadhel.elhachemi-Resume.pdf'
import General from './General'
import Skills from './Skills'
import Professional from './Professional'

class IndexPage extends Component{
    constructor(){
        super()
    }


    render(){
        return (
            <div className="index-section">
                <nav className="navbar is-transparent is-fixed-top">
                    <div className="navbar-menu">
                        <div className="navbar-end">
                            <a onClick={()=>{scrollToElement('.General')}} className="navbar-item">Who am I ?</a>
                            <a onClick={()=>{scrollToElement('.Skills')}} className="navbar-item">Experience</a>
                            <a onClick={()=>{scrollToElement('.Professional')}} className="navbar-item">Work</a>
                            <hr className="navbar-divider" />
                            <div className="navbar-item">
                                <div className="field is-grouped">
                                    <p className="control">
                                        <a className="button is-success is-outlined" href={Resume} download>
                                            <span>Resume PDF</span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="columns is-centered">
                    <div className="column has-text-centered Index-text is-4">
                        <h1 className="title is-1 has-text-white is-spaced has-text-weight-light">Front-End Developer</h1>
                        <p className=" subtitle has-text-white has-text-weight-light">Hello, I'm Med elfadhel. I'm a Front End Developer / Student looking for an internship at an exciting company.
                            <br/>Contact me.</p>
                        <figure className="image profile-image">
                            <img src={profileImg} alt="Med elfadhel Profile picture" />
                        </figure>
                        <a style={{marginTop:'10%',color:'white'}} onClick={()=>{scrollToElement('.General')}}><i className="fas fa-chevron-down fa-2x"></i></a>

                        <div className="columns is-mobile is-centered icon-bar">
                            <div className="column is-2 is-2-mobile is-2-tablet has-text-centered">
                                <div><a className="white-icon" href="mailto:mohamedelfadhel.elhachemi@gmail.com"><i className="fas fa-envelope fa-lg"></i></a></div>
                            </div>
                            <div className="column is-2 is-2-mobile is-2-tablet has-text-centered">
                                <div><a className="white-icon" href="https://angel.co/mohamed-elfadhel-elhachemi"><i className="fab fa-angellist fa-lg"></i></a></div>
                            </div>
                            <div className="column is-2 is-2-mobile is-2-tablet has-text-centered">
                                <div><a className="white-icon" href="https://github.com/MedElfadhelELHACHEMI"><i className="fab fa-github fa-lg"></i></a></div>
                            </div>
                            <div className="column is-2 is-2-mobile is-2-tablet has-text-centered">
                                <div><a className="white-icon" href="https://www.linkedin.com/in/mohamedelfadhel-elhachemi/"><i className="fab fa-linkedin fa-lg"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }

}

export default IndexPage
