import { useState } from "react";
import styled from "styled-components";
import image1 from "../assets/dice_1.png";
import image2 from "../assets/dice_2.png";
import image3 from "../assets/dice_3.png";
import image4 from "../assets/dice_4.png";
import image5 from "../assets/dice_5.png";
import image6 from "../assets/dice_6.png";

const Container = styled.div`
  width: 1250px;
  margin: 0 auto;

  .score_and_select {
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
  }

  .let_user_choice {
    display: flex;
    flex-direction: column;

    p {
      align-self: end;
      margin-bottom: 1rem;
    }

    div {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    button {
      height: 65px;
      width: 65px;
      font-size: 1.5rem;
      background-color: transparent;
      color: black;
      border: 2px solid black;
      cursor: pointer;
    }

    h2 {
      align-self: flex-end;
    }
  }

  .show_score {
    display: inline-block;
    text-align: center;

    h1 {
      font-size: 100px;
      line-height: 78px;
      margin-bottom: 1rem;
      font-weight: normal;
    }

    p {
      font-size: 24px;
    }
  }

  .play_game_box {
    display: flex;
    flex-direction: column;
    width: max-content;
    margin: 0 auto;
    gap: 0.8rem;

    button {
      padding: 0.8rem 1rem;
      font-size: 1rem;
      border-radius: 5px;
      border: none;
      background-color: transparent;
      color: black;
      border: 2px solid;
      cursor: pointer;

      &:last-child {
        background-color: black;
        color: #ffffff;
        border: 2px solid black;
      }
      &:hover {
        scale: 1.01;
      }
    }
  }

  .image_container {
    aspect-ratio: 1/1;
    text-align: center;
    margin-bottom: 0.5rem;

    img {
      cursor: pointer;
      height: 260px;
    }

    p {
      font-size: 24px;
    }
  }

  #rulseBox {
    margin: 2rem auto;
    width: max-content;
    padding: 2rem;
    background-color: #ffd7d7;

    li {
      margin-left: 1.1rem;
    }
  }
`;

const PlayGame = () => {
  const choices = [1, 2, 3, 4, 5, 6];
  const [selectedNum, setSelectedNum] = useState();
  const [gamescore, setGamescore] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [showRulse, setShowRulse] = useState(false);

  function randomDice() {
    let randomDiceNumber = Math.floor(Math.random() * 6) + 1;
    return randomDiceNumber;
  }

  const rollDice = () => {
    if (selectedNum === undefined) {
      setErrorMessage("You have not selected any number ⚠");
      return;
    }

    setErrorMessage("");
    const newDiceValue = randomDice();
    setCurrentDice(newDiceValue);

    // Update score logic here if needed
    if (selectedNum === newDiceValue) {
      setGamescore((prev) => prev + newDiceValue);
    } else {
      setGamescore((prev) => prev - 2);
    }
  };

  function resetScore() {
    setGamescore(0);
    setSelectedNum();
  }

  return (
    <>
      <Container showRules={showRulse}>
        <div className="score_and_select">
          <div className="show_score">
            <h1>{gamescore}</h1>
            <p>Total Score</p>
          </div>

          <div className="let_user_choice">
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            <div>
              {choices.map((content, i) => (
                <button
                  style={{
                    backgroundColor:
                      content === selectedNum ? "black" : "transparent",
                    color: content === selectedNum ? "white" : "black",
                  }}
                  key={i}
                  onClick={() => setSelectedNum(content)}
                >
                  {content}
                </button>
              ))}
            </div>
            <h2>Select Number</h2>
          </div>
        </div>

        <div className="play_game_box">
          <div className="image_container">
            <img
              src={
                currentDice === 1
                  ? image1
                  : currentDice === 2
                  ? image2
                  : currentDice === 3
                  ? image3
                  : currentDice === 4
                  ? image4
                  : currentDice === 5
                  ? image5
                  : image6
              }
              onClick={rollDice}
              alt="dice"
            />
            <p>Click on Dice to roll</p>
          </div>

          <button onClick={resetScore}>Reset Score</button>
          <button onClick={() => setShowRulse(!showRulse)}>
            {showRulse ? "Hide" : "Show"} Rulse
          </button>
        </div>

        <div id="rulseBox" style={{ display: showRulse ? "block" : "none" }}>
          <h2>How to play dice game</h2>
          <br />
          <ul>
            <li>Select any number</li>
            <li>Click on dice image</li>
            <li>
              after click on dice if selected number is equal to dice number you
              will get same point as dice
            </li>
            <li>if you get wrong guess then 2 point will be dedcuted </li>
          </ul>
        </div>
      </Container>
    </>
  );
};

export default PlayGame;
