import styles from './signIn-form.module.scss'
import FormInput from "../../blocks/form-input";

const SignInForm = () => {
    return <form className={styles['signIn-form']}>
        <h1 className={styles.title}> sign in</h1>
        <div className={styles['input-wrapper']}>
            <FormInput/>
        </div>
        <div className={styles['input-wrapper']}></div>
        <input type='submit' value='Login' className={styles['input-submit']}/>
    </form>
}

export default SignInForm