import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from "../LandingPage/LandingPage";
import Dashboard from "../Dashboard/Dashboard";

const RouterReact = () => (
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/dashboard/profile" element={<Dashboard/>} />
            <Route path="/dashboard/devices" element={<Dashboard/>} />
            <Route path="/dashboard/devices/:deviceId" element={<Dashboard/>} />
            <Route path="/dashboard/devices/add-device" element={<Dashboard/>} />
            <Route path="/dashboard/devices/edit-device" element={<Dashboard/>} />
            <Route path="/dashboard/devices/update-image" element={<Dashboard/>} />
            <Route path="/dashboard/spaces" element={<Dashboard/>} />
            <Route path="/dashboard/spaces/add-space" element={<Dashboard/>} />
            <Route path="/dashboard/spaces/edit-space" element={<Dashboard/>} />
            <Route path="*" element={<LandingPage />} />
        </Routes>
    </Router>
)

export default RouterReact