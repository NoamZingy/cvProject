import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Accordion, Card, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"; 

const AboutQuestion = ({ id, title, subTitle,  info, secondInfo, SecondsubTitle, infoSecondTitle, infoSecondTitle2, thirdsubTitle, infoThirdsubTitle , infoThirdsubTitle2  }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
      <>
          <Accordion defaultActiveKey="0" className='accordion' key={id}>
          <Card>
            <Card.Header >
              <Accordion.Toggle as={Button} variant="link"  eventKey={id} className='btn-about'>
              {title}
              </Accordion.Toggle>
              <Accordion.Toggle variant="link" className='toggle' onClick={() => setShowInfo(!showInfo)} eventKey={id}>
              {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />} 
              </Accordion.Toggle>
            </Card.Header >
            <Accordion.Collapse eventKey={id}>
              <Card.Body className='cardBody'>
                <h2 className='subTitle'>{subTitle}</h2>
            <p className='p-subtitle'>{info || ''}</p>
            <p className='p-subtitle'>{secondInfo || ''}</p> 
            <h2 className ='subTitle'>{SecondsubTitle || ''}</h2>
            <p className='p-subtitle'>{infoSecondTitle || ''}</p>
            <p className='p-subtitle'>{infoSecondTitle2 || ''}</p>
            <h2 className ='subTitle'>{thirdsubTitle || ''}</h2>
            <p className='p-subtitle'>{infoThirdsubTitle || ''}</p>
            <p className='p-subtitle'>{infoThirdsubTitle2 || ''}</p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          </Accordion>
  </>
    )  
}




export default AboutQuestion;
