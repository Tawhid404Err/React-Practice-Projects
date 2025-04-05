import styled from "styled-components";
import DiceImage from "../assets/dices-bg.png";

const Container = styled.div`
  height: 100vh;
  width: 1250px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  .title {
    font-size: 96px;
    margin-bottom: 1rem;
  }

  .container_box2 {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

const Button = styled.button`
  font-size: 1rem;
  padding: 0.8rem 3.8rem;
  border: 2px solid transparent;
  background-color: black;
  color: white;
  border-radius: 5px;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    color: black;
    border: 2px solid black;
  }
`;

const StartGame = ({ toggle }) => {
  return (
    <div>
      <Container>
        <div>
          <img src={DiceImage} alt="" />
        </div>
        <div className="container_box2">
          <h1 className="title">DICE GAME</h1>
          <Button onClick={toggle}>Play Now</Button>
        </div>
      </Container>
    </div>
  );
};

export default StartGame;
