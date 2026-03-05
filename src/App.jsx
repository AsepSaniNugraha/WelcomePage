import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ThemeButton from './components/ThemeButton'
import WelcomePage from './components/WelcomePage'

const App = () => {
  return (
    <BrowserRouter>
      <ThemeButton />
      <Routes>
        <Route path='' element={<WelcomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App