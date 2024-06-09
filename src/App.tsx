import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhotoDetection, { Color } from "./components/PhotoDetection";
import Result from "./components/Result";
import { useState } from "react";
import SelectPalette from "./components/SelectPalette";
import Home from "./components/Home";

function App() {
  const [selectedSquare, setSelectedSquare] = useState<Color | undefined>();
  return (
    <Router>
      <Routes>
      <Route
          path="/"
          element={
            <Home/>
          }
        />
        <Route
          path="/photodetection"
          element={
            <PhotoDetection
              selectedSquare={selectedSquare}
              setSelectedSquare={setSelectedSquare}
            />
          }
        />
        <Route
          path="/result"
          element={<Result selectedSquare={selectedSquare} />}
        />

        <Route
          path="/selection"
          element={<SelectPalette/>}
        />

      </Routes>
    </Router>
  );
}

export default App;
