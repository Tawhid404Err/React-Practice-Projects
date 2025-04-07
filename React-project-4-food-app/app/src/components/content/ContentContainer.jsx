import styled from "styled-components";
import Card from "../card/Card";
import { useEffect, useState } from "react";

export const BASE_URL = "http://localhost:9000";

const ContentContainer = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const FetchFoodData = async () => {
      setLoading(true);
      try {
        let response = await fetch(BASE_URL);
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        setError(
          "Sorry the server is Unable to Load Items Right Now! Please Check Back later"
        );
        setLoading(false);
      }
    };

    FetchFoodData();
  }, []);

  if (error) {
    return (
      <div
        style={{
          padding: "1rem",
          width: "100vw",
          height: "calc(100vh - 170px)",
          display: "grid",
          placeItems: "center",
          backgroundImage: "url('../../../public/bg_img.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <span
          style={{
            backgroundColor: "#323334",
            textAlign: "center",
            fontSize: "2rem",
            color: "#ff0909",
            padding: "1rem 0.3rem",
            borderRadius: "1rem",
          }}
        >
          {error}
        </span>
      </div>
    );
  }

  if (loading || !data) {
    return (
      <div
        style={{
          padding: "1rem",
          width: "100vw",
          height: "calc(100vh - 170px)",
          display: "grid",
          placeItems: "center",
          backgroundImage: "url('../../../public/bg_img.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <span
          style={{
            backgroundColor: "#323334",
            textAlign: "center",
            fontSize: "2rem",
            color: "#ff0909",
            padding: "1rem 1rem",
            borderRadius: "1rem",
          }}
        >
          Loading....
        </span>
      </div>
    );
  }

  return (
    <>
      <ContainerBody>
        <div className="container">
          {data.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              price={item.price}
              text={item.text}
              image={item.image}
            />
          ))}
        </div>
      </ContainerBody>
    </>
  );
};

const ContainerBody = styled.div`
  width: 100vw;
  height: calc(100vh - 170px);
  background-image: url("../../../public/bg_img.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  .container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    gap: 1rem;
    padding: 1rem;
    position: relative;
    z-index: 1;
  }
  &::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    background-color: #0000003e;
  }
  @media (max-width: 787px) {
    height: 100%;
  }
`;

export default ContentContainer;
