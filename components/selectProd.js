
import React from 'react';
import {Row,Col} from 'reactstrap';


function SelectProd(){
  
    return(
        <div>
            <Row>
            
            <Col xs = "auto" className = "label-sign-container">
            <label for = "select-prod" className = "label-signUp">Select Prod Category</label>
            </Col>

            <Col xs = "auto">
            <select type = "select" id = "select-prod" className = "select_prod" >
             <option>  </option>
             <option>Clothes</option>
             <option>Bags</option>
             <option>Shoe</option>
             <option>Books</option>
             <option>Electronics</option>
            </select>
            </Col>

            </Row>
        </div>
    )

}

export default SelectProd