import styled from "styled-components";
import { BASE_URL } from "../content/ContentContainer";

const Card = ({ name, price, text, image }) => {
  return (
    <CardBox>
      <div className="img_container">
        <img src={BASE_URL + image} alt="" />
      </div>
      <div className="content_container">
        <div>
          <h1>{name}</h1>
          <p>{text}</p>
        </div>
        <span>{`$${price.toFixed(2)}`}</span>
      </div>
    </CardBox>
  );
};

const CardBox = styled.div`
  height: 200px;
  border-radius: 1rem;
  width: 370px;
  /* background-color: red; */
  position: relative;
  overflow: hidden;
  display: flex;

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  .img_container {
    background-color: #ffa60045;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
  }

  .content_container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    color: #fff;

    h1 {
      font-size: 1.6rem;
      margin-bottom: 0.6rem;
    }

    p {
      font-size: 0.9rem;
      color: #f0f0f0;
    }

    span {
      background-color: #ff4343;
      align-self: flex-end;
      padding: 0.3rem 1rem;
      border-radius: 0.5rem;
    }
  }

  @media (max-width: 787px) {
    .card {
      height: 250px;
      width: 440px;
    }
  }
`;
export default Card;
