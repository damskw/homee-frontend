import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from "../LandingPage/LandingPage";
import Dashboard from "../Dashboard/Dashboard";

const RouterReact = () => (
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="*" element={<LandingPage />} />
        </Routes>
    </Router>
)

export default RouterReact