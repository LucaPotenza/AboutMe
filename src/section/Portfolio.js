import { CardGroup , Card ,Button, CardImg, Row} from 'react-bootstrap';
import ReactCardCarousel from "react-card-carousel";
import { Element } from 'react-scroll';
import './Portfolio.css'

function Portfolio(){

    

    return(
        <Element className="cont bg-light section" name='Portfolio'>
            <h1>Portfolio</h1>
            <div style={{
                margin: "5vh auto",
                position: "relative",
                height: "80vh",
                width: "100%",
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "middle"
                }}>
                <ReactCardCarousel className='Carousel' autoplay={true} autoplay_speed={5000}>
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
                </ReactCardCarousel>
            </div>
        </Element>
    )
}

export default Portfolio;