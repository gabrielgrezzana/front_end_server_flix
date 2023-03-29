import Styled, { css } from "styled-components";

export const titles = Styled.h2`
${({ theme }) => css`
  font-size: 2rem;
  color: black;
  border-bottom: 1px solid black;
  background-color: ${theme.colors.baseBg3};
  border-radius: 10px;
`}
`;

export const Form = Styled.div`
${({ theme }) => css`
  background-color: ${theme.colors.baseBg4};
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`}
`;

export const FormCard = Styled.form`
${({ theme }) => css`
  background-color: ${theme.colors.baseBg4};
  height: 60vh;
  width: 30%;
  padding-top: 5rem;
  text-align: center;
`}
`;

export const InputCard = Styled.input`
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

export const FormData = Styled.form`
${({ theme }) => css`
  background-color: ${theme.colors.baseBg4};
  height: 60vh;
  width: 40%;
  text-align: center;
  padding-top: 5rem;
`}
`;

export const divbuttonformProfile = Styled.div`
${({ theme }) => css`
  height: 20%;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin: 0 auto;
  padding: 2rem;
`}
`;

export const buttonformProfile = Styled.button`
${({ theme }) => css`
  background-color: ${theme.colors.baseBg2};
  padding: 0 0.3rem;
  width: 4rem;
  height: 2rem;
  font-size: 1rem;
  cursor: pointer;
  color: ${theme.colors.baseBg3};
  border-radius: 0.2rem;
`}
`;

export const FormMovieUpdate = Styled.div`
${({ theme }) => css`
  background-color: ${theme.colors.baseBg3};
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`}
`;

export const FormMovie = Styled.div`
${({ theme }) => css`
  background-color: ${theme.colors.baseBg2};
  height: 60vh;
  width: 30%;
  border: 1px solid;
  text-align: center;
  padding-top: 5rem;
`}
`;

export const InputMovieUpdate = Styled.h4`
margin-top: 1.5rem;
padding: .2rem;
border-radius: .2rem;
border: none;
`;

export const FormUpdateDivButton = Styled.div`
${({ theme }) => css`
  height: 5vh;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 1.5rem auto;
`}
`;

export const formUpdateButton = Styled.button`
${({ theme }) => css`
  background-color: ${theme.colors.baseBg2};
  padding: 0.3rem;
  cursor: pointer;
`}
`;

export type InputProps = {
  error?: boolean;
};

export const PersonalizedInput = Styled.input<InputProps>`
    display: flex;
    width: 90%;
    margin: 0.5rem;
    border-radius: 0.2rem;
    border: none;
    border: ${(props) => (props.error ? "1px solid red" : "1px solid #ccc")};
    padding-left: 0.3rem;
  `;
