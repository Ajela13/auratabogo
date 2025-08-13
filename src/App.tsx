import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import LandingPage from './features/landingPage/landingPage'
import './App.css'

function App() {

  return (
    <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<LandingPage/>} />
    </Route>
  </Routes>
  );
}

export default App
