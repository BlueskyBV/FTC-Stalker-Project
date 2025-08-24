import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ScoutingPage() {
  const navigate = useNavigate() // hook for button navigation

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Start Scouting 🚀</h1>
      <p>
        Here you can input team numbers, notes, and track performance!
      </p>
      <button className="cta" onClick={() => navigate('/')}>
        Back Home
      </button>
    </div>
  )
}
