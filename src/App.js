import "./App.css";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Checkout from "./component/Checkout/Checkout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                <Checkout />
              </>
            }
          />

          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
