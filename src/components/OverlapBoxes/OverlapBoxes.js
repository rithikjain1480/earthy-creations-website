import React, { Component } from 'react';
import './OverlapBoxes.css';

/**
 * This component is responsible for rendering a box that appears in
 * the background of text.
 *
 * This will be used with the Title component to display titles
 * on each page with a certain background color.
 *
 * Props:
 * - backgroundColor: the color of the box
 * - width: width of the box
 * - heigh: heigh of the box
 */
export default class OverlapBoxes extends Component {
    render() {
        var color = "rgb(255,255,255)";
        if(this.props.backgroundColor === "green"){
            color = "rgb(191,221,215)";
        }
        else if(this.props.backgroundColor === "yellow"){
            color = "rgb(245,240,196)";
        }
        else if(this.props.backgroundColor === "orange"){
            color = "rgb(250,219,198)";
        }
        else if(this.props.backgroundColor === "blue"){
            color = "rgb(180,206,229)";
        }
        const styling = {
            height: this.props.height,
            width: this.props.width,
            backgroundColor: color
        };
        return (
            <div style={styling} className="abs"> </div>
        )
    }
}
