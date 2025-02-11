/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../Home.css';
import { useNavigate } from "react-router-dom";
import cat from '../cat book GIF.gif';
import catWork from '../Working Work From Home GIF.gif';
import catTired from '../Tired Cat GIF.gif';
import question from '../Question Mark What GIF.gif';

const Home = () => {
    const navigate = useNavigate()

    const goToQues = () => {
        navigate('/question');
    }

    return(
        <>
            <div className='home-page'>
                <img src={cat} ></img>
                <img src={catWork}></img>
                <img src={catTired}></img>
                <img src={question}></img>
                
            </div>

            <div className='home-content'>
                <p>
                    I've been searching, working, napping lately... you know why?
                </p>
                <button onClick={() => goToQues()} className="btn">No, why?</button>
            </div>
        </>
    );
};

export default Home;