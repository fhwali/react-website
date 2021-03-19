import React, { useState } from 'react'

const Contact = () => {
    const [data, setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        msg: ''
    });

    const InputEvent = (event) => {
        const {name, value} = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name] : value,
                }
             })
        
        }
    const formSubmit = (e) => {
        e.preventDefault();
        alert(
            `My name is ${data.fullname}. 
My Mobile number is ${data.phone}. 
My Email is ${data.email} 
and this is what I have to say 
${data.msg}`
        )
    }
    
    
    return (
        <div>
           <div className="my-4">
               <h1 className="text-center">
                   Contact Me
               </h1>
           </div>
           <div className="container contact_div">
               <div className="row">
                   <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" 
                                    className="form-label">Full Name
                                </label>
                                <input type="text" 
                                    className="form-control" 
                                    id="exampleFormControlInput1" 
                                    name='fullname'
                                    value={data.fullname}
                                    onChange={InputEvent}
                                    placeholder="Enter your Full Name" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" 
                                    className="form-label">Phone Number
                                </label>
                                <input type="number" 
                                    className="form-control" 
                                    id="exampleFormControlInput1" 
                                    name='phone'
                                    value={data.phone}
                                    onChange={InputEvent}
                                    placeholder="Enter your Phone Number"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" 
                                    className="form-label">Email Address
                                </label>
                                <input type="email" 
                                    className="form-control" 
                                    id="exampleFormControlInput1" 
                                    name='email'
                                    value={data.email}
                                    onChange={InputEvent}
                                    placeholder="name@example.com"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" 
                                    className="form-label">Message
                                </label>
                                <textarea className="form-control" 
                                    id="exampleFormControlTextarea1" 
                                    rows="3"
                                    name='msg'
                                    value={data.msg}
                                    onChange={InputEvent}
                                    >
                                </textarea>
                            </div>
                            <div className="col12">
                                <button 
                                    className="btn btn-outline-primary">Submit
                                </button>
                            </div>
                        </form>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Contact
