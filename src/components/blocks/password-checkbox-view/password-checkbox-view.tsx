import { useState } from "react";
import styles from "./password-checkbox-view.module.scss";

const PasswordCheckboxView = ({changeInputType}: {changeInputType: (value:string) => void}) => {
  const [checked, changeChecked] = useState(false);
  const onChangeCheckbox = () => {
    changeChecked(!checked)
    console.log(checked)
    if(checked) changeInputType('text')
    if(!checked) changeInputType('password')
  }
  return (
    <label className={styles['label']}>
      <input
        type="checkbox"
        className={styles["checkbox-password-input"]}
        checked={checked}
        onChange={onChangeCheckbox}
      />
      <div
        className={`${styles["checkbox-password"]} ${
          checked
            ? styles["checkbox-password--view"]
            : styles["checkbox-password--no-view"]
        }`}
      ></div>
    </label>
  );
};

export default PasswordCheckboxView
