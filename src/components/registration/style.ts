import styled, { css } from "styled-components";

export const titleRegister = styled.h3`
  ${({ theme }) => css`
    font-size: 2rem;
    color: black;
    border-bottom: 1px solid black;
    background-color: ${theme.colors.baseBg3};
    border-radius: 10px;
  `}
`;

export const registro = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg4};
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const registroLogin = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg4};
    text-align: center;
    height: 50vh;
    width: 40%;
  `}
`;

export const registroform = styled.form`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
    width: 60%;
    margin-top: 3rem;
  `}
`;

export const registroDivButton = styled.div`
  ${({ theme }) => css`
    width: 60%;
    height: 10vh;
    background-color: ${theme.colors.baseBg4};
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 10px;
  `}
`;

export const registroButton = styled.button`
  ${() => css`
    height: 50%;
    width: 100%;
    border-radius: 15px;
  `}
`;

export const input = styled.input`
  ${({ theme }) => css`
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
  `}
`;
