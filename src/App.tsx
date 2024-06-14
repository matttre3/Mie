import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhotoDetection, { Color } from "./components/PhotoDetection";
import Result from "./components/Result";
import { useState } from "react";
import SelectPalette from "./components/SelectPalette";
import Home from "./components/Home";
import Test from "./components/Test";
import TestResult from "./components/TestResult";

function App() {
  const [selectedSquare, setSelectedSquare] = useState<Color | undefined>();
  const [answers, setAnswers] = useState<number[]>([]);

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
          path="/test"
          element={
            <Test answers={answers} setAnswers={setAnswers} />
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

        <Route
          path="/test-result"
          element={<TestResult answers={answers}/>}
        />

      </Routes>
    </Router>
  );
}

export default App;
