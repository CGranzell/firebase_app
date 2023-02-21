'use client';
import React, { useState } from 'react';
import styles from '../styles/Form.module.css';

const Form = ({ header }) => {
   
      // Formulär submit
  const onSubmit = (e) => {
    e.preventDefault();
    // loginEmailPassword();
    // console.log(email, password);
  }
  return (
    <form className={styles.formContainer} onSubmit={onSubmit}>
      <h1>{header}</h1>
    </form>
  )
}

export default Form