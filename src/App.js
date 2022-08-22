import "./index.css";
import Top from "./components/Top";
import Head from "./components/Head";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Button from "./components/Button";
import { useRef, useState } from "react";


function App() {
  const [cls, setCls] = useState("clz");
  const ref = useRef();
  return (
    <div className="App">
      <Top cls={cls} setCls={setCls} ref={ref} />
      <Head cls={cls} setCls={setCls} />
      <Body />
      <Footer />
      <Button />
    </div>
  );
}

export default App;
