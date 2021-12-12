import './styles/App.css';
import Footer from './components/footer'
import Main from './components/main';
import TopBanner from './components/topbanner';
// import RandomCard from './components/randomCard';

// import { useEffect, useState } from 'react';
// import { OneCard } from './services/magic'



function App() {

  // const [carta, setCarta] = useState([]);

  // useEffect(() => {
  //   OneCard()
  //     .then(teste => {
  //       setCarta(teste);
  //       // console.log(teste);
  //     })
  // }, []);

  return (
    <div className='container'>
      <TopBanner />
      {/* <RandomCard random={carta.card} /> */}
      <Main />
      <Footer />
      {/* <img src={carta.card.imageUrl} alt="random card"/>
      <ul>
        <li> {carta.card.name} </li>
        <li> {carta.card.artist} </li>
        <li> {carta.card.colors[0]} </li>
        <li> {carta.card.manaCost} </li>
        <li> {carta.card.setName} </li>
        <li> {carta.card.set} </li>
        <li> {carta.card.types} </li>
        <li> {carta.card.power} </li>
        <li> {carta.card.toughness} </li>
      </ul> */}
    </div>
  );
}

export default App;
