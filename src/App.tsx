import Home from "./pages/Home"
import { AppStyle } from "./components/components";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <div>
      <AppStyle>
        <Navbar />
        <Home />
      </AppStyle>
    </div>
  );
}

export default App;
