import React from "react";
import { useState } from "react";

const contact = () => {
    return (
        <div className="contact">
            const [name, setName] = useState('');
            const [email, setEmail] = useState('');
            const [message, setMessage] = useState('');

            <h1>Contact Us</h1>
            <p>If you have any questions, feel free to reach out!</p>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                
                <button type="submit" onClick={submit}>Send</button>
            </form>
        </div>
    )
}

const submit = (e) => {
    
};

export default contact;