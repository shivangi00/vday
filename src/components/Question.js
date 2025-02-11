/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useNavigate } from "react-router-dom";
import cat from '../GIF by ViralHog.gif';
import '../Question.css';

const Question = () => {
    const navigate = useNavigate()

    const noBtn = () => {
        navigate('/question2')
    }

    return(
        <>
            <div className='question-page'>
                <h3> Because it is Valentine's Week!❤️</h3>
                <h1> So... will you be my Valentine?🌹</h1>
                <img src={cat}></img>
            </div>
            <div className='question-content'>
                <h2>Ofcourse, you will say 'Yes' only, duh! 😏</h2>
                <button className='="btn yes-btn"'>Yes</button>
                <button onClick={() => noBtn()} className="btn no-btn">No</button>
            </div>
        </>
    );
};

export default Question;