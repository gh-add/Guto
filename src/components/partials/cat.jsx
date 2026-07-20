import React, { useEffect } from "react";
import "../../styles/catani.scss";
import "../../styles/cat.css";
import "../../styles/c.css";

const Cat = () => {
    useEffect(() => {
    const noses = document.querySelectorAll(".nose");
  
    noses.forEach((nose) => {
        const cat = nose.closest(".cat"); // acha o gato "pai" daquele nariz específico
    
        nose.addEventListener('mouseenter', () => {
        cat.classList.add('tail-wave');
        });
        nose.addEventListener('mouseleave', () => {
        cat.classList.remove('tail-wave');
        });
    });
    }, []);

  return (
    <div id="cat-container">
     <div className = "cat">
       <div className = "face-side">
         <div className = "ear-1-side">
           <div className = "inner-1-side"></div>
         </div>
         <div className = "ear-r-side">
           <div className = "inner-2-side"></div>
         </div>

         <div className = "nose-side">
            <div className = "l1-side"></div>
           <div className = "l2-side"></div>
           <div className="l3-side"></div>
           <div className="l4-side"></div>
         </div>
         <div className = "eye-1-side">
           <div className = "eyeball-side"></div>
         </div>
         <div className = "eye-r-side">
           <div className = "eyeball-side"></div>
           </div>
       </div>
       <div className = "upper-body"></div>
       <div className ="lower-body"></div>
         <div className = "tail"></div>
         <div className = "paw-1"></div>
         <div className = "paw-2"></div>
       <div className = "shadow"></div>
     </div>
     <div className = "cat">
        <div className="head">
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
