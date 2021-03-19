import React from 'react'
import Common from './Common'
import web from '../src/images/about.jpg'

const About = () => {
    return (
        <div>
            <Common 
            about='About Me' 
            info = 'Web Developer with a passion to create responsive web and mobile applications with main focus on modern JavaScript frameworks'
            imgsrc={web} 
            visit='/contact' 
            btname='Contact Now' />
        </div>
    )
}

export default About
