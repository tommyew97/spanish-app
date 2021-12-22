import Landing from "./pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "./pages/Quiz";
import MainMenu from "./pages/MainMenu";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/main" element={<MainMenu />} />
            </Routes>
        </Router>
    );
}

export default App;
