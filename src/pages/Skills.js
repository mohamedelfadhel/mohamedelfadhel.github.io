import React from 'react'

const Skills = () => (
    <div>
        <div className="content has-text-centered">
            <h2 className="title is-2">Experience</h2>
            <div className="columns is-centered">
                <div className="column is-3 has-text-centered">
                    <i style={{color:'#ffdb4a'}} className="far fa-lightbulb fa-5x"></i>
                    <br/>
                    <h3 className="title is-3">Ideas</h3>
                    <p>I collaborate with clients and peers to nurture and transform ideas into well thought out design specs. After all, that's where the majority of amazing user experiences start.</p>
                </div>
                <div className="column is-3 has-text-centered">
                    <i style={{color:'#ffdb4a'}} className="fas fa-magic fa-5x"></i>
                    <br/>
                    <h3 className="title is-3">Design</h3>
                    <p>I wireframe interfaces focusing on content structure, intuitive UI patterns and simple interactions. I'm a minimalist who truly believes that less is more.</p>
                </div>
                <div className="column is-3 has-text-centered">
                    <i style={{color:'#ffdb4a'}} className="fas fa-code fa-5x"></i>
                    <br/>
                    <h3 className="title is-3">Code</h3>

                    <p>I design in the browser with HTML(5), CSS(3) and JavaScript. I love coding things from scratch, but I can work with front-end frameworks like Bootstrap too.</p>
                </div>
            </div>
            <hr/>
            <div className="columns is-centered">
                <div className="column is-3 content ">
                    <h5 className="title is-4">Languages</h5>

                        <p>JavaScript, HTML(5), CSS(3), PHP, Python, SQL</p>

                </div>
                <div className="column is-3 content ">
                    <h5 className="title is-4">Libraries</h5>
                    <p>ReactJs, D3, Sigmajs, Material UI, Styled-components, ImmutableJs, Lodash, Redux-Saga, React-Router, Reselect</p>
                </div>

                <div className="column is-3 content ">
                    <h5 className="title is-4">Frameworks</h5>
                    <p>Redux, Angular, Draft.js, Symfony , Laravel , ExpressJs ,.NET, JQuery</p>
                </div>
            </div>


        </div>

    </div>
);
export default Skills