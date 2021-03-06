import React, { Component } from 'react';
import "./Slide.css"
import {Redirect} from 'react-router-dom';

/**
 * This component is responsible for rendering a single Slide.
 *
 * This will be used with the Slider component to display a single
 * image.
 *
 * Props:
 * - link: boolean value that indicates whether or not the slide links
 *   to another page
 * - type: type of the Slider
 * - text: (only relevant for Slider on the Exhibits page) indicates the
 *   specific path of each Exhibit in the Slider
 * - content: reference to the image of the slide in Contentful database
 * - name: (only relevant for Slider on the Exhibits page) name of the
 *   Exhibit
 * - date: (only relevant for Slider on the Exhibits page) date of the
 *   Exhibit
 */
export default class Slide extends Component {
    constructor(props){
        super(props);

        this.state = {
            redirect: false,
            link: '/exhibits'
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        if(this.props.type === "shop"){
            this.setState({
                link: '/shop'
            });
        }
        else if(this.props.type === "exhibit"){
            this.setState({
                link: '/exhibits/' + this.props.text
            });
        }
    }

    handleClick(event){
        event.preventDefault();

        this.setState({
            redirect: true
        });
    }

    render() {
        // const styling = {
        //     backgroundImage: "url(" + this.props.content + ")",
        //     width: this.props.width + "vw"
        // }
        var className = "slide";
        // if(this.props.content.split("/")[3].split(".")[0] === "slide_1"){
        //     className += " slide1";
        // }
        return (
            <React.Fragment>
                {this.state.redirect ?
                    <Redirect to={this.state.link} />
                    :
                    <div className={className}>
                        {this.props.link ?
                            <React.Fragment>
                                <img style={{cursor: 'pointer'}} src={this.props.content} alt="slide" onClick={this.handleClick} />
                                {this.props.type === "exhibit" &&
                                    <div className="exhibitNameAndDate" onClick={this.handleClick} >
                                        <p>{this.props.name}</p>
                                        <p className="exhibitDate">{this.props.date}</p>
                                    </div>
                                }
                            </React.Fragment>
                            :
                            <img src={this.props.content} alt="slide" />
                        }
                    </div>
                }
            </React.Fragment>
        );
    }
}
