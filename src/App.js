import React, {useState} from "react";
import Header from "./components/Header";
import Data2 from "./components/Data";
function App() {
 
  const [data, setData] = useState([])
  return (
    <div className="App">
      <Header parentState = {setData}></Header>
      <Data2 data = {data}></Data2>
    </div>
  );
}

export default App;
