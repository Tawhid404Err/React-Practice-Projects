import styled from "styled-components";

const HeaderPart = () => {
  return (
    <>
      <Container>
        <div className="logo_and_search_box">
          <div className="logo_box">
            <img src="../../../public/app-logo.svg" alt="App logo" />
          </div>
          <div className="search_box">
            <input type="text" placeholder="Search Food..." id="#" />
          </div>
        </div>

        <div className="navigation_btn_container">
          <button>All</button>
          <button>Breakfast</button>
          <button>Lunch</button>
          <button>Dinner</button>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 170px;
  background-color: #323334;

  .logo_and_search_box {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    padding: 0 4rem;
    padding-bottom: 3rem;
    padding-top: 2rem;
  }

  .search_box {
    input {
      height: 40px;
      width: 270px;
      padding: 0.5rem 0.8rem;
      border-radius: 8px;
      border: 1px solid #ff0909;
      background-color: transparent;
      font-size: 1rem;
      color: #ff0909;
    }
  }

  .navigation_btn_container {
    margin: 0 auto;
    width: max-content;
    padding-bottom: 1rem;
    button {
      margin: 0 0.5rem;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      border-radius: 5px;
      border: none;
      color: white;
      background-color: #ff4343;
      cursor: pointer;
      transition: 0.2s ease-in-out;

      &:hover {
        scale: 1.05;
      }
    }
  }

  @media (max-width: 580px) {
    height: max-content;
    .logo_and_search_box {
      flex-direction: column;
      align-items: center;
      padding-bottom: 2rem;
    }

    .search_box {
      input {
        width: 300px;
        margin-top: 1rem;
      }
    }
  }
`;

export default HeaderPart;
