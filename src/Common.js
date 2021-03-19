import React from 'react';
import { NavLink } from 'react-router-dom';
// import web from '../src/images/img2.jpg'

const Common = ({intro,name, imgsrc, visit, btname, info, about}) => {
    return (
        <div>
          <section id='header' className='d-flex align-item-center'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row'>
                        <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                            <h1>
                              {intro}  <strong className='brand-name'> {name} </strong>
                                {about}
                            </h1>
                            <h2 className='my-3'>
                            {info}
                            </h2>
                            <div className='mt-3'>
                                <NavLink to={visit} className='btn-get-started'>{btname}</NavLink>
                            </div>
                        </div>
                        <div className='col-lg-6 order-1 order-lg-2 header-img'>
                        <img src={imgsrc} className='img-fluid animated' alt='Homepage' />

                        </div>
                    </div>
                    </div>
                </div>

          </div>

          </section>
        </div>
    )
}

export default Common;

