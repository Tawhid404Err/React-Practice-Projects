import firebaseLogo from "../assets/logos_firebase.svg";

const LandingPage = () => {
  return (
    <div className="bg-red-500 w-full h-dvh p-4">
      <div className="w-full bg-green-400 rounded-[1rem]">
        <div className="flex gap-2 justify-center items-center py-[1.2rem]">
          <img src={firebaseLogo} alt="Firebase logo" />{" "}
          <h1 className="text-[1.2rem] font-medium">Firebase Contact App</h1>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
