/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import cat from '../Despicable Me Please GIF.gif';
import '../Question.css';

const Question = () => {
    const navigate = useNavigate();
    
    // State to hold positions of the "Yes" buttons and count
    const [yesButtons, setYesButtons] = useState([]);
    
    const goToEnd = () => {
        navigate('/end');
    };

    // Handle "No" button click to create 10 more "Yes" buttons
    const noBtn = () => {
        const newYesButtons = [];
        const clusterSize = 10;
        
        // Get the current position of the "No" button
        const noButton = document.querySelector('.no-btn');
        const baseX = noButton.getBoundingClientRect().left + noButton.offsetWidth / 2;
        const baseY = noButton.getBoundingClientRect().top + noButton.offsetHeight / 3;

        // Generate 10 new "Yes" buttons with small random offsets from "No" button
        for (let i = 0; i < clusterSize; i++) {
            const randomOffsetX = Math.ceil(Math.random() * 50) - 40; // Random offset between -25px and +25px
            const randomOffsetY = Math.ceil(Math.random() * 50) - 40; // Random offset between -25px and +25px

            newYesButtons.push({
                id: `yes-${yesButtons.length + i}`, // Increment ID based on existing Yes buttons count
                top: `${baseY + randomOffsetY}px`,
                left: `${baseX + randomOffsetX}px`,
            });
        }

        // Add the new "Yes" buttons to the existing ones
        setYesButtons(prevButtons => [...prevButtons, ...newYesButtons]);
    };

    return (
        <>
            <div className='question-page'>
                <h2>Please maan jao? 🥺</h2>
                <p>Why are you doing this and then blaming ME for it!!!???</p>
                <img src={cat} alt="Cat asking" />
            </div>
            <div className='question-content'>
                <h2>I have got you... I promise!</h2>
                <h1>Be my Valentine?</h1>
                <button className="btn yes-btn">Yes!</button>
                
                {/* "No" Button */}
                <button onClick={() => noBtn()} className="btn no-btn">No</button>

                {/* Yes Buttons Cluster */}
                {yesButtons.map((btn) => (
                    <div
                        key={btn.id}
                        style={{
                            position: 'fixed',
                            top: btn.top,
                            left: btn.left,
                            transition: 'top 0.3s, left 0.3s', // Smooth transition for glide
                            zIndex: '2',
                        }}
                    >
                        <button
                            style={{
                                backgroundColor: 'crimson', // Red background for the Yes button
                                padding: '10px 20px',
                                color: 'white',
                                border: 'none', // Remove any border if it has one
                                borderRadius: '5px', // Optional: Add rounded corners
                                boxShadow: '0 2px 10px rgba(0,0,0,0.2)', // Optional: Add shadow for better visibility
                            }}
                            onClick={goToEnd} // Call goToEnd when any "Yes" button is clicked
                        >
                            Yes!
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Question;
