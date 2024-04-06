import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhotoDetection from "./components/PhotoDetection";
import Result from "./components/Result";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PhotoDetection />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
