'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './page.module.css';
import { auth } from '@/firebase';
import { AuthErrorCodes, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

const page = () => {
  // Inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // validering
    const [formIsValid, setFormIsValid] = useState(false);

  // Meddelanden
  const [errorMessage, setErrorMessage] = useState('');

  // // Formulär submit
  const onSubmit = (e) => {
    e.preventDefault();
    loginEmailPassword();
    monitorAuthState();
    console.log(email, password);
  }

  // Logga in med email och lösenord
  const loginEmailPassword = async () => {
    const loginEmail = email;
    const loginPassword = password;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );

      console.log(userCredential.user);
      setFormIsValid(true);
    } catch (error) {
      console.log(error);
      // setErrorMessage("Fel lösenord. Försök igen");
      showLoginError(error);
    }
  };

  // fel meddelande om inloggning misslyckas
  const showLoginError = (error) => {
    if (error.code == AuthErrorCodes.INVALID_EMAIL) {
      setErrorMessage('Fel email. Försök igen');
    } else if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
      setErrorMessage('Fel lösenord. Försök igen');
    } else {
      setErrorMessage(`Error: ${error.message}`);
    }
  };

// Hanterar inloggat tillstånd
  const monitorAuthState = async () => {
      onAuthStateChanged(auth, user => {
        if(user) {
            console.log(`${user.email} är inloggad` );
            // Visa inloggat läge 
        } else {
          console.log(`${user} är utloggad` );
            // Visa inloggningsformulär 
        }
      })
  }

  

  return (
    <div className={styles.mainContainer}>
      

      <form className={styles.formContainer} onSubmit={onSubmit}>
    <h1>Logga In</h1>
    {!formIsValid && (
      errorMessage
    )}
    <div className={styles.inputContainer}> 
      <label>Email</label>
      <input type="email" name='email' value={email} 
          onChange={(e) => setEmail(e.target.value)}
 />
    
    </div>
    <div className={styles.inputContainer}> 
    <label>Password</label>
      <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
    
    </div>
    <div className={styles.btnContainer}> 
    
      <button type='submit'>Logga in</button>
    </div>
    
      <div>Har du ej konto? Klicka <Link href={"/createAccount"}>här</Link> för att skapa</div>

    </form>
    </div>
  );
};

export default page;
