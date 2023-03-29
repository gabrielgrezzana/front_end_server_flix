import styled, { css } from "styled-components";

export type StyledForm = {
  error: boolean;
};

export const Body = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.baseBg4};
    height: 100vh;
    width: 100%;
    font-family: ${theme.source.fontFamily};
  `}
`;

export const Login = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60vh;
    width: 40%;
    margin: 0 auto;
    background-color: ${theme.colors.baseBg4};
  `}
`;

export const Form = styled.form<StyledForm>`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 1rem;
  height: 80%;
  width: 80%;
  border: ${(props) => (props.error ? "3px solid red" : "0px solid")};
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.baseBg4};
`;
export const Register = styled.div`
  ${() => css`
    text-align: center;
    font-weight: 700;
    margin-top: 0 auto;
  `}
`;

export const ButtonRegister = styled.button`
  ${({ theme }) => css`
    font-family: ${theme.source.fontFamily};
    font-size: ${theme.source.FontSize2};
    border: 2px solid black;
    width: 100%;
    background-color: ${theme.colors.baseBg3};
    margin-top: 70px;
    cursor: pointer;
  `}
`;

export const DivButtonInput = styled.button`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`;

export const titleLogin = styled.h2`
  ${({ theme }) => css`
    font-size: 2rem;
    color: black;
    border-bottom: 1px solid black;
    background-color: ${theme.colors.baseBg3};
    border-radius: 10px;
  `}
`;

export const input = styled.input`
  height: 40px;
  width: 100%;
  border: 0.1px solid black;
  margin-top: 3px;
  border-radius: 10px;
  margin-bottom: 3px;
  display: flex;
  justify-content: center;
  font-size: 1.3rem;
  background-color: black;
  color: white;
`;
