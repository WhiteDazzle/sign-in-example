import styles from "./form-input.module.scss";
import { useState } from "react";

type props = {
  type: string;
  placeholder: string;
  name: string;
  value: string;
  changeValue: (value: string) => void;
  validationMessage: string;
  setValidateMessage: (value: string) => void;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  required?: boolean;
};

const FormInput = (props: props) => {
  const {
    type,
    placeholder,
    name,
    value,
    changeValue,
    validationMessage,
    setValidateMessage,
    required,
    maxLength,
    minLength,
    pattern,
  } = props;
  const [underlineFocusClass, setUnderlineFocusClass] = useState("");
  return (
    <label className={styles.label}>
      <input
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
        className={styles.input}
        maxLength={maxLength}
        required={required}
        minLength={minLength}
        pattern={pattern}
        onFocus={() => {
          setUnderlineFocusClass("underline--focus");
        }}
        onChange={(e) => {
          changeValue(e.target.value);
          setValidateMessage("");
        }}
        onBlur={() => {
          setUnderlineFocusClass("underline--defocus");
        }}
      />
      <div className={styles["underline-wrapper"]}>
        <div className={styles[underlineFocusClass]}></div>
      </div>
      {validationMessage && (
        <div className={styles["error-message"]}>{validationMessage}</div>
      )}
    </label>
  );
};

export default FormInput;
