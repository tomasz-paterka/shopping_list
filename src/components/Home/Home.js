import React from "react";

import Aux from '../../hoc/Auxiliary';

const Home = () => (
  <Aux>
    <div className='Home'>
      <h1>Aplikacja Shopping</h1>
      <h3>Proszta i łatwa w obsłudze aplikacja, ułatwiająca robienie zakupów.</h3>
      <p>
        Aktualnie ważne jest aby robić szybkie, zorganizowane i przemyślane zakupy. 
      </p>
      <ul className='Home__list'>
        <li className='Home__list--item'>Po kliknięciu na przycisk Lista można dodać listę zakupów, którą można dowolnie modyfikować. </li>
        <li className='Home__list--item'>Klikając na poszczególne elementy listy, możemy je edytować zmieniając nazwe i ilość.</li>
        <li className='Home__list--item'>Listę możemy zapisać do pamięci przeglądarki.</li>
      </ul>
    </div>
  </Aux>
);

export default Home;