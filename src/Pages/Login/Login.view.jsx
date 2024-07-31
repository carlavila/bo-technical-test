import React from 'react';
import { Form, Field } from 'react-final-form';
import { loginImagePath, legalText } from '../../config';
import { palette } from '../../muiTheme';
import { PrimaryButton } from '../../widgets/Buttons/Buttons';
import RenderTextInput from '../../Renderers/RenderTextInput';
import { Link } from 'react-router-dom';
import styles from './login.module.scss';

function LoginView({ onSubmit, errorMsg, validate }) {
  const backGroundStyle = loginImagePath
    ? {
        backgroundImage: `url(${loginImagePath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : { backgroundColor: palette.primary.main };

  return (
    <div className={styles.loginWrapper} style={backGroundStyle}>
      <Form onSubmit={onSubmit} validate={validate}>
        {({ handleSubmit, invalid }) => {
          return (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputWrapper}>
                <Field name="username" label="Username" type="input" component={RenderTextInput} />
              </div>
              <div className={styles.inputWrapper}>
                <Field
                  name="password"
                  label="Password"
                  type="password"
                  component={RenderTextInput}
                />
              </div>
              <div className={styles.errorMsg}>{!!errorMsg && errorMsg}</div>
              <Link to="/forgotpassword" className={styles.link}>
                {'Forgot password?'}
              </Link>
              <PrimaryButton
                label="Login"
                type="submit"
                className={styles.btn}
                disabled={invalid}
              />
            </form>
          );
        }}
      </Form>
      <div className={styles.copyrightText}>{legalText}</div>
    </div>
  );
}
export default LoginView;
