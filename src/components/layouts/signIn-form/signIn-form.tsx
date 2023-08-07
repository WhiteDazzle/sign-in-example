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
  const [err, setErr] = useState<any>('')
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
    setErr('')
    console.log('Ваше текущее местоположение:');
    console.log(`Широта: ${crd.latitude}`);
    console.log(`Долгота: ${crd.longitude}`);
    console.log(`Плюс-минус ${crd.accuracy} метров.`);
  }

  function error(err: any) {
    setErr(err)
  }
  console.log(err)
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
      {err && <>
        <p className={styles['err-text']}>ошибка. для подробностей смотреть консоль</p>
        <p className={styles['err-text']}>code: {err.code}</p>
        <p className={styles['err-text']}>message: {err.message}</p>
      </>}
      {!err && geo.map((current: string)=> <p className={styles['geo-text']}>{current}</p>)}
    </form>
  );
};

export default SignInForm;
