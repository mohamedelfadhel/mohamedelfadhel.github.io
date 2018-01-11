import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import 'particles.js/particles'
const particlesJS = window.particlesJS
import particlesConfig from './particlesConfig.json'
import General from '../pages/General'
import Skills from '../pages/Skills'
import Professional from '../pages/Professional'


import './index.css'
import 'bulma/bulma.sass'
import '../static/svg-with-js/js/fontawesome-all'

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Gatsby
        </Link>
      </h1>
    </div>
  </div>
)

class TemplateWrapper extends Component{
  constructor(children){
    super(children)
  }
    componentDidMount(){
      particlesJS('particles-js',particlesConfig);
  }
render(){
  return(
  <div>
    <Helmet
      title="Med elfadhel ELHACHEMI | Front End Developer"
      meta={[
        { name: 'description', content: 'I\'m a Front End Developer / UX Developer and a Student in my last year of a CS Engineering Degree. ' },
        { name: 'keywords', content: 'Front End Developer, Internship, UX developer, Junior developer, web developer, react developer, redux, tunisia, tunisie, stage web, stage fin d\'études, developeur front end, stage front end ' },
        { name: 'ROBOTS', content: 'INDEX,NOFOLLOW' },
      ]}
    />
    <div id={"particles-js"} />
    <section className="section">
        <div className="container">
        {this.props.children()}
        </div>
    </section>
    <section className="section General">
        <div className="container">
            <General />
        </div>
    </section>
    <section className="section Skills">
        <div className="container">
            <Skills />
        </div>
    </section>
    <section className="section Professional">
        <div className="container">
            <Professional />
        </div>
    </section>
      <section className="section is-medium Contact">
          <div className="container has-text-centered">
              <div className="columns is-centered">
                  <div className="column is-half">
                      <h1 className="title is-3">Want to hire me ?</h1>
                      <h2 className="subtitle is-5">
                          I'm currently looking for an internship and would love to hear from you. Please feel free to contact me.
                      </h2>
                      <a href="mailto:mohamedelfadhel.elhachemi@gmail.com" className="button is-inverted is-outlined">Email Me</a>
                  </div>
              </div>
          </div>
      </section>
      <footer className="footer">
          <div className="container">
              <div className="content has-text-centered">
                  <p>
                      Designed and created by me © 2018
                  </p>
                  <br/>
                  <div className="columns is-mobile is-centered is-gapless ">
                      <div className="column is-1 has-text-centered is-narrow">
                          <div><a className="black-icon" href="https://angel.co/mohamed-elfadhel-elhachemi"><i className="fab fa-angellist fa-lg"></i></a></div>
                      </div>
                      <div className="column is-1 has-text-centered is-narrow">
                          <div><a className="black-icon" href="https://github.com/MedElfadhelELHACHEMI"><i className="fab fa-github fa-lg"></i></a></div>
                      </div>
                      <div className="column is-1 has-text-centered is-narrow">
                          <div><a className="black-icon" href="https://www.linkedin.com/in/mohamedelfadhel-elhachemi/"><i className="fab fa-linkedin fa-lg"></i></a></div>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
      <div className="tooltip">
          <a className="button is-outlined is-inverted analytics" href="javascript:gaOptout();"><i className="fab fa-google"></i></a>
          <span className="tooltiptext">Opt out of Google Analytics</span>
      </div>
  </div>
)
}
} 

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
