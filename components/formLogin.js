

import React from 'react';


function FormLogin(){
    return(
        <div className = "outer-container-login">
        <div className = "inner-container-upload">
            <form className = "login-form">
                <div className = "login-phone-container">
                <div className ="login-phone">Phone</div>
                <input type = "text" name = "phone" className = "phone-login" autoComplete = "off" />
                </div>

                <div className = "login-password-container">
                <div className = "login-password">Password</div>
                <input type = "password" name = "price" className = "password" />
                </div>

                 <div className = "submit-butt-login-container">
                <button type = "submit" className = "butt-submit-login">
                <span className = "login-butt-text">Submit</span>
                 </button>
                </div>

                <div className = "last-part">
                    <p className = "privacy">By continuing, you agree to eshopsy's conditions of use and Privacy Notice</p>
                     <h1 className = "new-user">New to eshopsy</h1>

                     <a href = "#" >
                      <div className = "create-new-account">
                         <span className = "text-create-account">Create new account</span> 
                    </div>
                     </a>
                </div>

            </form>
        </div>
     </div>
    )
}

export default FormLogin;