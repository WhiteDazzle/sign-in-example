import styles from './form-input.module.scss'
import {useState} from "react";

type props = {
    type: string;
    placeholder: string;
    name: string;
    value: string;
    changeValue: (value: string) => void;
    validationCheck: (value:string) => string
}

const FormInput = (props:props) => {
    const [underlineClass, setUnderlineClass] = useState('')
    const [validationMessage, setValidateMessage] = useState('')
    const {type, placeholder, name, value, changeValue, validationCheck} = props;
    return <label className={styles.label}>
        <input value={value} name={name} type={type} placeholder={placeholder} required className={styles.input}
               onFocus={()=> {setUnderlineClass('underline--focus')}
               }
               onChange={(e)=> {changeValue(e.target.value)
                   setValidateMessage('')}}
               onBlur={()=> {
                   setValidateMessage(validationCheck(value));
                   setUnderlineClass('underline--defocus')
               }}/>
        <div className={styles['underline-wrapper']}>
            <div className={styles[underlineClass]}></div>
            <div className={validationMessage && styles['underline--error']}></div>
        </div>
        {validationMessage && <div className={styles['error-message']}>{validationMessage}</div>}
    </label>
}

export default FormInput