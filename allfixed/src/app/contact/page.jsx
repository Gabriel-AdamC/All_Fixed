import React from "react";
import FormContact from "./form";
import "./page.css";

const contact = () => {
    return (
        <div>
            <p>
                hi
            </p>
            <div className="containerImage">
                <img src="/allFixedContactPage.png" alt="Contact" style={{ display: 'block', width: '100%' }} />
            </div>
            <FormContact />
        </div>
        
    )
}


export default contact;