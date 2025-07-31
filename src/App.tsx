import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './contexts/AuthContext'
import { ThemeProvider } from './contexts/ThemeContext'
import LoadingScreen from './components/LoadingScreen'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/buy" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Buy Crypto - Coming Soon</h1></div>} />
              <Route path="/sell" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Sell Crypto - Coming Soon</h1></div>} />
              <Route path="/convert" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Convert - Coming Soon</h1></div>} />
              <Route path="/deposit" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Deposit - Coming Soon</h1></div>} />
              <Route path="/contact" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Contact Us - Coming Soon</h1></div>} />
              <Route path="/about" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">About Us - Coming Soon</h1></div>} />
              <Route path="/help" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Help Center - Coming Soon</h1></div>} />
              <Route path="/faq" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">FAQ - Coming Soon</h1></div>} />
            </Routes>
          </div>
        </Router>
        <Toaster position="top-right" />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App