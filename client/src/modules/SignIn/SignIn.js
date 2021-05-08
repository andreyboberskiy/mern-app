import React, { useCallback } from "react";
import s from "./SignIn.module.scss";
import { Form, Formik, Field } from "formik";
import { connect } from "react-redux";
import { signIn } from "modules/auth/store/actions";
import { Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import { routesByName } from "modules/routes/routesByName";

const initialValues = {
  login: "",
  password: "",
};

const SignIn = ({ signIn }) => {
  const handleSubmit = useCallback(
    async (values) => {
      await signIn(values);
    },
    [signIn]
  );

  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.header}>Авторизация</div>
        <div className={s.formContainer}>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className={s.formInner}>
              <Field
                name="email"
                placeholder="email"
                //   component={() => (
                //     <TextField
                //       id="standard-basic"
                //       label="Логин"
                //       className={s.field}
                //     />
                //   )}
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
              <Button
                className={s.submitBtn}
                type="submit"
                variant="contained"
                color="primary"
              >
                Войти
              </Button>
            </Form>
          </Formik>
        </div>
        <div className={s.noAcc}>
          Нет аккаунта?{" "}
          <span>
            <Link to={routesByName.signUp}>Загеристрируйтесь</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { signIn })(SignIn);
