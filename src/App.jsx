import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AddBeneficiary from './pages/AddBeneficiary'
import ViewBeneficiary from './pages/ViewBeneficiary'
import EditBeneficiary from './pages/EditBeneficiary'
import './index.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBeneficiary />} />
          <Route path="/view/:id" element={<ViewBeneficiary />} />
          <Route path="/edit/:id" element={<EditBeneficiary />} />
        </Routes>
      </main>
    </div>
  )
}

export default App