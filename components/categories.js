

import React,{useEffect,useState} from 'react';
import {Dropdown,DropdownItem,DropdownMenu,DropdownToggle} from 'reactstrap';
const ClothIcon = require('../assets/images/clothIcon.png');
const ShoeIcon = require('../assets/images/shoeIcon.png');
//import ClothIcon from '../assets/images/ClothIcon.PNG';
import LocalMallIcon from '@material-ui/icons/LocalMall';
//import ShoeIcon from '../assets/images/ShoeIcon';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PersonalVideoIcon from '@material-ui/icons/PersonalVideo';








function Categories (){
   const [dropdownOpen,setDropdownOpen] = useState(false);
   const [dropStyle,setDropStyle] = useState("drop-down")

   useEffect(()=>{
       if(dropdownOpen === true){
           setDropStyle("drop-down-active")
       }else{
        setDropStyle("drop-down")
       }
      
   })


   const toggleTrue = ()=>{
       setDropdownOpen(true)
   }
   

   const toggleFalse = ()=>{
       
      setDropdownOpen(false)
       
      
       
   }

   const toggle = ()=>{
       setDropdownOpen(prevState => !prevState)
   }

    return(
        <span>
            <Dropdown className = "show"     isOpen = {dropdownOpen} toggle = {toggle}  
            onMouseOverCapture = {toggleTrue} onMouseLeave = {toggleFalse}>
                   <DropdownToggle tag="span" caret data-toggle="dropdown"  id = "extended-area"
                   aria-expanded={dropdownOpen} className = {`${dropStyle}`}>
                       <span >Categories</span>
                       
                   </DropdownToggle>
                   <DropdownMenu className = "menu">
                       <DropdownItem className = "item" >
                       
                        <img src = {ClothIcon} className = "icon-logo"/>
                        <a className = "word-item"> Clothes</a>
                       
                       </DropdownItem>

                       <DropdownItem className = "item">
                       
                        <LocalMallIcon className = "icon-logo" />
                        <a className = "word-item">Bags</a>
                        
                       </DropdownItem>

                       <DropdownItem className = "item">
                       
                        <img src = {ShoeIcon} className = "icon-logo" />
                        <a className = "word-item">Shoe</a>
                       
                       </DropdownItem>

                       <DropdownItem className = "item">
                      
                        <MenuBookIcon className = "icon-logo"/>
                       <a className = "word-item"> Books</a>
                       
                       </DropdownItem>

                       <DropdownItem className = "item">
                        
                        <PersonalVideoIcon className = "icon-logo"/>
                        <a className = "word-item">Electronics</a>
                        
                       </DropdownItem>
                   </DropdownMenu>
            </Dropdown>
        </span>
    )

}

export default Categories;