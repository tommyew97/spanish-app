import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    background-color: #fcfcfc;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.div`
    width: 150px;
    height: 90px;
    background-color: ${(props) => props.color};
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.65) 2px 2px 2px 2px;
    color: #fff;
    font-size: 18px;
    font-family: "Roboto", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonContainer = styled.div`
    position: absolute;
    top: 55%;
    display: flex;
    flex-direction: column;
    height: 250px;
    width: 100%;
    justify-content: space-evenly;
    .ButtonRow {
        display: flex;
        width: 100%;
        justify-content: space-evenly;
    }
`;

export const Title = styled.h1`
    font-family: "Roboto", sans-serif;
    font-size: 28px;
    color: #282828;
    position: absolute;
    top: 15%;
    text-align: center;
`;

export const Counter = styled.h2`
    position: absolute;
    top: 5%;
    right: 5%;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    color: #282828;
`;

export const LoginButton = styled.div`
    width: 220px;
    height: 60px;
    border-radius: 6px;
    background-color: #2658ed;
    color: #fff;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const LoginButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 15%;
    width: 100%;
`;

export const StartButton = styled.div`
    width: 220px;
    height: 60px;
    border-radius: 6px;
    background-color: #c7283a;
    color: #fff;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const StartButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 15%;
    width: 100%;
`;

export const StyledLink = styled(Link)`
    text-decoration = none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
