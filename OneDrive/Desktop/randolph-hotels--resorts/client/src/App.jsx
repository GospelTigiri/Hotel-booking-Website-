import './App.css'
import { BrowserRouter, Routes, Route, useOutletContext } from 'react-router-dom'
import { lazy, Suspense } from 'react'

// Layout
import Layout from './Components/Pages/Layout'
import ProtectedRoute from './Components/ProtectedRoute'
import BookingForm from './Components/Pages/BookingForm'
import Bookings from './Components/Pages/Bookings'
import DashboardOverview from './Components/Pages/DashboardOverview'
import RoomsManagement from './Components/Pages/RoomsManagement'
import AddRoom from './Components/Pages/AddRoom'
import EditRoom from './Components/Pages/EditRoom'
import Login from './Components/Pages/Login'

// Wrapper for DashboardOverview to receive context
function DashboardOverviewWrapper() {
  const { bookings, rooms } = useOutletContext();
  return <DashboardOverview bookings={bookings} rooms={rooms} />;
}

// Lazy-loaded Pages
const Index = lazy(() => import('./Components/Pages/Index'))
const About = lazy(() => import('./Components/Pages/About'))
const Rooms = lazy(() => import('./Components/Pages/Rooms'))
const Facilities = lazy(() => import('./Components/Pages/Facilities'))
const Blogs = lazy(() => import('./Components/Pages/Blogs'))
const Contact = lazy(() => import('./Components/Pages/Contact'))
const RoomsDetails = lazy(() => import('./Components/Pages/RoomsDetails'))
const Faq = lazy(() => import('./Components/Pages/Faq'))
const Support = lazy(() => import('./Components/Pages/Support'))
const Privacy = lazy(() => import('./Components/Pages/Privacy'))
const Terms = lazy(() => import('./Components/Pages/Terms'))
const Dashboard = lazy(() => import('./Components/Pages/DashboardLayout'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="text-center py-5">Loading...</div>}>
        <Routes>
          {/* Public Routes */}
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/roomsdetails/:id" element={<RoomsDetails />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/support" element={<Support />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/bookingform" element={<BookingForm />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/login" element={<Login />} />

          </Route>

          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            {/* Default dashboard landing page */}
            <Route index element={<DashboardOverviewWrapper />} />

            {/* Sub routes */}
            <Route path="rooms" element={<RoomsManagement />} />
            <Route path="admin/add-room" element={<AddRoom />} />
            <Route path="admin/edit-room/:id" element={<EditRoom />} /> {/* ✅ Add this */}
            <Route path="bookings" element={<Bookings />} />
          </Route>


          {/* 404 Page */}
          <Route path="*" element={<h2 className="text-center py-5">404 - Page Not Found</h2>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
