import React from "react";
//Import icons
// import clock from '../img/clock.svg';
// import diaphragm from '../img/diaphragm.svg';
// import money from '../img/money.svg';
// import teamwork from '../img/teamwork.svg';
import OsnPokaz from '../img/osn-pokazateli.jpg';
import PlanOne from '../img/plan1.jpg';
import PlanTwo from '../img/plan2.jpg';
import PlanThree from '../img/plan3.jpg';
import PlanFour from '../img/plan4.jpg';
import YouthActOne from '../img/youthAction1.jpg';
import YouthActTwo from '../img/youthAction2.jpg';
import YouthActThree from '../img/youthAction3.jpg';
import YouthActFour from '../img/youthAction4.jpg';
import YouthActFive from '../img/youthAction5.jpg';
//Styles
import {About, Description, ImageTwo} from '../styles';
import styled from "styled-components";
import { fade } from "../animation";
import { useScroll } from "./useScroll";


const ServicesSection = () => {
    const [element, controls] = useScroll();
    return (
        <>
        <Services variants={fade} ref={element} animate={controls} initial="hidden">
            {/* <Description>
                <h2>High <span>quality</span> services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="clock-icon" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Short term for searching the most suitable tour for you.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="teamwork-icon" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Our professsionals will always help you.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm-icon" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Every tour is accompanied by a professional photographer.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="money-icon" />
                            <h3>Affordable</h3>
                        </div>
                        <p>The cheapest offer on the market.</p>
                    </Card>
                </Cards>
            </Description> */}
            <ImageTwo>
                <h2>Основные показатели деятельности первичной профсоюзной организации</h2>
                <img src={OsnPokaz} alt="camping view" />
            </ImageTwo>
        </Services>
        <Services>
            <ImageTwo>
                <h2>План мероприятий на 2021 года</h2>
                <img src ={PlanOne} alt='planOne' />
                <img src = {PlanTwo} alt='planTwo' />
                <img src = {PlanThree} alt='planThree' />
                <img src = {PlanFour} alt='planFour' />
            </ImageTwo>
        </Services>
        <Services>
            <ImageTwo>
                <h2>План совета молодых работников</h2>
                <img src={YouthActOne} alt='youthActOne'/>
                <img src={YouthActTwo} alt='youthActTwo' />
                <img src={YouthActThree} alt='youthActThree' />
                <img src={YouthActFour} alt='youthActFour' />
                <img src={YouthActFive} alt='youthActFive' />
            </ImageTwo>
        </Services>
        </>
    );
};

const Services = styled(About)`
    h2 {
        padding-bottom: 5rem;
        @media screen and (max-width: 631px) {
            padding-bottom: 2.5rem;
        }
    }
    p {
        padding: 2rem 0rem 4rem 0rem;
        width: 70%;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: 1300px) {
        justify-content: center;
    }
`;

const Card = styled.div`
    flex-basis: 20rem;
    .icon {
        align-items: center;
        display: flex;
        h3 {
            background: white;
            color: black;
            margin-left: 1rem;
            padding: 1rem;
        }
    }
`;

export default ServicesSection;