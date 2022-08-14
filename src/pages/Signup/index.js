import { Button, Form, Input, Typography } from "antd";

import { useDispatch } from "react-redux";

import { authenticationActionCreator } from "../../store/actions/authentication";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Signup.scss";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
const { Text } = Typography;

export default function Signup(params) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticationActionCreator(null));
  }, [dispatch]);

  const [errorMessage, setErrorMessage] = useState("");
  const onFinish = async (values) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, values["email"], values["password"])
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user is ok ", user.email);
        dispatch(authenticationActionCreator(user));
        navigate("/dashboard");
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        // ..
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <section className="signup-section">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
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
            Register
          </Button>
          Or <NavLink to="/login">Login now!</NavLink>
        </Form.Item>
        <Text type="danger">{errorMessage}</Text>
      </Form>
    </section>
  );
}
