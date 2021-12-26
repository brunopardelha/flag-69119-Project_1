import './styles/App.css';
import Footer from './components/footer'
import Main from './components/main';
import TopBanner from './components/topbanner';
import { useEffect, useState } from 'react';
// import { OneCard } from './services/magic'
import mock from './mock_data/489865.json' //multi-color
// import mock from './mock_data/3215.json' //uni-color
// import mock from './mock_data/3210.json' //instant
import Loading from './components/loading.js'
// import Background from './components/movie';
import Renderonecard from './components/renderonecard';
import { Outlet } from 'react-router-dom';

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
  // talvez inserir o outlet do router aqui???

  return (
    <div className='container'>
      {/* <Background /> */}
      <TopBanner />
      {!temResposta ? <Loading /> : <Renderonecard output={[mock.card]} />}
      <Main />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
