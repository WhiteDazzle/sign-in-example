import { useState } from "react";

import styles from "./signIn-form.module.scss";
import FormInput from "../../blocks/form-input/form-input";
import {
    validateEmail,
    validatePassword,
} from "../../../helpers/input-validation";
import {emailValidationPattern} from "../../../helpers/vars/patterns";

const SignInForm = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [emailValidationMessage, setEmailValidationMessage] = useState("");
  const [passwordValidationMessage, setPasswordValidationMessage] = useState("");
  const [geo, setGeo] = useState<string[]>([])
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  }

  function success(pos: any) {
    var crd = pos.coords;
    setGeo([
      'Ваше текущее местоположение:',
      `Широта: ${crd.latitude}`,
      `Долгота: ${crd.longitude}`,
      `Плюс-минус ${crd.accuracy} метров.`
    ])
    console.log('Ваше текущее местоположение:');
    console.log(`Широта: ${crd.latitude}`);
    console.log(`Долгота: ${crd.longitude}`);
    console.log(`Плюс-минус ${crd.accuracy} метров.`);
  }

  function error(err: any) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  return (
    <form className={styles["signIn-form"]}>
      <h1 className={styles.title}> welcome</h1>
      {/*<div className={styles["input-wrapper"]}>*/}
      {/*  <FormInput*/}
      {/*    value={emailValue}*/}
      {/*    onChange={({target:{value}})=> {*/}
      {/*        setEmailValue(value)*/}
      {/*        setEmailValidationMessage('')*/}
      {/*    }}*/}
      {/*    name="email"*/}
      {/*    type="email"*/}
      {/*    placeholder="введите email"*/}
      {/*    validationMessage={emailValidationMessage}*/}
      {/*    required*/}
      {/*    pattern={emailValidationPattern}*/}
      {/*  />*/}
      {/*</div>*/}
      {/*<div className={styles["input-wrapper"]}>*/}
      {/*  <FormInput*/}
      {/*    value={passwordValue}*/}
      {/*    onChange={({target:{value}})=> {*/}
      {/*        setPasswordValue(value)*/}
      {/*        setPasswordValidationMessage('')*/}
      {/*    }}*/}
      {/*    name="password"*/}
      {/*    type="password"*/}
      {/*    placeholder="введите пароль"*/}
      {/*    validationMessage={passwordValidationMessage}*/}
      {/*    required*/}
      {/*    minLength={6}*/}
      {/*    maxLength={40}*/}
      {/*  />*/}
      {/*</div>*/}
      {/*<input*/}
      {/*  type="submit"*/}
      {/*  value="Login"*/}
      {/*  className={styles["input-submit"]}*/}
      {/*  onClick={(e) => {*/}
      {/*      e.preventDefault()*/}
      {/*      e.stopPropagation()*/}
      {/*      setEmailValidationMessage(validateEmail(emailValue))*/}
      {/*      setPasswordValidationMessage(validatePassword(passwordValue))*/}
      {/*  }}*/}
      {/*/>*/}
      <button
        type='button'
        className={styles["input-submit"]}
        onClick={() => {
          navigator.geolocation.getCurrentPosition(success, error, options)
        }}
      >
        получить геолокацию в консоли
      </button>
      {geo.map((current: string)=> <p className={styles['geo-text']}>{current}</p>)}
    </form>
  );
};

export default SignInForm;
