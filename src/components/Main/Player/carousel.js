import '../../../styles/Main/Player/carousel.css';

import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import esquerda from '../../../img/arrow-left-icon.png';
import direita from '../../../img/arrow-right-icon.png';


import CardStats from '../SearchResults/RenderCards/Cardstats/cardstats';
import Previousbutton from './previousbutton';
import Thumbs from './thumbs';

const Carousel = (props) => {

    let indexStart = useParams();

    const [current, setCurrent] = useState(+indexStart.cardId);
    const length = props.output.length;

    const next = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const previous = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const slider = props.output.map((one, index) => {
        return (
            <>
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    <div className='card'>
                        {index === current && (<img src={one.imageUrl} key={index} alt={one.name} className='card-detail' />)}
                    </div>
                    <div className='stats'>
                        {index === current && (<CardStats data={one} />)}
                        <div className='info'>
                            <p>{index + 1}/{length}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    })

    return (
        <>
            <Previousbutton />
            <Link to={`/carddetail/${current - 1 <= 0 ? length -1: current - 1}`}><img src={esquerda} className="esq" alt="seta esquerda" onClick={previous} key='left' /> </Link>
            <div className='slider'>
                {slider}
            </div>
            <Link to={`/carddetail/${current + 1 === length ? 0 : current + 1}`}><img src={direita} className="drt" alt="seta direita" onClick={next} key='right' /> </Link>
            <Thumbs output={props.output} changeIndex={setCurrent} length={length} />
        </>
    )
}

export default Carousel;