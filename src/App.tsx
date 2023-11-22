import Button from "./components/Button";

function App() {
  const handleClicked = () => {
    console.log("Clicked!");
  };

  return (
    <div>
      <Button color="primary" onClick={handleClicked}>Woooow!</Button>
    </div>
  );
}

export default App;
