import React from "react";
import "../../styles/cat.scss";

const Cat = () => {
  return (
    <div id="cat-container">
     <div className = "cat">
            <div className = "face">
                <div className="ear">
                <div className = "ear-1">
                <div className = "inner-1"></div>
                </div>
                <div className = "ear-r">
                <div className = "inner-2"></div>
                </div>
                </div>

                <div className = "nose">
                    <div className = "l1"></div>
                <div className = "l2"></div>
                <div className="l3"></div>
                <div className="l4"></div>
                </div>
                <div className = "eye-1">
                <div className = "eyeball"></div>
                </div>
                <div className = "eye-r">
                <div className = "eyeball"></div>
                </div>
            </div>
       <div className = "upper-body"></div>
       <div className ="lower-body"></div>
         <div className = "tail"></div>
         <div className = "paw-1"></div>
         <div className = "paw-2"></div>
       <div className = "shadow"></div>
     </div>
   </div>
  )
}

export default Cat
