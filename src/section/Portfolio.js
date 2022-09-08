import { Card ,Button, CardImg, Row} from 'react-bootstrap';
import { Element } from 'react-scroll';
import { useState } from 'react';
import './Portfolio.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Portfolio(){

    const [rot, setRot] = useState(true);

    var msg = 'disattiva rotazione'
    var speed = 5000

    if(rot==false){
        msg = 'attiva rotazione'
    }

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
        }
      }

    return(
        <Element className="cont bg-light section" name='Portfolio'>
            <div className='title'>
                <div className='titleSec'>

                </div>
                <div className='titleSec'>
                    <h1>Portfolio</h1>
                </div>
                <div className='titleSec'>
                    <p>{msg}</p>
                    <label className="switch">
                        <input type="checkbox" onChange={()=>{setRot(!rot);}} checked={rot}/>
                        <span className="slider"></span>
                    </label>
                </div>
            </div>
            
            
            
            <Carousel 
                responsive={responsive}
                infinite
                autoPlay={rot}
                autoPlaySpeed={500}
                centerMode
                swipeable
                showDots
                keyBoardControl
                focusOnSelect
                >
            <Card className='item'>
                        <CardImg variant='top mx-auto' src={require("../CovidData1.png")} >
                        </CardImg>
                        <Card.Body>
                            <Card.Title>Covid Data</Card.Title>
                            <Card.Text>
                            Un proggetto che permette di visualizzare graficamente dati sul covid raccolti dalla API disease.sh
                            con l'utilizzo della libreria VictoryChart
                            </Card.Text>
                            <Button variant="primary" href="https://lucapotenza.github.io/Covid-Data/" target="_blank">Vedi</Button>
                        </Card.Body>
                    </Card>
                    <Card className='item'>
                        <CardImg variant='top mx-auto' src={require("../Calendario.png")}>
                        </CardImg>
                        <Card.Body>
                            <Card.Title>Calendario Prenotazioni</Card.Title>
                            <Card.Text>
                            Un Calendario che permette di prenotare delle sale selezionando un numero qualsiasi di slot orari da mezz'ora tramite un Form
                            </Card.Text>
                            <Button variant="primary" href="https://lucapotenza.github.io/Calendario/" target="_blank">Vedi</Button>
                        </Card.Body>
                    </Card>
                    <Card className='item'>
                        <CardImg variant='top mx-auto' src={require("../Totale.png")}>
                        </CardImg>
                        <Card.Body>
                            <Card.Title>Galeone Steampunk</Card.Title>
                            <Card.Text>
                            Una serie di rendering realizzati in gruppo (4 persone) con Blender e Substance 3D Painter 
                            </Card.Text>
                            <Button variant="primary" href="https://www.dropbox.com/sh/al5n5l6aj8wkkqf/AAAUqwsYGE65jWkSyI4uewd5a?dl=0" target="_blank">Vedi</Button>
                        </Card.Body>
                    </Card>
            </Carousel>
        </Element>
    )
}

export default Portfolio;