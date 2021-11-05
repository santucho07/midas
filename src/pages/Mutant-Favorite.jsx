/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// eslint-disable-next-line jsx-a11y/click-events-have-key-events
import React, { useEffect, useState } from 'react';
import styles from '../styles/MutantFavorite.module.css';
import garbage from '../assets/garbage.png';
import star from '../assets/star.png';
import Pop from '../components/Pop';

// *********************************************
// Componente para gestionar mutantes favoritos
// *********************************************
export const Favorite = ({ st, handlerFav }) => {
  const [counter, setCounter] = useState(0);
  const storage = window.localStorage;

  const handleRemoveStorage = (e) => {
    storage.removeItem(e.name);
    handlerFav(localStorage);
    setCounter(counter + 1);
  };

  useEffect(() => {
    if (!counter) {
      <Favorite st={storage} handlerFav={handlerFav} />;
    }
  }, [counter]);
  return (
    <div className={styles.mutant__container__card}>
      {Object.keys(st)
        .map((e) => JSON.parse(st.getItem(e)))
        .map((ch, key) => (
          <div className={styles.mutant__card} keys={key}>
            <ul className={styles.mutant__ul__title}>
              <li>{ch.level}</li>
              <li>{ch.name}</li>
            </ul>
            <ul className={styles.mutant__ul__content}>
              <li>{ch.superPower}</li>
            </ul>
            <ul className={styles.mutant__ul__footer}>
              <li>
                <img
                  src={garbage}
                  data-test="del-favorite"
                  alt="garbage.png"
                  srcSet={garbage}
                  width="30px"
                  height="30px"
                  onClick={() => handleRemoveStorage(ch)}
                />
              </li>
            </ul>
          </div>
        ))}
    </div>
  );
};

// *********************************************
// Componente Principal Mutantes Favoritos
// *********************************************
const MutantFavorite = ({ data, handlerFav }) => {
  const [counter, setCounter] = useState(0);
  const storage = window.localStorage;

  const handleAddStorage = (e) => {
    if (storage.length <= 4) {
      storage.setItem(e.name, JSON.stringify(e));
      handlerFav(localStorage);
      setCounter(counter + 1);
    }
  };

  useEffect(() => {
    if (!counter) {
      <Favorite st={storage} handlerFav={handlerFav} />;
    }
  }, [counter]);

  return (
    <section className={styles.mutan__section__container}>
      <h6>Listado de mutantes</h6>
      {storage.length > 4 && (
        <Pop msg="Solo puede tener hasta 5 mutantes favoritos" />
      )}
      {storage.length && <Favorite st={storage} handlerFav={handlerFav} />}
      <div className={styles.mutant__container__card}>
        {data.map((ch, key) => (
          <div className={styles.mutant__card} keys={key}>
            <ul className={styles.mutant__ul__title}>
              <li>{ch.level}</li>
              <li>{ch.name}</li>
            </ul>
            <ul className={styles.mutant__ul__content}>
              <li>{ch.superPower}</li>
            </ul>
            <ul className={styles.mutant__ul__footer}>
              <li>
                <img
                  src={star}
                  data-test="add-favorite"
                  alt="star.png"
                  srcSet={star}
                  onClick={() => handleAddStorage(ch)}
                />
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MutantFavorite;
