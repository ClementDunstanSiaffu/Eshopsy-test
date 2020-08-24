
import React from 'react';
import {Col} from 'reactstrap';
import LeftSign from '../components/leftSignUp';
import RightSign from '../components/rightSignUp';

function Sign(){
  
    return(

        <div className = "outer-container-sign">
           
                <div className = "row-sign">
                    <Col xs = "auto" className = "container-left-signup">
                        <h1 className = "text-left-signup">MERCHANT SIGNUP FORM</h1>
                        <LeftSign />
                    </Col>

                    <Col xs = "auto" className = "container-right-signup">
                      
                        <RightSign />
                    </Col>

                </div>
         </div>
        
    )

}

export default Sign; 