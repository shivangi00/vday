/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useNavigate } from "react-router-dom";
import cat from '../cat gun.png';
import '../Question.css';

const Question = () => {
    const navigate = useNavigate()

    const noBtn = () => {
        navigate('/question4');
    }

    return(
        <>
            <div className='question-page'>
                <h2> Will. You. Be. My. Valentine?</h2>
                <img src={cat}></img>
            </div>
            <div className='question-content'>
                <h2> Make smarter choice this time...</h2>
                <button className='="btn yes-btn"'>Yes</button>
                <button onClick={() => noBtn()} className="btn no-btn">No</button>
            </div>
        </>
    );
};

export default Question;