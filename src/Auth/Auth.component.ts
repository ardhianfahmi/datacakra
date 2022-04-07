import styled from "styled-components";
// import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

// export const MainContainer = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction
//   height: 80vh;
//   width: 30vw;
//   background: rgba(255, 255, 255, 0.70);
// `;

// export const AuthForm = styled.form`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   width: 100%;
//   margin: auto;
// `;

// export const AuthWrapper = styled.main`
//   display: flex;
// `;
export const Main = styled.main`
  box-sizing: border-box;
`;
export const Body = styled.body`
  background: #f3e0e2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  height: 100vh;
  margin: -20px 0 50px;
`;
export const H1Title = styled.h1`
  font-weight: bold;
  margin: 0;
`;
export const StyledP = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;
export const Span = styled.span`
  font-size: 12px;
`;
export const StyledA = styled.input`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`;
export const MainContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
`;
export const AuthFormContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  left: 0;
  width: 50%;
  z-index: 2;
`;
export const AuthForm = styled.form`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

export const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 45%;
  border-radius: 20px;
`;

export const ButtonForm = styled.button`
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background-color: #ff4b2b;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
`;
export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
`;
export const OverlaiCont = styled.div`
  background: #104b99;
  background: -webkit-linear-gradient(to right, #104b99, #1864c8);
  background: linear-gradient(to right, #104b99, #1864c8);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
`;
export const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  right: 0;
`;

export const Button = styled.button`
  border-radius: 15px;
  border: none;
  width: 15%;
  height: 5%;
  background-color: #104b99;
  color: white;
  margin-top: 5%;
  margin-bottom: 5%;
`;
// export const FormWrapper
