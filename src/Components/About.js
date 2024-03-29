import React, { useState } from "react";
import mwlcm from './mwlcm-removebg-preview.png';
import wWlcm from './wWlcm-removebg-preview.png';
import wlcm from './wlcm-removebg-preview.png';
import '../my-proj1.css';

export default function About(props) {
  return (
      <div className="accordion" id="accordionExample" style={{color: props.mode==="dark"?"black":"white"}}>
        <h1 className="my-3" style={{color: props.mode==="dark"?"black":"white"}}>About Us</h1>
        <div className="accordion-item" style={{backgroundColor: props.mode==="dark"?"white":"rgb(3,3,24)",color: props.mode==="dark"?"black":"white"}}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{backgroundColor: props.mode==="dark"?"white":"rgb(77, 72, 72)",color: props.mode==="dark"?"black":"white"}}
            >
             Description
            </button>
          </h2>
          <div
          style={{backgroundColor: props.mode==="dark"?"white":"rgb(3,3,24)",color: props.mode==="dark"?"black":"white"}}
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{backgroundColor: props.mode==="dark"?"white":"rgb(3,3,24)",color: props.mode==="dark"?"black":"white"}} >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{backgroundColor: props.mode==="dark"?"white":"rgb(72, 72, 72)",color: props.mode==="dark"?"black":"white"}}
            >
              Our Team
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor: props.mode==="dark"?"white":"rgb(3,3,24)",color: props.mode==="dark"?"black":"white"}}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{backgroundColor: props.mode==="dark"?"white":"rgb(3,3,24)",color: props.mode==="dark"?"black":"white"}} >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{backgroundColor: props.mode==="dark"?"white":"rgb(77, 72, 72)",color: props.mode==="dark"?"black":"white"}}
            >
              Our Mission
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor: props.mode==="dark"?"white":"rgb(3,3,24)",color: props.mode==="dark"?"black":"white"}}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <img className="img1" src={mwlcm} ait="Man Welcoming You"/>
         <img className="img2" src={wWlcm} ait="Woman Welcoming You"/>
        {/* <img src={wlcm} ait="Welcome"/> */}
        
      </div>
  );
}
