import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Post from "./pages/Post";
import { Navbar } from "./pages/Navbar";
import { useEffect, useState } from "react";
import Temp from "./pages/Temp";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://dummyapi.io/data/v1/post?limit=10", {
      method: "get",
      headers: {
        "app-id": "636406dd18896916f26f9dde",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setData(json.data);
      });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<Home postlist={data} />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/post/:id" element={<Post postlist={data} />} />
            <Route path="/temp" element={<Temp />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
