import React from 'react';
import SignInForm from '../layouts/signIn-form/signIn-form'
import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles['app__signIn-form-wrapper']}>
          <SignInForm/>
      </div>
    </div>
  );
}

export default App;
