import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import DashboardCourses from './pages/DashboardCourses';
import DashboardCalendar from './pages/DashboardCalendar';
import DashboardProfile from './pages/DashboardProfile';
import DashboardGrades from './pages/DashboardGrades';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Standalone pages without navbar/footer */}
        <Route path="/login" element={<Login />} />

        {/* Pages with standard navbar/footer */}
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses" element={<Register />} />
        </Route>

        {/* Student Dashboard */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/courses" element={<DashboardCourses />} />
          <Route path="/dashboard/calendar" element={<DashboardCalendar />} />
          <Route path="/dashboard/profile" element={<DashboardProfile />} />
          <Route path="/dashboard/grades" element={<DashboardGrades />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
