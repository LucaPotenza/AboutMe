import { Element } from 'react-scroll';
import './Home.css';

function Home(){

    return(
        <Element className="h bg-dark section" name='Home' id='Home'>
            <img src={require("../foto.jpg")} className="foto" alt="logo" />
            <h1 className='mt-5'>
            Luca Potenza
            </h1>
        </Element>
    )
}

export default Home;