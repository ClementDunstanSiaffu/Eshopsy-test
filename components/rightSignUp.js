

import React from 'react';
import {Row,Col} from 'reactstrap';
const VodaIcon = require('../assets/images/vodaIcon.png')
const  TigoIcon = require('../assets/images/tigoPesa.png')
const AirtelIcon = require('../assets/images/airtel-money.png')

function RightSign(){

    return(
      
     <form>
        <div className = "form-right-signup">
           
            <span className = "contact-info">04.</span><span className = "account-info">PROGRAM AGREEMENT WITH AFFILIATE</span>
                <div className = "content-right-signup">
                
                <div className = "merchant-container-signup">
                 <div >
                    <span className = "merchant-bio">Merchant Bio;</span><span className = "merchant-des">Give a description of your affiliate program,products
                        you sell,lead target,commisions offered.This allows affiliates to learn about your business
                        more.Your Bio may be updated.
                    </span>
                 </div>
                 <div>
                     <input type = "text" className = "merchant-input"/>
                 </div>
                </div>

               
                <div className = "regulation-container">
                <div className = "merchant-des">
                   List here any restrictions or regulations you would like your affiliates to follow.Please list brand
                    marketing restrictions if any.
                 </div>
                 <div>
                     <input type = "text"  className = "merchant-input"/>
                 </div>
                </div>

                
                <div className = "affilate-approval-conatiner">
                <span className = "merchant-bio">affiliate approval strategy;</span >
                <span className = "merchant-des">
                Once affiliates apply to your program,you will be notified direcly to your account.you will have to 
                view and approve the affiliates profile before you can approve or reject them to with your program.
           
                </span>
                </div>
                 
                <div className = "pay-container">
             
                <span className = "pay-info">05.PAYEMENTS INFORMATION </span>  
               
                 <div className = "merchant-des">
                 You will have to pay commmisions to your affiliates as soon as possible directly to eshopsy.com
                 account.Failure to pay commisions within the required time,your account will temporary blocked.
                 The commisions will be then paid from our account to affiliates account within the required time.Please
                 select one of the payements below. 
                </div>
                 <Row>
                    <Col xs = "auto"><img src = {VodaIcon} style= {{width:100,marginTop:10}} /></Col>
                    <Col xs = "auto"><img src = {TigoIcon} className = "tigo-icon"  /></Col>
                    <Col xs = "auto"><img src = {AirtelIcon} className = "airtel-icon"  /></Col>

                 </Row>
                </div>


                </div>
                </div>

      </form>
    )
}

export default RightSign;