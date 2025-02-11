/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useNavigate } from "react-router-dom";
import cat from '../Bored Cat GIF.gif';
import '../Question.css';

const Question = () => {
    const navigate = useNavigate()

    const noBtn = () => {
        navigate('/mad')
    }

    return(
        <>
            <div className='question-page'>
                <h1> Pookie said "No!" 🥺</h1>
                <p> ( what do you mean by you wanted to say Yes!!??? )</p>
                <h3> Think carefully you handsome man!!! </h3>
                <img src={cat}></img>
            </div>
            <div className='question-content'>
                <h2>I'll ask again... Will you be my Valentine?</h2>
                <button className='="btn yes-btn"'>Yes</button>
                <button onClick={() => noBtn()} className="btn no-btn">No</button>
            </div>
        </>
    );
};

export default Question;