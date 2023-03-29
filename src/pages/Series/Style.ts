import styled, { css } from "styled-components";

export const Serie = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg5};
    height: auto;
    min-height: 100vh;
    width: 100%;
  `}
`;

export const SerieDivButton = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg5};
    height: 5vh;
    width: 5%;
    margin-left: 2%;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const SerieButton = styled.button`
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

export const SerieDiv = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg5};
    height: auto;
    min-height: 80vh;
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
  `}
`;

export const SerieBody = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg5};
    height: 40vh;
    width: 30%;
    margin: 1rem auto;
    text-align: center;
    border-radius: 0.2rem;
    padding: 0.5rem;
  `}
`;

export const SerieImg = styled.img`
  ${({ theme }) => css`
    height: 70%;
    width: 100%;
  `}
`;

export const SerieDivMenu = styled.div`
  ${({ theme }) => css`
    height: 20px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 0 auto;
  `}
`;

export const SerieButtonMenu = styled.button`
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
