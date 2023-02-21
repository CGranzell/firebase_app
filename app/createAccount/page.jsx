'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './page.module.css';
import { auth } from '@/firebase';
import { AuthErrorCodes, createUserWithEmailAndPassword } from 'firebase/auth';

const page = () => {
  // Inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // validering
    const [formIsValid, setFormIsValid] = useState(false);

  // Meddelanden
  const [errorMessage, setErrorMessage] = useState("");

  
  // Formulär submit
  const onSubmit = (e) => {
    e.preventDefault();
    createAccount();
    console.log(email, password);
  }

// Skapa konto
  const createAccount = async () => {
    const loginEmail = email;
    const loginPassword = password;

    try {

      const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
     
      console.log(userCredential.user);
      setFormIsValid(true);
    } catch(error) {
      console.log(error);
      // setErrorMessage("Fel lösenord. Försök igen");
      showCreateAccountError(error);
    }
        
  };


// fel meddelande om inloggning misslyckas
const showCreateAccountError = (error) => {
  if(error.code == AuthErrorCodes.EMAIL_EXISTS) {
      setErrorMessage("email adressen är upptagen. Försök igen")
  } 
   else {
      setErrorMessage(`Error: ${error.message}`)
  }
}


  return (
    <div className={styles.mainContainer}>

    
    <form className={styles.formContainer} onSubmit={onSubmit}>
    <h1>Skapa konto</h1>
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
    
      <button type='submit'>Skapa konto</button>
    </div>
    
      <div>Har du redan ett konto? Klicka <Link href={"/login"}>här</Link> för att logga in</div>

    </form>
    </div>
  )
}

export default page;

