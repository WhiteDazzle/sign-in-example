import React from 'react';
import SignInForm from '../layouts/signIn-form/signIn-form'
import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles['signIn-form-wrapper']}>
          <SignInForm/>
         <a href='tel:89180721220' className='WelcomePack__link WelcomePack__link--number'> 89180721220 </a>
      </div>
    </div>
  );
}

export default App;
