import './styles/App.css';
import Footer from './components/footer'
import Main from './components/main';
import TopBanner from './components/topbanner';
// import { BrowserRouter } from 'react-router-dom';

import { useEffect, useState } from 'react';
// import { OneCard } from './services/magic'

//import mock from './mock_data/489865.json' //multi-color
//import mock from './mock_data/3215.json' //uni-color
import mock from './mock_data/3210.json' //instant
import RenderCards from './components/rendercards';
import Loading from './components/loading.js'

const App = () => {

  // const [carta, setCarta] = useState([]);
  const [temResposta, setTemResposta] = useState(false);

  useEffect(() => {
    // OneCard()
    //   .then(res => {
    //     setCarta(res);
    //     setTemResposta(true);
    //   });
        setTemResposta(true);
  }, []);
    
    // console.log(carta);
  // FIXME carta demora a ser atribuida e depois não é renderizada 

  return (
    <div className='container'>
      <TopBanner />
      {!temResposta ? <Loading /> : <RenderCards output={[mock.card]} />}
      <Main />
      <Footer />
    </div>
  );
}

export default App;
