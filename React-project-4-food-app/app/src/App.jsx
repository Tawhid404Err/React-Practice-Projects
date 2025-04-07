import ContentContainer from "./components/content/ContentContainer";
import HeaderPart from "./components/top-header/HeaderPart";
import { useState, useEffect } from "react";
const BASE_URL = "https://localhost:9000";

const App = () => {
  const [data, setData] = useState();

  const FetchFoodData = async () => {
    const responce = await fetch(BASE_URL);
    const json = await responce.json();
    console.log(json);
  };

  FetchFoodData();
  return (
    <>
      <HeaderPart />
      <ContentContainer />
    </>
  );
};

export default App;
