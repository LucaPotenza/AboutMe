import React from 'react';
import { Accordion, Col, Row , ListGroup} from 'react-bootstrap';
import './End.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab , faGithub, faInstagram, faLinkedin, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Element } from 'react-scroll';

function End(){
    return(
        <Element className="cont1 bg-dark section" name='End'>
            <Accordion defaultActiveKey="0" className='w-75 acc'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Tech Skills</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <Col  sm={6}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item><h3>Coding</h3></ListGroup.Item>
                                
                                        <div className="ms-2">
                                            <div className="fw-bold">Programmazione</div>
                                            c,c++,java,javascript(html,css),react
                                        </div>
                                    
                                        <div className="ms-2">
                                            <div className="fw-bold">Database</div>
                                            SQL , MongoDB
                                        </div>

                                </ListGroup>
                            </Col>
                            <Col  sm={6}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item><h3>3D</h3></ListGroup.Item>
                                
                                        <div className="ms-2">
                                            <div className="fw-bold">Blender</div>
                                            modelling,uv-mapping,shading,phisics simulation
                                        </div>
                                    
                                        <div className="ms-2">
                                            <div className="fw-bold">Substance painter</div>
                                            Texture Painting
                                        </div>

                                </ListGroup>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Other Skills</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <Col sm={6}> 
                                <ListGroup variant="flush">
                                    <ListGroup.Item><h3>Lingue</h3></ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="ms-2 me-auto ListItem">
                                            <div className="fw-bold">Inglese Livello B2</div>
                                            Cambridge
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            
                            <Col  sm={6}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item><h3>Side Skills</h3></ListGroup.Item>
                                        <div className="ms-2">
                                            <div className="fw-bold">Problem solving</div>
                                        </div>
                                        <div className="ms-2">
                                            <div className="fw-bold">Critical Thinking</div>
                                        </div>                 
                                        <div className="ms-2">
                                            <div className="fw-bold">Teamwork</div>
                                        </div>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Info</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <Col sm={6}> 
                                <ListGroup variant="flush">
                                    <ListGroup.Item><h3>Diploma di Maturità</h3></ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">Liceo Scientifico Scienze Applicate</div>
                                            Liceo G.C.Vanini
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col  sm={6}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item><h3>Università</h3></ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">Studente presso Politecnico di Torino</div>
                                            Ingegneria del Cinema e dei mezzi di Comunicazione
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <footer className='text-center bg-dark Parent'>
                <div className='text-light mb-3 child hide' style={{textAlign: 'left'}}>
                    © 2022 Copyright: Luca Potenza
                </div>
                <div className='footer pt-4 pb-4 child' style={{flexGrow: '2'}}>
                    <a href='https://github.com/LucaPotenza'><FontAwesomeIcon icon={faGithub} size='2xl' className='icon'/></a>
                    <a href='https://www.linkedin.com/in/luca-potenza-039166232/'><FontAwesomeIcon icon={faLinkedin} size='2xl' className='icon' /></a>
                    <a href='https://www.instagram.com/lucap00/'><FontAwesomeIcon icon={faInstagram} size='2xl' className='icon' /></a>
                    <a href='https://twitter.com/LucaPotenza7'><FontAwesomeIcon icon={faTwitter} size='2xl' className='icon' /></a>
                    <a href='https://t.me/LucaPotenza'><FontAwesomeIcon icon={faTelegram} size='2xl' className='icon' /></a>
                </div>
                <div className='child hide'></div>
            </footer>
        </Element>
    )
}

export default End;