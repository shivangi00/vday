/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useNavigate } from "react-router-dom";
import cat from '../Cat Yell GIF by Elgato.gif';
import '../Question.css';

const Question = () => {
    const navigate = useNavigate()
    
        const noBtn = () => {
            navigate('/question3')
        }

    return(
        <>
            <div className='question-page'>
                <h3> Why are you doing this Pookieeeeeeeee </h3>
                <img src={cat}></img>
            </div>
            <div className='question-content'>
                <h2> I do not want to threaten you! </h2>
                <h2> So, I'll ask you again!!! Are you ready...?</h2>
                <button onClick={() => noBtn()} className="btn no-btn">Okay</button>
            </div>
        </>
    );
};

export default Question;