import React from 'react'
import Car from './class-component';
 function Car2(props) {
    return <h2>Hi, I am a {props.color} {props.speed} {props.model} Car!</h2>;
  }

    function Garage(props){
    return(
        <>
        <h1>Who Lives in my Garage?</h1>
        <Car color='green'/>
        </>
    )
  }
export {Car2, Garage}