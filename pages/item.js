
import React,{useEffect,useState} from 'react';
import decodeUriComponent from 'decode-uri-component';
import Head from 'next/head';
import Header from '../components/header';
import {Row,Col} from 'reactstrap';
const queryString = require('query-string');



 function OneItem({locationbar}){
   const [name,setName] = useState('');
   const [image,setImage] = useState('');
   const [amount,setAmount] = useState('');

    useEffect(()=>{
       //const okay = decodeUriComponent()
       const okay2 = queryString.parse(location.search)
       console.log(okay2)
       setName(okay2.name)
       setImage(okay2.image)
       setAmount(okay2.amount)
    })

   
   

    /*const categories = query.category
    console.log(categories)*/

    /*const router = useRouter()
    const {obj} = router.query
    console.log(obj)*/


     return(
            <div style = {{overflowX:"hidden"}}>
               <Head>
                  <title>eshopsy</title>
               </Head>
               <div>
                <Header />
                
                <Row>
                <Col xs = "auto" className = "container-one-item">
                  <div className = "container-image-one-item">
                  <img src = {image} className = "image-one-item" />
                  </div>
                </Col>

                <Col xs = "auto" className = "container-one-item">
                   <div>
                   <p className = "one-item-name">{name.toUpperCase()}</p>
                   <p className = "one-item-text">
                   This is the best shoe for all gender.This shoe was made in Uk.
                   vans is the trending brand in the world right now.This shoe was made
                   with hard materials which give assurance of long life span.
                   </p>
                   <p className = "one-item-amount">{amount}</p>
                   <button className = "one-item-buy">BUY</button>
                   </div>
                
                </Col>

                </Row>

                </div>
            </div>
     )
}



export default OneItem