/* eslint-disable react/button-has-type */
import React from 'react';
import verified from '../assets/verified.png';
import styles from '../styles/Message.module.css';

const Message = ({ onClick, text, msg }) => (
  <section className={styles.container__message}>
    <figure>
      <img
        src={verified}
        alt="verified.png"
        srcSet={verified}
        width={60}
        height={60}
      />
    </figure>
    <span>{msg}</span>
    <button onClick={onClick}>{text}</button>
  </section>
);

export default Message;
