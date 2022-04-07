import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import React, { useState } from "react";
import { Link } from "react-navi";
import {
  AuthForm,
  AuthFormContainer,
  Body,
  Button,
  H1Title,
  Input,
  Main,
  Span,
} from "../../Auth/Auth.component";
import "../../Auth/Auth.css";
import { Tourist } from "./Tourist.interface";

const CreatePage = () => {
  const [user, setUser] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("user");
    const initialValue = JSON.parse(saved || "{}");
    return initialValue || "";
  });
  const [{ tourist_email, tourist_location, tourist_name }, setRegisterData] =
    useState({
      tourist_email: "",
      tourist_location: "",
      tourist_name: "",
    });
  const createTourist = async (data: Tourist) => {
    const requestConfig: AxiosRequestConfig = {
      method: "post",
      url: process.env.REACT_APP_API_BASE_URL + "/Tourist",
      headers: {
        Authorization: "Bearer " + user.Token,
        "Content-Type": "application/json",
      },
      data,
    };
    try {
      const { data: response } = await axios.request(requestConfig);
    } catch (e) {
      if (e instanceof Error) {
        return { error: e.message };
      }
    }
  };
  const [error, setError] = useState("");

  const Create = (event: React.FormEvent) => {
    event.preventDefault();
    // perform API
    createTourist({
      tourist_email: tourist_email,
      tourist_location: tourist_location,
      tourist_name: tourist_name,
    });
  };

  return (
    <Body>
      <Main>
        <AuthFormContainer onSubmit={Create}>
          <AuthForm>
            <H1Title>Register</H1Title>
            <Span>or use your account</Span>
            <Input
              value={tourist_name}
              name="tourist_name"
              placeholder="name"
              onChange={(event) =>
                setRegisterData({
                  tourist_name: event.target.value,
                  tourist_location,
                  tourist_email,
                })
              }
            />
            <Input
              value={tourist_email}
              name="tourist_email"
              placeholder="Email"
              onChange={(event) =>
                setRegisterData({
                  tourist_name,
                  tourist_location,
                  tourist_email: event.target.value,
                })
              }
            />
            <Input
              value={tourist_location}
              name="tourist_location"
              type="text"
              placeholder="Location"
              onChange={(event) =>
                setRegisterData({
                  tourist_name,
                  tourist_location: event.target.value,
                  tourist_email,
                })
              }
            />
            <Button type="submit">Register</Button>
            {error.length > 0 && <p>{error}</p>}
          </AuthForm>
        </AuthFormContainer>
      </Main>
    </Body>
  );
};

export default CreatePage;
