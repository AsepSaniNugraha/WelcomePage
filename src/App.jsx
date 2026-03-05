import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import ThemeButton from './components/ThemeButton'
import WelcomePage from './components/WelcomePage'

const App = () => {
  return (
    <HashRouter>
      <ThemeButton />
      <Routes>
        <Route index element={<WelcomePage />} />
      </Routes>
    </HashRouter>
  )
}

export default App