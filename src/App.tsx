import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhotoDetection, { Color } from "./components/PhotoDetection";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const [selectedSquare, setSelectedSquare] = useState<Color | undefined>();
  return (
    <Router>
      <Routes>
        <Route
          path="/"
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
      </Routes>
    </Router>
  );
}

export default App;
