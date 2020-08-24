

import React from 'react';
import {Row,Col,Container} from 'reactstrap';
import AllShoe from '../components/allShoe';
import fetch from 'isomorphic-unfetch';


function ShoePage ({data}){

    return(
    <div>
        
        <AllShoe data = {data} />

    </div>
    )
}

ShoePage.getInitialProps = async ()=>{
    const response = await fetch('https://eshopsy.vercel.app/api/shoeApi')
    const data = await response.json()
    return {data}

}

export default ShoePage;