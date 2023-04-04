import { useNavigate, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { useRecoilValue } from "recoil";

//Styles
import "./plan.css";

//Components
import Sidebar from './Sidebar'
import DetailsForm from './ProfileForm'
import PlanDetails from './PlanDetails'
import AddOnsPage from './AddOnsPage'
import SummaryPage from './SummaryPage'

//Context
import { PageContext } from '../context/PageContext'
import { registerFormState } from "../atoms/registerForms";

function MainPage() {
    //Navigation Bar logic
    const totalPages = 4;

    const [currentPage, setCurrentPage] = useState(1);

    const goToNextPage = () => {
        setCurrentPage((page) => page + 1);

    };

    const goToPreviousPage = () => {
        setCurrentPage((page) => page - 1);
    };

    //Form Submission
    const form = useRecoilValue(registerFormState);
    const [totalCost, setTotalCost] = useState({
        'plan_name': 'Arcade',
        'plan_cost': 9,
        'add_ons': [],
        'total_cost': 9,
    });

    //Send data for total cost
    const handleFormChange = (e) => {
        e.preventDefault();
        console.log('data stored');
        axios.post(process.env.ENDPOINT, form)
            .then(res => {
                console.log(res);
                console.log(res.data);
                setTotalCost(res.data);
            })

        { console.log(form) }
        goToNextPage();
    }

    //Send data to database
    const handleFormSubmit = (e) => {
        const finalForm = {
            ...form,
            total_cost: totalCost.total_cost,
            confirmed_data: true
        }
        e.preventDefault();
        console.log('form submitted');
        axios.post(process.env.ENDPOINT, finalForm)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    //Card Width
    const [cardWidth, setCardWidth] = useState('45rem');

    useEffect(() => {
        if (currentPage === 1) {
            setCardWidth('45rem');
        }
        else if (currentPage === 2) {
            setCardWidth('53rem');
        }
        else if (currentPage === 3) {
            setCardWidth('48rem');
        }
        else if (currentPage === 4) {
            setCardWidth('50rem');
        }
    }, [currentPage])

    //Page Change
    const handlePageChange = (page) => {
        if (page === 1) {
            return <DetailsForm />
        }
        else if (page === 2) {
            return <PlanDetails />
        }
        else if (page === 3) {
            return <AddOnsPage />
        }
        else if (page === 4) {
            return <SummaryPage cost={totalCost} handleFormSubmit={handleFormSubmit} />
        }
    }


    return (
        //Context for navigation bar
        <PageContext.Provider value={{ currentPage, setCurrentPage }}>
            {/* Card Body */}
            <div className="card pe-5" style={{ width: cardWidth }}>
                <div className="card-body ps-3 d-flex align-items-center ">
                    <Sidebar />
                    <div className='ms-5 w-100'>
                        {
                            handlePageChange(currentPage)
                        }
                        {/* Navigation Bar */}
                        <div className="d-flex mt-5 justify-content-between w-100 ">
                            {
                                //Page 1: No back button
                                currentPage === 1 ?
                                    <></>
                                    :
                                    <button onClick={goToPreviousPage} type="submit" className="btn btn-light">Go back</button>
                            }
                            {
                                //Page 3: Next Button sends post request and goes to next page
                                currentPage === 3 ? <button onClick={handleFormChange} type="submit" className="btn btn-primary">Next Step</button>
                                    :
                                    //Page 4: Next button changes to submit if on last page
                                    currentPage === totalPages ?
                                        <button type="submit" onClick={handleFormSubmit} className="btn btn-primary align-self-end">Submit</button>
                                        :
                                        <button onClick={goToNextPage} type="submit" className="btn btn-primary">Next Step</button>}
                        </div>
                    </div>

                    {console.log(currentPage)}

                </div>
            </div>
        </PageContext.Provider>
    );
}

export default MainPage;