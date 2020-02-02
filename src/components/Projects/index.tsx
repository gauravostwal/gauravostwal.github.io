import * as React from 'react'
import { Element } from 'react-scroll'

export class Projects extends React.PureComponent {
    render() {
        return (
            <Element name="projects" className="element" >
              <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="projects">
                <div className="w-100">
                  <h2 className="mb-5">Projects</h2>
                  <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                      <h3 className="mb-0">Tribyl</h3>
                      <div className="subheading mb-3">Front End Developer</div>
                      <p className="description">
                        Tribyl is an AI powered B2B platform that helps that helps Reps become experts at 
                        selling into different Industries, Buyers, and Use Cases. Tribyl uses A.I. to create a "live Playbook"​ and actionable case studies that automatically capture the tribal knowledge of your 'A'​ Reps -- by mining call recordings, emails, documents, and notes.
                        This Tribyl-generated content can be incorporated just-in-time in daily workflows and conversations, be it prospecting emails, discovery calls, demos, or fresh stories. 
                        As a result, Sellers become customer experts at scale, driving Productivity.
                      </p>
                      <p className="description">
                        <span className="role-label">Role: </span>
                        <span>
                            Developer a highly reusable frontend using <span className="role-skill">REACT</span> and <span className="role-skill">REDUX</span> that is 
                            well wired up with BackEnd APIs using <span className="role-skill">AXIOS</span>, 
                            implements routing using <span className="role-skill">REACT-ROUTER</span> and <span className="role-skill">WEBPACK</span> for low size bundle
                        </span>
                      </p>
                    </div>
                    <div className="resume-date text-md-right">
                      <span className="text-primary">Jun 2018 - Dec 2018</span>
                    </div>
                  </div>

                  <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                      <h3 className="mb-0">Integrace Healthcare Initiative</h3>
                      <div className="subheading mb-3">Full Stack Developer</div>
                      <p className="description">
                        The Integrace Healthcare Initiative involves conducting of osteology related health camps 
                        across the country where Integrace employees can use the portal to register patients and their diagones as well chemists. 
                        The portal also allows a visual representation of the data collected for better insights.
                      </p>
                      <p className="description">
                        <span className="role-label">Role: </span>
                        <span>
                            Developed a highly reusable frontend using <span className="role-skill">REACT</span> and <span className="role-skill">REDUX</span> that is 
                            well wired up with BackEnd APIs using <span className="role-skill">AXIOS</span>, 
                            implements routing using <span className="role-skill">REACT-ROUTER</span> and <span className="role-skill">WEBPACK</span> for low size bundle. Further,
                            implemented <span className="role-skill">REST APIs</span> in <span className="role-skill">NODEJS</span> and <span className="role-skill">SailsJS</span> with <span className="role-skill">JSON WEB TOKEN</span> for authorisation and used the <span className="role-skill">NON-RELATIONAL DATABASE</span> i.e <span className="role-skill">MONGODB</span> for storing the data and querying with the help of <span className="role-skill">TYPE-ORM</span>.
                        </span>
                      </p>
                    </div>
                    <div className="resume-date text-md-right">
                      <span className="text-primary">Jan 2019 - September 2019</span>
                    </div>
                  </div>

                </div>
              </section>
            </Element>
        )
    }
}