import { useState } from "react";

import styles from "./signIn-form.module.scss";
import FormInput from "../../blocks/form-input/form-input";
import {
  emailValidation,
  passwordValidation,
} from "../../../helpers/input-validation";
import {emailValidationPattern} from "../../../helpers/vars/patterns";

const SignInForm = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [emailValidationMessage, setEmailValidationMessage] = useState("");
  const [passwordValidationMessage, setPasswordValidationMessage] = useState("");
  return (
    <form className={styles["signIn-form"]}>
      <h1 className={styles.title}> welcome</h1>
      <div className={styles["input-wrapper"]}>
        <FormInput
          value={emailValue}
          changeValue={setEmailValue}
          name="email"
          type="email"
          placeholder="введите email"
          validationMessage={emailValidationMessage}
          setValidateMessage={setEmailValidationMessage}
          required
          pattern={emailValidationPattern}
        />
      </div>
      <div className={styles["input-wrapper"]}>
        <FormInput
          value={passwordValue}
          changeValue={setPasswordValue}
          name="password"
          type="password"
          placeholder="введите пароль"
          validationMessage={passwordValidationMessage}
          setValidateMessage={setPasswordValidationMessage}
          required
          minLength={6}
          maxLength={40}
        />
      </div>
      <input
        type="submit"
        value="Login"
        className={styles["input-submit"]}
        onClick={() => {
            setEmailValidationMessage(emailValidation(emailValue))
            setPasswordValidationMessage(passwordValidation(passwordValue))
        }}
      />
    </form>
  );
};

export default SignInForm;
