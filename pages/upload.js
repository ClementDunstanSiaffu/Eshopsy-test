

import React from 'react';

function Upload(){
    return(
        <div className = "outer-container-upload">
           <div className = "inner-container-upload">
               <form className = "upload-form">
                   <div className = "upload-name-container">
                   <div className ="upload-name">Name</div>
                   <input type = "text" name = "name" className = "name-upload" autoComplete = "off" />
                   </div>

                   <div className = "upload-price-container">
                   <div className = "upload-price">Price</div>
                   <input type = "text" name = "price" className = "price" />
                   </div>

                   <div className = "choose-file">
                   <input type = "file" name = "name" id = "name" />
                   </div>

                   <div className = "categories-select-container">
                   <div className = "categories-label">Categories</div>
                   <div className = "for-select-upload-container">
                   <select name = "category" id = "name" className = "for-select-upload">
                     <option>  </option>
                     <option>Clothes</option>
                     <option>Bags</option>
                     <option>Shoe</option>
                     <option>Books</option>
                     <option>Electronics</option>
                   </select>
                   </div>
                   </div>
                  

                   
                       <textarea 
                       type = "text"
                       className = "upload-text"
                       cols = "60" 
                       rows = "5" 
                       style = {{overflow:"hidden",resize:"none"}} 
                      />
                
                    
                    <div className = "submit-butt-upload-container">
                   <button type = "submit" className = "butt-submit-upload">
                   <span className = "upload-butt-text">Submit</span>
                    </button>
                   </div>

               </form>
           </div>
        </div>
    )
}

export default Upload;