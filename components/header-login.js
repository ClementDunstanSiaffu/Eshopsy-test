

import React,{useState,useEffect} from 'react';
import HumbergerMenu from 'react-hamburger-menu';
import Content from './content';
import PersonIcon from '@material-ui/icons/Person';
import {Animated} from 'react-animated-css';
import Head from 'next/head'

function HeaderLogin(){
const [open,setOpen] = useState(false)
const [show,setShow] = useState(false)
const [style,setStyle] = useState("eshop")
const [search,setSearch] = useState("container-search")

useEffect(()=>{
    if (show === true){
        setStyle("eshopsy-login")
        setSearch("container-search-two-login")
        
      }else{
          setStyle("eshop-login")
          setSearch("container-search-login")
      }
})

const handleClick = ()=>{
    if(open ==! true){
        setOpen(true)
        setShow(true)
    }else{
        setOpen(false)
        setShow(false)
    }
}
    return(
        <div>
             <Head>
        <title>eshopsy</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />

      </Head>
      
        <div className = "header">
            
            <div className = "back" >
            <button className = "humb-button" onClick = {handleClick}>
            <HumbergerMenu 
            isOpen={open}
            menuClicked={handleClick}
            width={22}
            height={11}
            strokeWidth={2}
            rotate={0}
            color='black'
            borderRadius={0}
            animationDuration={0.5}
            className = "icon"
            
            />
            </button>
            </div>
        
          <Content show = {show} />
          <span className = {`${style}`}>eshopsy.com</span>
         
            
         
           <div>
               <span  className = "put-right">
               <span className="sign-up">Sign up</span>
               <span className="login"><PersonIcon style={{marginTop:-7}}/>Login</span>
               </span>
            </div>

            
                <span className = {`${search}`}>
                 <input type = "text" placeholder = "search" className = "input-search-login"/>
                 <button className = "butt-search-login">Search</button>
                </span>
                

           
        </div>
        </div>
    )
}

export default HeaderLogin;