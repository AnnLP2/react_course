import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  let items = ["New York", "Los Angeles", "San Francisco"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My button
      </Button>
      <ListGroup
        items={items}
        heading="Miami"
        onSelectItem={handleSelectItem}
      ></ListGroup>
    </div>
  );
}

export default App;
