


import React from 'react';
import {Row,Col,Container} from 'reactstrap';
import AllBook from '../components/allBook';


function BookPage ({data}){

    return(
    <div>
        
        <AllBook data = {data} />

    </div>
    )
}

BookPage.getInitialProps = async ()=>{
const response = await fetch('http://localhost:3000/api/bookApi')
const data = await response.json()
return {data}
}

export default BookPage;