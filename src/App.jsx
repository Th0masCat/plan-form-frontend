import Sidebar from './components/Sidebar'
import DetailsForm from './components/DetailsForm'
import { Route, Routes} from 'react-router-dom'
import PlanDetails from './components/PlanDetails'
import AddOnsPage from './components/AddOnsPage'
import SummaryPage from './components/SummaryPage'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { PageContext } from './context/PageContext'

function App() {
  const links = ['/', '/plan', '/addons', '/summary']
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;
  const nav = useNavigate();

  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
    nav(links[currentPage])
  };

  const goToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
    nav(links[currentPage - 2])
  };


  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
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
              {
                currentPage === 1 ?
                  <></>
                  :
                  <button onClick={goToPreviousPage} type="submit" className="btn btn-light">Go back</button>
              }
              {
                currentPage === totalPages ?
                  <button type="submit" className="btn btn-primary disabled align-self-end" aria-disabled="true">Submit</button>
                  :
                  <button onClick={goToNextPage} type="submit" className="btn btn-primary">Next Step</button>}
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
