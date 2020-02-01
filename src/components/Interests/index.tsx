import * as React from 'react'
import { Element } from 'react-scroll'

export class Interests extends React.PureComponent {
    render () {
        return (
            <Element name="interests" className="element" >
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
                <div className="w-100">
                    <h2 className="mb-5">Interests</h2>
                    <p className="intrests">Apart from being a Full stack developer, I enjoy most of my time being outdoors.</p>
                    <p className="intrests mb-0">When forced indoors, I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p>
                </div>
            </section>
            </Element>
        )
    }
}