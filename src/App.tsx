import Home from "./pages/Home"
import { AppStyle } from "./components/appComponents";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import CreateQuote from "./pages/CreateQuote";

function App() {
  return (
    <div>
      <AppStyle>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-quote" element={<CreateQuote/>} />
          </Routes>
      </AppStyle>
    </div>
  );
}

export default App;
