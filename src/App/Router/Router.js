import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from "../LandingPage/LandingPage";

const RouterReact = () => (
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<LandingPage />} />
        </Routes>
    </Router>
)

export default RouterReact