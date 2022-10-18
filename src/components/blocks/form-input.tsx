import styles from './form-input.module.scss'
import {useState} from "react";

type props = {
    type: string;
    title: string;
    placeholder: string;
    name: string;
    value: string;
    changeValue: (value: string) => void;
    validationCheck: (value:string) => string
}

const FormInput = (props:props) => {
    const [validationMessage, setValidateMessage] = useState('')
    const {type, title, placeholder, name, value, changeValue, validationCheck} = props;
    return <label className={styles.label}>
        <h2 className={styles.title}> {title} </h2>
        <input value={value} name={name} type={type} placeholder={placeholder} required className={styles.input}
               onChange={(e)=> {changeValue(e.target.value)
                   setValidateMessage('')}}
               onBlur={()=> setValidateMessage(validationCheck(value))}/>
        {validationMessage && <div className={styles['error-message']}>{validationMessage}</div>}
    </label>
}

export default FormInput