import Sidebar from './components/Sidebar'
import DetailsForm from './components/DetailsForm'
import { Link, Route, Routes } from 'react-router-dom'
import PlanDetails from './components/PlanDetails'
import AddOnsPage from './components/AddOnsPage'
import SummaryPage from './components/SummaryPage'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { PageContext } from './PageContext'

function App() {
  const links = ['/', '/plan', '/addons', '/summary']
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;
  const nav = useNavigate();

  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
    nav(links[currentPage])
  };

  const goToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
    nav(-1)
  };


  return (
    <PageContext.Provider value={{currentPage, setCurrentPage}}>
    <div className="card pe-5" >
      <div className="card-body ps-3 d-flex align-items-center ">
        <Sidebar />
        <div className='ms-5'>
          <Routes>
            <Route path='/' element={<DetailsForm />} />
            <Route path='/plan' element={<PlanDetails />} />
            <Route path='/addons' element={<AddOnsPage />} />
            <Route path='/summary' element={<SummaryPage />} />
          </Routes>

          <div className="d-flex mt-5 justify-content-between w-100 ">
            <button onClick={goToPreviousPage} disabled={currentPage === 1}  type="submit" className="btn btn-light">Go back</button>
  
            <button onClick={goToNextPage} disabled={currentPage === totalPages+1}  type="submit" className="btn btn-primary">Go forward</button>
            </div>
        </div>

      {console.log(currentPage)}
      {console.log(links[currentPage])}

      </div>
    </div>
    </PageContext.Provider>
  )
}

export default App
