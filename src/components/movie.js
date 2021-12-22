import '../styles/movie.css'

const Background = () => {
    return (
        <div className="video_container">
            {/* <iframe src="https://www.youtube-nocookie.com/embed/4Q-chfUWg28?controls=0&autoplay=1&mute=1&loop=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe> */}
            <iframe src="https://www.youtube-nocookie.com/embed/x6Dff3PRv-c?controls=0&autoplay=1&mute=1&autoloop=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            {/* <iframe src="https://giphy.com/embed/3kAMvOp2Wlk0luXJRc" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> */}
        </div>
    );
};

export default Background;