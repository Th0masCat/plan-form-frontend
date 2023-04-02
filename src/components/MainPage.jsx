import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import { useRecoilValue } from "recoil";

//Components
import Sidebar from './Sidebar'
import DetailsForm from './DetailsForm'
import PlanDetails from './PlanDetails'
import AddOnsPage from './AddOnsPage'
import SummaryPage from './SummaryPage'

//Context
import { PageContext } from '../context/PageContext'
import { registerFormState } from "../atoms/registerForms";


function MainPage() {
    //Navigation Bar logic
    const links = ['/', '/plan', '/addons', '/summary']
    const totalPages = links.length;

    const [currentPage, setCurrentPage] = useState(1);
    const nav = useNavigate();

    const goToNextPage = () => {
        setCurrentPage((page) => page + 1);
        nav(links[currentPage])
    };

    const goToPreviousPage = () => {
        setCurrentPage((page) => page - 1);
        nav(links[currentPage - 2])
    };

    //Form Submission
    const form = useRecoilValue(registerFormState);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted');
        axios.post('http://127.0.0.1:8000/plans/', form)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        console.log(form)
        goToPreviousPage();
        { console.log(form) }
        goToNextPage();
    }

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
                                    <button onClick={goToNextPage} type="submit" className="btn btn-light">Go back</button>
                            }
                            {
                                currentPage === 3 ? <button onClick={handleFormSubmit} type="submit" className="btn btn-primary">Next Step</button>
                                    :
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
    );
}

export default MainPage;