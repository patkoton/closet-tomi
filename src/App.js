import "./index.css";
import Top from "./components/Top";
import Head from "./components/Head";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Button from "./components/Button";
import { useState } from "react";


function App() {
  const [cls, setCls] = useState("clz");
  return (
    <div className="App">
      <Top cls={cls} setCls={setCls} />
      <Head cls={cls} setCls={setCls} />
      <Body />
      <Footer />
      <Button />
    </div>
  );
}

export default App;
