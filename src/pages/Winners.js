import React from "react";
import styled from "styled-components";
//Import images
import DynastyOne from '../img/35dynasty1.jpg';
import DynastyTwo from '../img/36dynasty2.jpg';
import SafetyWinner from '../img/37safetywinner.jpg';

const Winners = () => {
    return(
        <ImageDisplay>
            <h1>Победители конкурсов:</h1>

            <h2>1. Трудовая династия</h2>
            <img src={DynastyOne} alt='dynasty' />
            <img src={DynastyTwo} alt='dynasty'/>

            <h2>2. Победитель конкурса "Лучший уполномоченный по охране труда"</h2>
            <img src={SafetyWinner} alt='safety winner' />
        </ImageDisplay>
    );
};

const ImageDisplay = styled.div`
    //min-height: 50vh;
    h1 {
        color: #fff;
        padding: 10px 0 0 20px;
        margin: 0 0 20px;
    }
    h2, p {
        background: #495a78;
        color: #fff;
        margin: 20px 0;
        padding: 10px 0 10px 20px;
        text-decoration: underline;
    }
    img {
        //height: 100vh;
        object-fit: cover;
        width: 100%;
    }
`;


export default Winners;