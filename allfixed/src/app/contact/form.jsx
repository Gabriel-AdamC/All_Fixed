"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import './form.css'

const FormContact = () => {
    
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [message, setMessage] = useState('');
        const check = [Math.floor(Math.random() * 21) + 1, Math.floor(Math.random() * 21) + 1];
        const [step, setStep] = useState(1);
        const [direction, setDirection] = useState(1);

        const handleChange = (e) => {
            const { name, value } = e.target;
            if (name === 'name') setName(value);
            else if (name === 'email') setEmail(value);
            else if (name === 'message') setMessage(value);
        };

        const submit = (e) => {
            e.preventDefault();
            
            if (step !== 4) {
                if ((step === 1 && !name) || (step === 2 && !email) || (step === 3 && !message) || (step === 4 && !document.getElementById('captcha').value)) {
                    alert("Please fill out all fields.");
                    return;
                }
                else if (step === 2 && !email.includes('@')) {
                    alert("Please enter a valid email address.");
                    return;
                }
                setStep(step + 1);
            }
            else if (parseInt(document.getElementById('captcha').value) !== check[0] + check[1]) {
                alert("Incorrect answer to the verification question. Please try again.");
                document.getElementById('captcha').value = '';
            }
            else {
                console.log(name, email, message);
                // TODO: form submission
            }
    
            
        };

    return (
        <div className="contact">
            <form>
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                        key={1}                        
                        initial={direction === 1 ? { x: 100, opacity: 0 } : { x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={direction === 1 ? { x: -100, opacity: 0 } : { x: 100, opacity: 0 }}
                        transition={{ duration: 0.8, type: "spring" }}                        
                        >
                        {<div className="formpiece" style={{ display: step === 1 ? 'block' : 'none' }}>
                            <label className="texts" htmlFor="name">Name:</label>
                            <input className="inputs" type="text" id="name" name="name" required onChange={handleChange} />
                        </div>}
                        </motion.div>
                    )}
                    {step === 2 && (
                        <motion.div
                        key={2}
                        initial={direction === 1 ? { x: 100, opacity: 0 } : { x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={direction === 1 ? { x: -100, opacity: 0 } : { x: 100, opacity: 0 }}
                        transition={{ duration: 0.8, type: "spring" }} 
                        >
                        {<div className="formpiece" style={{ display: step === 2 ? 'block' : 'none' }}>
                            <label className="texts" htmlFor="email">Email:</label>
                            <input className="inputs" type="email" id="email" name="email" required onChange={handleChange} />
                        </div>}
                        </motion.div>
                    )}
                    {step === 3 && (
                        <motion.div
                        key={3}
                        initial={direction === 1 ? { x: 100, opacity: 0 } : { x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={direction === 1 ? { x: -100, opacity: 0 } : { x: 100, opacity: 0 }}
                        transition={{ duration: 0.8, type: "spring" }} 
                        >
                        {<div className="formpiece" style={{ display : step === 3 ? 'block' : 'none' }}>
                            <label className="texts" htmlFor="message">Message:</label>
                            <textarea className="inputs" id="message" name="message" required onChange={handleChange}></textarea>
                        </div>}
                        </motion.div>
                    )}
                    {step === 4 && (
                        <motion.div
                        key={4}
                        initial={direction === 1 ? { x: 100, opacity: 0 } : { x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={direction === 1 ? { x: -100, opacity: 0 } : { x: 100, opacity: 0 }}
                        transition={{ duration: 0.8, type: "spring" }} 
                        >
                        {<div className="formpiece" style={{ display : step === 4 ? 'block' : 'none' }}>
                            <label className="texts" htmlFor="message">Please answer this question to verify you are human:</label>
                            <input className="inputs" type="text" id="captcha" name="captcha" placeholder={`What is ${check[0]} + ${check[1]}?`} required />
                        </div>}
                        </motion.div>
                    )}
                    
                </AnimatePresence>

                <div className="button-row">
                    <motion.button
                        className="buttons" 
                        onClick={() => {
                            setStep(step - 1);
                            setDirection(-1);
                        }} 
                        disabled={step === 1}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >Back
                    </motion.button>

                    <motion.button
                        className="buttons" 
                        id="button" 
                        type="submit" 
                        onClick={(e) => {
                            setDirection(1);
                            submit(e);
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {step < 4 ? "Next" : "Submit"}
                    </motion.button>
                </div>
            </form>
        </div>
    )
}

export default FormContact