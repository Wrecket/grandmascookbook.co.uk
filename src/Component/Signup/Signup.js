import React from 'react';
import { Link } from 'react-router-dom';
import "tachyons";
import "./Signup.css";



const Signup = () => {
  
        return ( 
            <div className="Signup__wrap" >
                <article className="Login br2 ba dark-gray shadow b--black-10 mv4 w-100 w-50-m w-25-l mw7 center">
                    <main className="pa3 pt-5 pb-5 black-80">
                    <form className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Sign up</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                            <input className="pa2 input-reset ba hover-white w-100" type="text" name="name"  id="name"/>
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba hover-white w-100" type="email" name="email-address"  id="email-address"/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="confirm-password">Confirm Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="confirm-password"  id="confirm-password"/>
                        </div>
                        </fieldset>
                        <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign up"/>
                        </div>
                        <Link to="/login"><input className="b mr-3 mt-3 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Log In"/></Link>
                        <Link to="/"><input className="b mt-3 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Cancel"/></Link>
                        <div className="lh-copy mt3">
                        {/* <a href="#0" className="f6 link dim black db">Sign up</a>
                        <a href="#0" className="f6 link dim black db">Forgot your password?</a> */}
                        </div>
                    </form>
                    </main>
                </article>
            </div>
         );
    }


    
 
export default Signup;