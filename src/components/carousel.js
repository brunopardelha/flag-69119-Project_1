import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/carousel.css'

import { Carousel, onChange, onClickThumb } from 'react-responsive-carousel';

import Cardstats from './cardstats';
import Previousbutton from "./previousbutton";

const Player = (props) => {

    const view = props.output.map((one) => {

        return (
            <div key={one.id}>
                <img src={one.imageUrl} alt="alter" />
                <div style={{ color: "white" }}>
                    <Cardstats data={one} key={one.id} />
                </div>
            </div>
        );
    })

    return (
        <>
            <Previousbutton />
            <Carousel showArrows={true} useKeyboardArrows={true} infiniteLoop={true} autoPlay={false} onChange={onChange} onClickThumb={onClickThumb}>
                {view}
            </Carousel>
        </>
    )

};

export default Player;