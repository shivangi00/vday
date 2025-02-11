/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import cat from '../pedro pedro pedro.mp4';
import confetti from 'canvas-confetti'; // Import canvas-confetti
import '../Question.css';

const End = () => {
    useEffect(() => {
        // Trigger confetti when the page loads
        confetti();
    }, []);

    return (
        <>
            <div className='question-page'>
                <h2> He said "Yes!"</h2>
                <h1> Happy Valentine's Day!!! ❤️</h1>
                <video width="60%" loop controls autoPlay>
                    <source src={cat} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </>
    );
}

export default End;
