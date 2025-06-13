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
                        // Add your animation props here (e.g., initial, animate, exit, transition)
                        
                        >
                        {<div className="formpiece" style={{ display: step === 1 ? 'block' : 'none' }}>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required onChange={handleChange} />
                        </div>}
                        </motion.div>
                    )}
                    {step === 2 && (
                        <motion.div
                        key={2}
                        // Add your animation props here
                        >
                        {/* Step 2 content */}
                        </motion.div>
                    )}
                    
                </AnimatePresence>

                

                <div className="formpiece" style={{ display: step === 2 ? 'block' : 'none' }}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required onChange={handleChange} />
                </div>
                
                <div className="formpiece" style={{ display : step === 3 ? 'block' : 'none' }}>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required onChange={handleChange}></textarea>
                </div>

                <div className="formpiece" style={{ display : step === 4 ? 'block' : 'none' }}>
                    <label htmlFor="message">Please answer this question to verify you are human:</label>
                    <input type="text" id="captcha" name="captcha" placeholder={`What is ${check[0]} + ${check[1]}?`} required />
                </div>

                <motion.button
                 className="buttons" 
                 onClick={() => setStep(step - 1)} disabled={step === 1}
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.95 }}
                >Back
                </motion.button>

                <motion.button
                  className="buttons" 
                  id="button" 
                  type="submit" 
                  onClick={submit}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                    {step < 4 ? "Next" : "Submit"}
                </motion.button>

            </form>
        </div>
    )
}

export default FormContact