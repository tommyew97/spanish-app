import styled from "styled-components";

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

export const QuestionText = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 28px;
  color: #282828;
  position: absolute;
  top: 15%;
  text-align: center;
`;
