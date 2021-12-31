import './styles/App.css';

import Footer from './components/footer'
import Main from './components/main';
import TopBanner from './components/topbanner';
import Homebutton from "./components/homebutton";
import Background from './components/movie' 

const App = () => {

  return (
    <div className='container'>
      <Background />
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
