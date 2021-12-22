import '../styles/carousel.css'

const Carousel = () => {
    //a tag <a> da carta substituir por Link do router
    return (
        <>
            <h1>Teste para o carousel</h1>
            <div class="carousel-wrapper">
                <span id="item-1"></span>
                <span id="item-2"></span>
                <span id="item-3"></span>
                <div class="carousel-item item-1">
                    <h2>Item 1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus   accumsan pretium dolor vel convallis. Aliquam erat volutpat. Maecenas lacus nunc, imperdiet sed mi et, finibus suscipit mi.</p>
                    <a class="arrow arrow-prev" href="#item-3"></a>
                    <a class="arrow arrow-next" href="#item-2"></a>
                </div>

                <div class="carousel-item item-2">
                    <h2>Item 2</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan pretium dolor vel convallis. Aliquam erat volutpat.</p>
                    <a class="arrow arrow-prev" href="#item-1"></a>
                    <a class="arrow arrow-next" href="#item-3"></a>
                </div>

                <div class="carousel-item item-3">
                    <h2>Item 3</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan pretium dolor vel convallis. Aliquam erat volutpat.</p>
                    <a class="arrow arrow-prev" href="#item-2"></a>
                    <a class="arrow arrow-next" href="#item-1"></a>
                </div>
            </div>
        </>
    )

};

export default Carousel;