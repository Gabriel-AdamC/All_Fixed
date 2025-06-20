import React from "react";
import FormContact from "./form";
import "./page.css";

const contact = () => {
    return (
        <div>
            <div className="contactPage">
                <h1 className="heading">Contact Us</h1>
                <div className="spacer"></div>
            </div>
            <div className="svg"></div>
            <div className="text">
                <h4>How Can We Help You?</h4>
                <p>
                    Send us some feedback or explain your problem to us for a quote
                </p>
            </div>
            <FormContact />
            <div className="options">
                <div className="text">
                    <h4>Call Us</h4>
                    <p>Placeholder</p>
                </div>
                <div className="text">
                    <h4>Email Us</h4>
                    <p>Placeholder</p>
                    </div>
            </div>
        </div>
        
    )
}


export default contact;