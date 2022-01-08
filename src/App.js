import './styles/App.css';

import Footer from './components/Footer/footer'
import Main from './components/main';
import TopBanner from './components/TopBanner/topbanner';
import Homebutton from "./components/Homebutton/homebutton";
import Movie from './components/Movie/movie' 

const App = () => {

  return (
    <div className='container'>
      <Movie />
      <TopBanner />
      <div className="buttons nav">
        <Homebutton />
      </div>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
