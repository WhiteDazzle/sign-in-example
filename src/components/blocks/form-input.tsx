import styles from "./form-input.module.scss";
import { useState } from "react";

type props = {
  type: string;
  placeholder: string;
  name: string;
  value: string;
  changeValue: (value: string) => void;
  validationCheck: (value: string) => string;
};

const FormInput = (props: props) => {
  const [underlineFocusClass, setUnderlineFocusClass] = useState("");
  const [validationMessage, setValidateMessage] = useState("");
  const [underlineErrorClass, setUnderlineErrorClass] = useState("");
  const { type, placeholder, name, value, changeValue, validationCheck } =
    props;
  return (
    <label className={styles.label}>
      <input
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className={styles.input}
        onFocus={() => {
          setUnderlineFocusClass("underline--focus");
          setUnderlineErrorClass('underline--clear-error');
        }}
        onChange={(e) => {
          changeValue(e.target.value);
          setValidateMessage("");
        }}
        onBlur={() => {
          setValidateMessage(validationCheck(value));
          setUnderlineFocusClass("underline--defocus");
          setUnderlineErrorClass('underline--error');
        }}
      />
      <div className={styles["underline-wrapper"]}>
        <div
          className={`${styles[underlineFocusClass]} ${
            validationMessage && underlineFocusClass === "underline--focus" && styles["animation-delay"]
          }`}
        ></div>
        <div className={validationMessage && styles[underlineErrorClass]}></div>
      </div>
      {validationMessage && (
        <div className={styles["error-message"]}>{validationMessage}</div>
      )}
    </label>
  );
};

export default FormInput;
