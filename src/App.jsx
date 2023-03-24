import Sidebar from './pages/Sidebar'
import DetailsForm from './pages/DetailsForm'
import { Route, Routes } from 'react-router-dom'
import PlanDetails from './pages/PlanDetails'
import AddOnsPage from './pages/AddOnsPage'
import SummaryPage from './pages/SummaryPage'


function App() {
  return (
    <div className="card pe-5" >
      <div className="card-body d-flex align-items-center justify-content-center">
        <Sidebar />
        <div className='ms-5'>
        <Routes>
            <Route path='/' element={<DetailsForm />} />
            <Route path='/plan' element={<PlanDetails />} />
            <Route path='/addons' element={<AddOnsPage />} />
            <Route path='/summary' element={<SummaryPage />} />
    </Routes>
        </div>

      </div>
    </div>
  )
}

export default App
