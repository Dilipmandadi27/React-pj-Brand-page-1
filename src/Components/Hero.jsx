import React from "react";
import Flipkart from './../assets/flipkart.svg'
import Amazon from './../assets/amazon.svg'
import Shoe from './../assets/shoe_image.svg'

function Hero() {
  return (
    <main className="hero-section container">
      <div className="hero-content ">
        <h2>YOUR FEET DESERVE THE BEST</h2>
        <p >YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

       <div className="btns">
        <button className="btn1">Shop Now</button>
        <button className="btn2">Category</button>
        </div>

        <p>Also Available On</p>
         <img className="images" src={Flipkart} alt="flipkart-logo" /> 
         <img className="images" src={Amazon} alt="amazon-logo" />
      </div>
      <div className="hero-image ">
        <img src={Shoe} alt="shoe-image" />
      </div>
    </main>
    
  );
}

export default Hero;
