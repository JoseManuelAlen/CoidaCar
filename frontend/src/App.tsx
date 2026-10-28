import { BrowserRouter, Routes, Route } from 'react-router'
import Header from './components/Header'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import GaragePage from './pages/GaragePage'

// Componente principal: muestra la cabecera y la página que toca según la URL
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registro" element={<RegisterPage />} />
        <Route path="/garaje" element={<GaragePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
