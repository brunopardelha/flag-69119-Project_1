import '../../../styles/Main/Player/thumbs.css'

import { useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';

import small_esq from '../../../img/button-round-esq-icon.png';
import small_drt from '../../../img/button-round-drt-icon.png';

const Thumbs = (props) => {
    // start info - array das cartas
    // function to set index (hook) - props.setCurrent - ok
    // length do to array para display - props.length - ok
    let current = useParams();

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


    const thumbs = props.output.map((one, index) => {
        return (
            <Link to={`/carddetail/${index}`} key={one.id} ><img src={one.imageUrl} alt={one.name} key={index} onClick={() => { props.changeIndex(index) }} className={index === current ? 'thumb active' : 'thumb'} /> </Link>
        )
    })

    return (

        <div className='box_container'>
            <div className='to_left'>
                {scrollX !== 0 && <img src={small_esq} onClick={() => slide(-100)} className='seta_esq' alt="seta esquerda" />}
            </div>
            <div className='small_thumbs' ref={scrl} onScroll={scrollCheck}>
                {thumbs}
            </div>
            <div className='to_right'>
                {!scrolEnd && props.length > 20 && <img src={small_drt} onClick={() => slide(100)} className='seta_drt' alt="seta direita" />}
            </div>
        </div>
    )
};

export default Thumbs;
