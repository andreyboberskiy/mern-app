import React, { useCallback } from "react";
import s from "../SignIn/SignIn.module.scss";
import { Form, Formik, Field } from "formik";
import { connect } from "react-redux";
import { signUp } from "modules/auth/store/actions";
import { Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import { routesByName } from "modules/routes/routesByName";

const initialValues = {
  login: "",
  password: "",
};

const SignUp = ({ signUp }) => {
  const handleSubmit = useCallback(
    async (values) => {
      console.log(values);
      await signUp(values);
    },
    [signUp]
  );

  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.header}>Регистрация</div>
        <div className={s.formContainer}>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className={s.formInner}>
              <Field
                name="email"
                placeholder="Email"
                // component={(props) => (
                //   <TextField
                //     id="standard-basic"
                //     label="Логин"
                //     className={s.field}
                //     inputProps={{ ...props }}
                //   />
                // )}
              />
              <Field
                name="password"
                placeholder="Пароль"
                // component={() => (
                //   <TextField
                //     id="standard-basic"
                //     label="Пароль"
                //     className={s.field}
                //   />
                // )}
              />
              <Field
                name="passwordRepeat"
                placeholder="Повторите пароль"
                // component={() => (
                //   <TextField
                //     id="standard-basic"
                //     label="Повторите пароль"
                //     className={s.field}
                //   />
                // )}
              />
              <Button
                className={s.submitBtn}
                type="submit"
                variant="contained"
                color="primary"
              >
                Создать аккаунт
              </Button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { signUp })(SignUp);
