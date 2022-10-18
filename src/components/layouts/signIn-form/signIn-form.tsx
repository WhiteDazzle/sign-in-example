import { useState } from "react";

import styles from "./signIn-form.module.scss";
import FormInput from "../../blocks/form-input";
import {emailValidation, passwordValidation} from "../../../helpers/input-validation";

const SignInForm = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
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
          validationCheck={emailValidation}
        />
      </div>
      <div className={styles["input-wrapper"]}>
        <FormInput
          value={passwordValue}
          changeValue={setPasswordValue}
          name="password"
          type="password"
          placeholder="введите пароль"
          validationCheck={passwordValidation}
        />
      </div>
      <input type="submit" value="Login" className={styles["input-submit"]} />
    </form>
  );
};

export default SignInForm;
