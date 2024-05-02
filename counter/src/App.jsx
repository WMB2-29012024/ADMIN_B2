import CountComponent from "./components/Count";
import Buttons from "./components/Buttons";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountComponent countNumber={count} />
      <Buttons setCount={setCount} />
    </div>
  );
}

export default App;
