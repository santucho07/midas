/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Message from '../components/Message';
import styles from '../styles/MutantUpload.module.css';

const MutantUpload = ({
  onChange,
  onClick,
  formRef,
  checkedOpt,
  status,
  onBack,
}) => (
  <section className={styles.mutant__upload__container} id="parent-id">
    {status === 'ok' ? (
      <Message
        onClick={onBack}
        text="Cargar otro"
        msg="MUTANTE CARGADO EXITOSAMENTE"
      />
    ) : (
      <>
        <h6>Registrar nuevo mutante</h6>
        <form ref={formRef} name="mutants">
          <label htmlFor="name">Nombre del mutante*</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            required
          />
          <label htmlFor="superpoder">Superpoder*</label>
          <input
            type="text"
            name="superpoder"
            id="superpoder"
            placeholder="Ingrese el superpoder"
            required
          />

          <section className={styles.mutant__upload__section}>
            <label>Nivel</label>
            <ul>
              <li>
                <label htmlFor="bajo">Bajo</label>
                <input
                  type="radio"
                  id="bajo"
                  name="bajo"
                  value="1"
                  onChange={onChange}
                  checked={checkedOpt === '1'}
                />
              </li>
              <li>
                <label htmlFor="medio">Medio</label>
                <input
                  type="radio"
                  id="medio"
                  name="medio"
                  value="2"
                  onChange={onChange}
                  checked={checkedOpt === '2'}
                  required
                />
              </li>
              <li>
                <label htmlFor="alto">Alto</label>
                <input
                  type="radio"
                  id="alto"
                  name="alto"
                  value="3"
                  onChange={onChange}
                  checked={checkedOpt === '3'}
                  required
                />
              </li>
              <li>
                <label htmlFor="muyalto">Muy Alto</label>
                <input
                  type="radio"
                  id="muyalto"
                  name="muyalto"
                  value="4"
                  onChange={onChange}
                  checked={checkedOpt === '4'}
                  required
                />
              </li>
            </ul>
          </section>
          <button type="submit" onClick={onClick}>
            Enviar
          </button>
        </form>
      </>
    )}
    <p id="errorMessage"></p>
  </section>
);

export default MutantUpload;
