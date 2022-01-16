import '../../../styles/Main/Player/carousel.css';

import { useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';

import esquerda from '../../../img/arrow-left-icon.png';
import small_esq from '../../../img/button-round-esq-icon.png';
import direita from '../../../img/arrow-right-icon.png';
import small_drt from '../../../img/button-round-drt-icon.png';

import CardStats from '../SearchResults/RenderCards/Cardstats/cardstats';
import Previousbutton from './previousbutton';

const Carousel = (props) => {

    let indexStart = useParams();

    const [current, setCurrent] = useState(+indexStart.cardId);
    const length = props.output.length;

    let scrl = useRef(null);
    const [scrollX, setscrollX] = useState(0);
    const [scrolEnd, setscrolEnd] = useState(false);

    const slide = (shift) => {
        scrl.current.scrollLeft += shift;
        setscrollX(scrollX + shift);

        if (
            Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
            scrl.current.offsetWidth
        ) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
    };

    const scrollCheck = () => {
        setscrollX(scrl.current.scrollLeft);
        if (
            Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
            scrl.current.offsetWidth
        ) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
    };

    const next = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const previous = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const slider = props.output.map((one, index) => {
        return (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                <div className='card'>
                    {index === current && (<img src={one.imageUrl} key={index} alt={one.name} className='card-detail' />)}
                </div>
                <div className='stats'>
                    {index === current && (<CardStats data={one} />)}
                </div>
            </div>
        )
    })

    const thumbs = props.output.map((one, index) => {
        return (
            <Link to={`/carddetail/${index}`} key={one.id} ><img src={one.imageUrl} alt={one.name} key={index} onClick={() => { setCurrent(index) }} className={index === current ? 'thumb active' : 'thumb'} /> </Link>
        )
    })

    return (
        <>
            <Previousbutton />
            <Link to={`/carddetail/${current}`}><img src={esquerda} className="esq" alt="seta esquerda" onClick={previous} key='left' /> </Link>
            <div className='slider'>
                {slider}
            </div>
            <Link to={`/carddetail/${current}`}><img src={direita} className="drt" alt="seta direita" onClick={next} key='right' /> </Link>
            <div className='box_container'>
                <div className='to_left'>
                    {scrollX !== 0 && <img src={small_esq} onClick={() => slide(-100)} className='seta_esq' alt="seta esquerda" />}
                </div>
                <div className='small_thumbs' ref={scrl} onScroll={scrollCheck}>
                    {thumbs}
                </div>
                <div className='to_right'>
                    {!scrolEnd && length > 21 && <img src={small_drt} onClick={() => slide(100)} className='seta_drt' alt="seta direita" />}
                </div>
            </div>
        </>
    )
}

export default Carousel;