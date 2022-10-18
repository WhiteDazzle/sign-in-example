import styles from './form-input.module.scss'

const FormInput = () => {
    return <label className={styles.label}>
        <h2 className={styles.title}> email </h2>
        <input type='email' placeholder='введите email' className={styles.input}/>
    </label>
}

export default FormInput