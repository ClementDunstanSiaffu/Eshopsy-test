
import React from 'react';
import {Row,Col,Container} from 'reactstrap';
import Electronic from './electronic';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Link from 'next/link';
const Image1 = require('../assets/images/image1.jpg');
const Image2 = require('../assets/images/image2.jpg');
const Image3 = require('../assets/images/image3.jpg');

function Shoe ({data}){

  const fewData = data.splice(0,3)
  console.log(fewData)

    return(
    <div>
       {/*<Container className = "outer-container-items">
         
            <h1 className = "item-title">MEN'S SHOES</h1>
            <span className = "all-content">
            <Col xs = "auto" > 
              <div className = "all-image1">
              <img src = {Image1} className = "image" />
               <div className = "name-items">
                 <p className = "amount">30,000/= Tsh</p>
                 <p className = "take-item">Vans</p>
                 <a href = "#"><button type = "submit" className = "buy">
                   BUY <ShoppingCartIcon style = {{marginTop:-5,marginLeft:5}}/>
                 </button>
                 </a>
               </div>
              </div>
            </Col>

            <Col xs = "auto" > 
              <div className = "all-image1">
              <img src = {Image2}  className = "image" />
              <div className = "name-items">
                 <p className = "amount">20,000/= Tsh</p>
                 <p className = "take-item">All star</p>
                 <a href = "#"><button type = "submit" className = "buy">
                   BUY <ShoppingCartIcon style = {{marginTop:-5,marginLeft:5}}/>
                 </button>
                 </a>
               </div>
              </div>
            </Col>
             
            <Col xs = "auto"  >
              <div className = "all-image1">
              <img src = {Image3} className = "image" />
              <div className = "name-items">
                 <p className = "amount">50,000/= Tsh</p>
                 <p className = "take-item">Suede</p>
                 <a href = "#"><button type = "submit" className = "buy">
                   BUY <ShoppingCartIcon style = {{marginTop:-5,marginLeft:5}}/>
                 </button>
                 </a>
               </div>
              </div> 
            </Col>
            </span>
            
           <a href = "http://localhost:3000/shoePage"><button className = "butt-more-men">More...</button></a>
        
    </Container> */}
        
       
        <Container className = "outer-container-items">
         
            <h1 className = "item-title">MEN'S SHOES</h1>
            
            <span className = "all-content" >
            {fewData.map((one)=>( <Col xs = "auto" >
                              <div className = "all-image1">
                              <img src = {one.image} className = "image" />
                              <div className = "name-items">
                              <p className = "amount">{one.amount}</p>
                              <p className = "take-item">{one.name}</p>
                              <a href = {`/item?name=${one.name}&image=${one.image}&amount=${one.amount}`}>
                              <button type = "submit" className = "buy"   >
                              BUY <ShoppingCartIcon style = {{marginTop:-5,marginLeft:5}}/>
                              </button>
                               </a>
                              </div>
                              </div>
                              </Col>))}
                              </span>
                              <a href = "http://localhost:3000/shoePage"><button className = "butt-more-men">
                                More...
                              </button></a>
        
        
         </Container>
        

    </div>
    )
}

export default Shoe;