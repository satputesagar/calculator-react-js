import PropTypes from "prop-types";
import "./Display.css";
import React from "react";

export default class Display extends React.Component{
    static propTypes ={
        value:PropTypes.string,
    };

    render(){
        return(
            <div className="component-display">
            <div>{this.props.value}</div>    
            </div>
        );
    }
}