import React from 'react';
import {NavLink} from 'react-router-dom';
import '../Css/ContactStyle.css';
const Contact=()=>{
    return(
        <>
    <h1>contact us</h1>
    <form className="contact">
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter your name"/>
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter your email"/>
        </div>
        <div>
  <label htmlFor="password">password</label>
  <input 
    type="password"
    placeholder="Enter your password"
    oninput="this.setAttribute('value', this.value);" 
    value="" 
  />
</div>
        <div>
            <label htmlFor="mobile">Mobile</label>
            <input type="text" placeholder="Enter your mobile"/>
        </div>
        <div className="btnBox">
               <div className="btn">
               <NavLink to="/"className="readmore"
               >Submit Details</NavLink>
                </div> 
            </div>
    </form>
        </>
    )
}
export default Contact;