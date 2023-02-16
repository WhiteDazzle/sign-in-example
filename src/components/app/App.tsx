import React from 'react';
import SignInForm from '../layouts/signIn-form/signIn-form'
import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles['signIn-form-wrapper']}>
          <SignInForm/>
         <input type="file" id="fileProfile2" name="fileProfile2"  accept=".jpg, .jpeg, .png, .pdf">
      </div>
    </div>
  );
}

export default App;
