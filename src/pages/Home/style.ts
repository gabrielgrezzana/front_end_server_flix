import { Children } from "react";
import styled, { css } from "styled-components";

export const Home = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.baseBg4};
    height: 100vh;
    width: 100%;
  `}
`;

export const PageHome = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg4};
    height: 100%;
    width: 80%;
    display: flex;
    flex-direction: column;
  `}
`;

export const carouselHomeMovie = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg2};
    height: 25%;
    width: 100%;
    margin: 15px;
  `}
`;

export const whapperHomeMovie = styled.div`
  ${({ theme }) => css`
    width: 100%;
    font-size: 0;
    height: 100%;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    background-color: ${theme.colors.baseBg4};
  `}
`;

export const arrowRigthMovie = styled.img`
  ${({ theme }) => css`
  top: 15%;
  height: 46px;
  width: 46px;
  text-align: center;
  line-height: 46px;
  background-color: ${theme.colors.primaryColor}
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  position: absolute;
  transform: translateY(-10%);  
  right: 200px;

`}
`;

export const arrowLeftMovie = styled.img`
  ${({ theme }) => css`
  top: 15%;
  height: 46px;
  width: 46px;
  text-align: center;
  line-height: 46px;
  background-color: ${theme.colors.primaryColor}
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  position: absolute;
  transform: translateY(-50%);
  transform: rotate(180deg);
  left: 230px;
`}
`;

export const carousel = styled.div`
  font-size: 0;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
`;

export const carouselItem = styled.img`
  height: 240px;
  object-fit: cover;
  width: calc(15%);
  margin-left: 10px;
`;

export const arrowRigthSerie = styled.img`
  ${({ theme }) => css`
  top: 41.5%;
  height: 46px;
  width: 46px;
  text-align: center;
  line-height: 46px;
  background-color: ${theme.colors.baseBg4}
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  position: absolute;
  transform: translateY(-10%);  
  right: 200px;

`}
`;

export const arrowLeftSerie = styled.img`
  ${({ theme }) => css`
  top: 41.5%;
  height: 46px;
  width: 46px;
  text-align: center;
  line-height: 46px;
  background-color: ${theme.colors.baseBg4}
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  position: absolute;
  transform: translateY(-50%);
  transform: rotate(180deg);
  left: 230px;
`}
`;

export const arrowRigthAnime = styled.img`
  ${({ theme }) => css`
  top: 70%;
  height: 46px;
  width: 46px;
  text-align: center;
  line-height: 46px;
  background-color: ${theme.colors.primaryColor}
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  position: absolute;
  transform: translateY(-10%);  
  right: 200px;

`}
`;

export const arrowLeftAnime = styled.img`
  ${({ theme }) => css`
  top: 70%;
  height: 46px;
  width: 46px;
  text-align: center;
  line-height: 46px;
  background-color: ${theme.colors.primaryColor}
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  position: absolute;
  transform: translateY(-50%);
  transform: rotate(180deg);
  left: 230px;
`}
`;

export const Menu = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    background-color: ${theme.colors.baseBg4};
    height: 100%;
    width: 100%;
    text-align: center;
    padding-top: 2rem;
  `}
`;

export const MenuHomeDiv = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg3};
    height: 5vh;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    cursor: pointer;
    border: 1px solid black;
  `}
`;

export const MenuItem = styled.button`
  ${({ theme }) => css`
    border: none;
    font-family: ${theme.source.fontFamily};
    background-color: ${theme.colors.primaryColor};
  `}
`;

export const HomeLogoutDiv = styled.div`
  ${({ theme }) => css`
    height: 3vh;
    width: 5%;
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 0.5rem;
  `}
`;
