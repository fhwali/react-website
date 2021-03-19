import React from 'react'

const Card = ({imgsrc, title, info}) => {
    return (
            <>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                  <img src={imgsrc} className="card-img-top" alt={imgsrc}/>
                    <div className="card-body">
                        <h5 className='card-title'> {title} </h5>
                        <p className="card-text font-weight-bold"> {info} </p>
                        {/* <NavLink to="" className='btn btn-primary'> {title} </NavLink> */}
                     </div>
                </div>     
             </div>
            </>
    )
}

export default Card
