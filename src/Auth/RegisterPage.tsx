import React, { useState } from "react";
import { Link } from "react-navi";
import { onRegister } from "./auth.api";
import {
  AuthForm,
  AuthFormContainer,
  Body,
  Button,
  H1Title,
  Input,
  Main,
  OverlaiCont,
  OverlayContainer,
  OverlayPanel,
  Span,
} from "./Auth.component";
import "./Auth.css";

const RegisterPage = () => {
  const [{ name, email, password }, setRegisterData] = useState({
    name: "",
    password: "",
    email: "",
  });

  const [error, setError] = useState("");

  const register = (event: React.FormEvent) => {
    event.preventDefault();
    // perform API
    onRegister({
      name,
      password,
      email,
    });
  };

  return (
    <Body>
      <Main>
        <AuthFormContainer onSubmit={register}>
          <AuthForm>
            <H1Title>Register</H1Title>
            <Span>or use your account</Span>
            <Input
              value={name}
              name="name"
              placeholder="Name"
              onChange={(event) =>
                setRegisterData({
                  name: event.target.value,
                  password,
                  email,
                })
              }
            />
            <Input
              value={email}
              name="email"
              placeholder="Email"
              onChange={(event) =>
                setRegisterData({
                  name,
                  password,
                  email: event.target.value,
                })
              }
            />
            <Input
              value={password}
              name="password"
              type="password"
              placeholder="Password"
              onChange={(event) =>
                setRegisterData({
                  name,
                  password: event.target.value,
                  email,
                })
              }
            />
            <Button type="submit">Register</Button>
            {error.length > 0 && <p>{error}</p>}
            <p>
              Already have an account? <Link href="/">Login</Link>
            </p>
          </AuthForm>
        </AuthFormContainer>
        <OverlayContainer>
          <OverlaiCont>
            <OverlayPanel>
              <H1Title>Datacakra Admin Panel</H1Title>
              <p> This admin panel is created for Datacakra Job Application</p>
            </OverlayPanel>
          </OverlaiCont>
        </OverlayContainer>
      </Main>
    </Body>
  );
};

export default RegisterPage;
