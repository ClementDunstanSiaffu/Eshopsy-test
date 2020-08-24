


import React from 'react';
import {Row,Col,Container} from 'reactstrap';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const Image7 = require('../assets/images/image7.jpg');
const Image8 = require('../assets/images/image8.jpg');
const Image9 = require('../assets/images/image9.jpg');

function Book ({data2}){

  const fewData2 = data2.splice(0,3)

    return(

        <div>
        {/*<Container className = "outer-container-books">
        
            <h1 className = "item-title">BOOKS</h1>
            <span className = "all-content">
            <Col xs = "auto" > 
              <div className = "all-image1">
              <img src = {Image7} className = "image" />
              <div className = "name-items">
                 <p className = "amount">70,000/= Tsh</p>
                 <p className = "take-item">Psychology of money</p>
                 <a href = "#"><button type = "submit" className = "buy">
                   BUY <ShoppingCartIcon style = {{marginTop:-5,marginLeft:5}}/>
                 </button>
                 </a>
               </div>
              </div>
            </Col>

            <Col xs = "auto" > 
              <div className = "all-image1">
              <img src = {Image8}  className = "image" />
              <div className = "name-items">
                 <p className = "amount">50,000/= Tsh</p>
                 <p className = "take-item">Heart in the sea</p>
                 <a href = "#"><button type = "submit" className = "buy">
                   BUY <ShoppingCartIcon style = {{marginTop:-5,marginLeft:5}}/>
                 </button>
                 </a>
               </div>
              </div>
            </Col>
             
            <Col xs = "auto"  >
              <div className = "all-image1">
              <img src = {Image9} className = "image" />
              <div className = "name-items">
                 <p className = "amount">10,000/= Tsh</p>
                 <p className = "take-item">Milk and honey</p>
                 <a href = "#"><button type = "submit" className = "buy">
                   BUY <ShoppingCartIcon style = {{marginTop:-5,marginLeft:5}}/>
                 </button>
                 </a>
               </div>
              </div> 
            </Col>
            </span>
            
           <a href = "http://localhost:3000/bookPage"><button className = "butt-more-men">More...</button></a>
        
    </Container>*/}


<Container className = "outer-container-books">
         
         <h1 className = "item-title">BOOKS</h1>
         
         <span className = "all-content" >
         {fewData2.map((one)=>( <Col xs = "auto" >
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
                           <a href = "http://localhost:3000/bookPage"><button className = "butt-more-men">
                             More...
                           </button></a>
     
     
      </Container>
        
      </div>
    )
 }

 export default Book;