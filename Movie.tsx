import React from "react";
import './App.css';

import { isPropertySignature } from "typescript";

let cssAlignLeft={marginLeft:'5px'}
 export default function Movie (props:any){
    return(<div className="movie">
        <img src={props.dp} style={cssAlignLeft}/>
        <hr/>
        <strong>{props.movieName}</strong>
        <br/>
        <strong>{props.ratings}✪</strong>

    </div>)
}
