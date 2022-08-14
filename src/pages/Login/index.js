import { Button, Form, Input, Typography } from "antd";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { authenticationActionCreator } from "../../store/actions/authentication";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const { Text } = Typography;

export default function Login(params) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    dispatch(authenticationActionCreator(null));
  }, [dispatch]);
  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, values["email"], values["password"])
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(authenticationActionCreator(user));
        navigate("/dashboard");
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  };

  return (
    <section className="login-section">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          label="email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
              type: "email",
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
              type: "password",
            },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <NavLink to="/signup">register now!</NavLink>
        </Form.Item>
        <Text type="danger">{errorMessage}</Text>
      </Form>
    </section>
  );
}
