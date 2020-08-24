



import React from 'react';
import {Row,Col,Container} from 'reactstrap';
import AllElectronic from '../components/allElectronic';


function ElectronicPage ({data}){

    return(
    <div>
        
        <AllElectronic data = {data}/>

    </div>
    )
}

ElectronicPage.getInitialProps = async ()=>{
    const response = await fetch('http://localhost:3000/api/electronicApi')
    const data = await response.json()
    return {data}
}

export default ElectronicPage;