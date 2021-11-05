/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Message from '../components/Message';
import styles from '../styles/MutantHome.module.css';

const Home = ({
  inputEl,
  inputFetch,
  loading,
  msg,
  onChange,
  onClick,
  onSubmit,
  textEl,
}) => (
  <section className={styles.mutant__home__container} id="parent-id">
    {msg.status === 200 ? (
      <Message
        onClick={onClick}
        text="Volver a analizar"
        msg="mutante detectado"
      />
    ) : (
      <>
        <h6>{loading ? 'Fetching Data...' : 'Ingresá la secuencia de ADN'}</h6>
        <p className={styles.errorMessage} ref={inputFetch}>
          Fetching Data.....
        </p>
        <form onSubmit={onSubmit}>
          <label htmlFor="input-adn" />
          <input
            type="text"
            name="input-adn"
            id="input-adn"
            placeholder="ATGCGA, AGGCTA, CCCAGT, TCACTG, TCACTG, TATAGA"
            maxLength="36"
            onChange={onChange}
            data-test="test-dna"
            required
            ref={textEl}
            mask="ATGCGA, AGGCTA, CCCAGT, TCACTG, TCACTG, TATAGA"
            data-format="****** ****** ****** ****** ****** ******"
          />
          <button type="submit">Analizar</button>
        </form>
        <p className={styles.errorMessage} ref={inputEl}>
          Caracteres permitidos "A", "C", "G", "T"
        </p>
      </>
    )}
  </section>
);

export default Home;
