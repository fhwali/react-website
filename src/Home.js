import React from 'react';
import Common from './Common'
// import { NavLink } from 'react-router-dom';
import web from '../src/images/homepage.jpg'

const Home = () => {
    return (
        <div>
        <div>

        </div>
          <Common 
                intro = "I'm"
                name = 'Fakhar Hanif'
                info = "Accessibility is the degree to which anyone can access and use a website using any web browsing technology."
                imgsrc = {web}
                visit = '/service'
                btname = 'Get Started' />
         </div>                       
    )
}

export default Home;
