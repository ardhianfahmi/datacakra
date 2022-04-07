import React, { useState } from "react";
import { Link, useNavigation } from "react-navi";
import { onLogin } from "./auth.api";
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

const LoginPage = () => {
  const navigation = useNavigation();
  const [{ email, password }, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const login = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await onLogin({
      email,
      password,
    });

    if (response && response.error) {
      setError(response.error);
    } else {
      navigation.navigate("/home");
    }
  };
  return (
    <Body>
      <Main>
        <AuthFormContainer onSubmit={login}>
          <AuthForm>
            <H1Title>Login</H1Title>

            <Input
              className="emailform"
              placeholder="Input Your Email"
              value={email}
              onChange={(event) =>
                setCredentials({
                  email: event.target.value,
                  password,
                })
              }
            />
            <Input
              className="passform"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) =>
                setCredentials({
                  email,
                  password: event.target.value,
                })
              }
            />
            <Button type="submit">Login</Button>
            <p>
              Don't have an account?<Link href="/register">Register</Link>
            </p>
            {error.length > 0 && <p>{error}</p>}
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

export default LoginPage;
