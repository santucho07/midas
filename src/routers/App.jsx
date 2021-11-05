import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, MutantFavorite, MutantUpload, NotFound } from '../pages/index';
import Layout from '../components/Layout';
import callApi from '../api';

const App = () => {
  const [arrayDna, setArrayDna] = useState([]);
  const [requestDna, setRequestDna] = useState('');
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [heros, setHeros] = useState([]);
  const [quantityF, setQuantityF] = useState(0);
  const DNA = ['a', 'c', 'g', 't'];
  const inputEl = useRef(null);
  const textEl = useRef(null);
  const inputFetch = useRef(null);

  /* ************************************************************************** */
  /* ArrowFunction para manejar los datos del formulario de la page Home (API)  */
  /* ************************************************************************** */

  const handleKeyPess = (e) => {
    if (DNA.includes(e.nativeEvent.data)) {
      inputEl.current.style.color = 'white';
      setArrayDna([...e.target.value]);
    }

    if (!DNA.includes(e.nativeEvent.data)) {
      inputEl.current.style.color = 'red';
    }
    const n = 6;
    const result = new Array(Math.ceil(arrayDna.length / n))
      .fill()
      .map(() => arrayDna.splice(0, n).join('').toString().toUpperCase());
    setRequestDna(result);
  };

  const handleClickBack = () => {
    setStatus('');
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    setIsLoading(true);
    callApi(requestDna)
      .then((msg) => {
        if (msg.ok) {
          setIsLoading(false);
          setStatus(msg);
        } else {
          inputEl.current.style.color = 'red';
          inputEl.current.innerText = "DNA isn't Mutant";
        }
      })
      .catch((error) => setStatus(error));
    inputEl.current.innerText = '';
    textEl.current.value = '';
  };

  /* ***************************************************** */
  /*        End ArroyFunction Form Home                    */
  /* ***************************************************** */

  /* ***************************************************************************** */
  /* ArrowFunction para manejar los datos del formulario de la page Mutast Upload  */
  /* ***************************************************************************** */

  const formRef = useRef(null);
  const [state, setState] = useState('1');

  const handleSubmitHero = (e) => {
    const paraghrapEl = document.getElementById('errorMessage');
    paraghrapEl.innerText = '';

    const formData = new FormData(formRef.current);
    e.preventDefault();
    const hero = {
      name: formData.get('name'),
      superPower: formData.get('superpoder'),
      level: state,
    };
    if (
      document.forms['mutants']['name'].value === '' ||
      document.forms['mutants']['superpoder'].value === ''
    ) {
      paraghrapEl.style.color = 'red';
      paraghrapEl.innerText = 'No se permiten campos vacíos';
    } else {
      setHeros((prev) => [...prev, hero]);
      setStatus('ok');
      document.forms['mutants']['bajo'].checked = true;
    }
  };
  const handleChangeHero = (e) => {
    setState(e.target.value);
  };

  /* ***************************************************** */
  /*        End ArroyFunction Form Mutanst Upload          */
  /* ***************************************************** */

  /* ***************************************************** */
  /*        ArroyFunction Quantity Mutants Fav             */
  /* ***************************************************** */

  const handlerFav = (e) => {
    setQuantityF(e.length);
  };

  /* ***************************************************** */
  /*        End ArroyFunction Quantity Mutants Fav         */
  /* ***************************************************** */
  return (
    <BrowserRouter>
      <Layout quantity={quantityF}>
        <Switch>
          <Route exact path="/">
            <Home
              inputEl={inputEl}
              inputFetch={inputFetch}
              loading={isLoading}
              msg={status}
              onChange={handleKeyPess}
              onClick={handleClickBack}
              onSubmit={handleSubmit}
              textEl={textEl}
            />
          </Route>
          <Route exact path="/mutants/upload">
            <MutantUpload
              onChange={handleChangeHero}
              onClick={handleSubmitHero}
              onBack={handleClickBack}
              formRef={formRef}
              checkedOpt={state}
              status={status}
            />
          </Route>
          <Route exact path="/mutants/favorite">
            <MutantFavorite data={heros} handlerFav={handlerFav} />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
