import React from 'react';
import styled from 'styled-components';
//Animations
// import { motion } from "framer-motion";
// import {pageAnimation, titleAnimation} from '../animation';

import { About } from '../styles';
import Toggle from "../components/Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "../components/useScroll";
import { scrollReveal } from "../animation";

//Import images
import ParticipantPhoto from '../img/participant.jpeg';
import QuestionnaireOne from '../img/1questionnaire.jpg';
import QuestionnaireTwo from '../img/2questionnaire.jpg';
import QuestionnaireThree from '../img/3questionnaire.jpg';

const Participant = () => {
  const [element, controls] = useScroll();
  return (
      <Faq variants={scrollReveal} ref={element} animate={controls} inintial="hidden">
        <AnimateSharedLayout>
            <h2>Участник конкурса и предложения</h2>
            <Toggle title='Биография участника конкурса'>
                <div className="answerQuestionnaire">
                    <div className='anketa'>
                      <p><span>Фамилия, имя, отчество:</span> Шайхутдинова Лариса Руслановна;</p><br />
                      <p><span>Образование:</span>Мордовский государственный педагогический институт им. М.Е. Евсевьева;</p><br />
                      <p><span>Место работы, должность:</span>Инженер Красногорского РЭС филиала ПАО «Россети Московский регион» 
                      - Северные Электрические сети;</p><br />
                      <p><span>Название первичной профсоюзной организации:</span> ППО Северных электрических сетей МОМ и МОВЭП;</p><br />
                      <p><span>Название отраслевого профсоюза:</span> МОМ и МО ВЭП;</p><br />
                      <p><span>Стаж профосоюзной деятельности, должность и стаж:</span> член совета молодых работников: 3 года;</p><br />
                      <p><span>Краткая характеристика себя как молодого профсоюзного лидера:</span> инициативность, активность, вовлеченность, 
                      работа с молодежью, агитация молодежи на вступление в профсоюз;</p><br />
                      <p><span>Прочее:</span> - активист МОМ и МО ВЭП;</p>
                    </div>
                    <img className='participantImg' src={ParticipantPhoto} alt='participant' />
                </div>
            </Toggle>
            <Toggle title='Основная проблема'>
                <div className='answer'>
                    <h3>Основной проблемой в настоящее время является побуждение молодежи к вступлению в профсоюз.</h3>
                </div>
            </Toggle>
            <Toggle title='Предложения участника конкурса'>
                <div className="answer">
                    <h3>Мои предложения по решению указанной проблемы:</h3>
                    <p>1. Мотивация профсоюзного членства. Достигается путем проведения бесед с принимаемыми на работу новыми сотруниками.
                    Беседа заключается не в "уговаривании" вступить в профсоюз, а в указании на эффективные инструменты профсоюза по представлению интересов
                    и защите прав работников - членов профсоюза. При этом подчеркивая, что деятельность профсоюза не ограничвается указанным выше.</p><br />
                    <p>2. Использование в беседе эффективной аргументации, путем ссылок на зконодательные акты, статистические данные,
                    факты из открытых источников.</p>
                    <p>С целью более эффективной и плодотворной совместной работы профсоюза и уполномоченных по охране труда, 
                    предложены и используются анкеты-опросник в филиале.</p>
                    <img className="someImg" src={QuestionnaireOne} alt='questionnaireOne' />
                    <img className="someImg" src={QuestionnaireTwo} alt='questionnaireTwo' />
                    <img className="someImg" src={QuestionnaireThree} alt='questionnaireThree' />
                </div>
            </Toggle>
        </AnimateSharedLayout>
      </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
      display: block;
  }
  h2 {
      background: #004e8f;
      font-weight: bold;
      padding: 10px 0 10px 10px;
      width: 100%;
  }
  .faq-line {
      background: #cccccc;
      height: 0.2rem;
      margin: 2rem 0rem;
      width: 100%;
  }
  .question {
      cursor: pointer;
      padding: 3rem 0rem;
  }
  .answerQuestionnaire {
    display: flex;
    flex-direction: row;
    padding: 2rem 0rem;
    width: 100%;
    .anketa {
      width: 50%;
      p {
        font-size: 1.25rem;
        margin: 0 10px 0 0;
        padding: 0;
        span {
          color: #fff;
          font-weight: lighter;
          text-decoration: underline;
        }
      }
    }
      
      .participantImg {
          //margin: 10px 0 20px;
          width: 50%;
      }
  }
  .answer {
      padding: 2rem 0rem;
      p {
          padding: 1rem 0rem;
      }
      .someImg {
          margin: 10px 0 20px;
          width: 100%;
      }
  }
`;

export default Participant;