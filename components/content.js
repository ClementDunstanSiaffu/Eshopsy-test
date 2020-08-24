
import React,{Fragment,useEffect,useState} from 'react';
import {useSpring,animated} from 'react-spring';
//import Animate from 'animate.css-react';
import {Animated} from 'react-animated-css';
import Categories from './categories';
//import 'animate.css/animate.css'
function Content({show}){
    //const props = useSpring({marginLeft:100,from:{marginLeft:0}})
    const [makeStyle,setMakeStyle] = useState("content1")


    useEffect(()=>{
        if(show === true){
            setMakeStyle("content")
        }else{
            setMakeStyle("content1")
        }
    })


    return(
    <Fragment>
     {/*<Animated  animationIn="fadeInLeft" animationOut="fadeOutLeft" isVisible={show}
    animationInDuration = {1000} animationOutDuration = {1000}></Animated>*/}
     
     <span className = {`${makeStyle}`}>
      <span className = "categories"><Categories /></span>
      <span className = "my-account">My Account</span>
      <span className = "my-help">Help</span>
    </span>
    </Fragment> 
    
    )
}
  

export default Content;