import React from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import ScoutingPage from './web_pages/ScoutingPage'

function Home() {
  const navigate = useNavigate() // useNavigate hook for button navigation

  const handleStartScouting = () => {
    navigate('/scout') // navigate to Scouting page
  }

  return (
    <div className="app">
      <header className="hero">
        <h1>🏠 Home of the FTC Stalker!</h1>
        <p className="tagline">
          Helping scouts from all FTC teams optimize their efforts.
        </p>
        <button className="cta" onClick={handleStartScouting}>
          Start Scouting
        </button>
      </header>

      <main className="content">
        <div className="card">
          <h2>About This Project</h2>
          <p>
            The <strong>FTC Stalker</strong> app is designed to make alliance 
            selection smarter and faster by combining team performance data, 
            AI insights, and custom notes.
          </p>
        </div>

        <div className="card">
          <h2>Created By</h2>
          <p>
            Developed by <strong style={{ color: 'purple' }}>RoboAS 19082</strong> from 
            <strong> Brașov, Romania</strong>.
          </p>
        </div>

        <div className="card">
          <h2>How It Helps Scouts</h2>
          <p>
            Scouts can quickly input, analyze, and compare teams' performances, 
            helping their team make better alliance decisions during competitions.
          </p>
        </div>
      </main>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scout" element={<ScoutingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
