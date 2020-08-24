
import React from 'react';
import {Row,Col} from 'reactstrap';
import SelectProd from '../components/selectProd';

function LeftSign(){

    return(
      
     <form>
        <div className = "form-left-signup">
            <span className = "contact-info">01.</span><span className = "contact-info">Contact Information</span>
                <div className = "content-left-signup">
                <div>
                  <Row>
                  <Col xs = "auto" className = "label-sign-container">
                    <label for = "first-name" className = "label-signUp">
                    First Name
                    </label>
                  </Col>
                  <Col xs = "auto">
                  <input type = "text" id = "first-name" name = "firstName" className = "input_signup" />
                  </Col>
                  </Row>
                </div>

                <div>
                  <Row>
                  <Col xs = "auto" className = "label-sign-container">
                     <label for = "last-name" className = "label-signUp">
                      Last Name
                      </label>
                    </Col>
                  <Col xs = "auto">
                  <input type = "text" id = "last-name" name = "lasttName" className = "input_signup" />
                  </Col>
                  </Row>
                </div>

                <div>
                  <Row>
                  <Col xs = "auto" className = "label-sign-container" >
                    <label for = "phone" className = "label-signUp">
                      Phone
                    </label></Col>
                  <Col xs = "auto">
                  <input type = "text" id = "phone" name = "takePhone" className = "input_signup" />
                  </Col>
                  </Row>
                </div>

                <div>
                  <Row>
                  <Col xs = "auto" className = "label-sign-container">
                      <label for = "email-address" className = "label-signUp">
                          Email address
                      </label>
                  </Col>
                  <Col xs = "auto">
                  <input type = "email" id = "email-address" name = "emailAddress"className = "input_signup" />
                  </Col>
                  </Row>
                </div>

                <div>
                  <Row>
                  <Col xs = "auto" className = "label-sign-container">
                      <label for = "city-region" className = "label-signUp">
                      City/Region
                      </label>
                  </Col>
                  <Col xs = "auto">
                  <input type = "text" id = "city-region" name = "cityRegion"className = "input_signup" />
                  </Col>
                  </Row>
                </div>
         </div>
        </div>

        <div className = "form-left-signup">
            <span className = "contact-info">02.</span><span className = "account-info">ACCOUNT INFORMATION</span>
              <div className = "content-left-signup">
                <div>
                  <Row>  
                  <Col xs = "auto" className = "label-sign-container">
                      <label for = "shop-name" className = "label-signUp">
                          Company/Shop Name
                       </label>
                  </Col>
                  <Col xs = "auto">
                  <input type = "text" id = "shop-name" name = "shopName" className = "input_signup" />
                  </Col>
                  </Row>
                </div>

                <div>
                  <Row>
                  <Col xs = "auto" className = "label-sign-container">
                      <label for = "create_password" className = "label-signUp">
                          Create password
                      </label>
                  </Col>
                  <Col xs = "auto">
                  <input type = "password" id = "create_password" name = "createPassword" className = "input_signup" />
                  </Col>
                  </Row>
                </div>

                <div>
                  <Row>
                  <Col xs = "auto" className = "label-sign-container">
                      <label for = "confirm_password" className = "label-signUp">
                          Confirm Password
                      </label>
                  </Col>
                  <Col xs = "auto">
                  <input type = "password" id = "confirm_password" name = "confirmPassword" className = "input_signup" />
                  </Col>
                  </Row>
                </div>

                <div>
                   <SelectProd />
                </div>

                <div>
                  <Row>
                  <Col xs = "auto" className = "label-sign-container">
                      <label for = "upload-logo" className = "label-signUp">
                          Upload your Logo
                      </label>
                  </Col>
                  <Col xs = "auto">
                  <input type = "" id = "upload-logo" name = "uploadLogo" className = "input_signup" />
                  </Col>
                  </Row>
                </div>

                </div>    
        </div>
        
        <div className = "form-left-signup">
            <span className = "contact-info">03.</span><span className = "account-info">
                AFFILIATE PROGRAM
            </span>
              <div >
              <div className = "text-affiliate">
                This is a leads affiliate program whereby your affiliate will market 
               your products to generate leads whom will have to negotiate with into 
               potential customers
               </div>  

               <div className = "text-affiliate">
                   set a leads target (maximum leads number) your 
                   <span className = "select-btn">
                     <input type = 'number' className = "number-input"/>
                   </span>
                   affiliate must attain to be paid a commision 
               </div>
              
               <div className = "text-affiliate">
                 set amount to be paid to affiliate pef commision
                 <span className = "select-btn">
                 <input type = 'number' className = "number-input"/>
                   </span>
               </div>

              </div>
        </div>

      </form>
    )
}

export default LeftSign;