
import React from 'react';
import {Row,Col,Container} from 'reactstrap';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const Image4 = require('../assets/images/image4.jpg');
const Image5 = require('../assets/images/image5.jpg');
const Image6 = require('../assets/images/image6.jpg');

function Electronic ({data1}){
  const fewData1 = data1.splice(0,3)

    return(

        <div>
        {/*<Container className = "outer-container-electronics">
        
            <h1 className = "item-title">ELECTRONICS</h1>
            <span className = "all-content">
            <Col xs = "auto" > 
              <div className = "all-image1">
              <img src = {Image4} className = "image" />
              <div className = "name-items">
                 <p className = "amount">500,000/= Tsh</p>
                 <p className = "take-item">Laptop</p>
                 <a href = "#"><button type = "submit" className = "buy">
                   BUY <ShoppingCartIcon style = {{marginTop:-5,marginLeft:5}}/>
                 </button>
                 </a>
               </div>
              </div>
            </Col>

            <Col xs = "auto" > 
              <div className = "all-image1">
              <img src = {Image5}  className = "image" />
              <div className = "name-items">
                 <p className = "amount">20,000/= Tsh</p>
                 <p className = "take-item">Head phone</p>
                 <a href = "#"><button type = "submit" className = "buy">
                   BUY <ShoppingCartIcon style = {{marginTop:-5,marginLeft:5}}/>
                 </button>
                 </a>
               </div>
              </div>
            </Col>
             
            <Col xs = "auto"  >
              <div className = "all-image1">
              <img src = {Image6} className = "image" />
              <div className = "name-items">
                 <p className = "amount">700,000/= Tsh</p>
                 <p className = "take-item">Mobile phone</p>
                 <a href = "#"><button type = "submit" className = "buy">
                   BUY <ShoppingCartIcon style = {{marginTop:-5,marginLeft:5}}/>
                 </button>
                 </a>
               </div>
              </div> 
            </Col>
            </span>
            
           <a href = "http://localhost:3000/electronicPage"><button className = "butt-more-men">More...</button></a>
        
    </Container>*/}

<Container className = "outer-container-electronics">
         
         <h1 className = "item-title">ELECTRONICS</h1>
         
         <span className = "all-content" >
         {fewData1.map((one)=>( <Col xs = "auto" >
                           <div className = "all-image1">
                           <img src = {one.image} className = "image" />
                           <div className = "name-items">
                           <p className = "amount">{one.amount}</p>
                           <p className = "take-item">{one.name}</p>
                           <a href = {`/item?name=${one.name}&image=${one.image}&amount=${one.amount}`}>
                           <button type = "submit" className = "buy">
                           BUY <ShoppingCartIcon style = {{marginTop:-5,marginLeft:5}}/>
                           </button>
                            </a>
                           </div>
                           </div>
                           </Col>))}
                           </span>
                           <a href = "http://localhost:3000/electronicPage"><button className = "butt-more-men">
                             More...
                           </button></a>
     
     
      </Container>
        
      </div>
    )
 }

 export default Electronic;