import { Link } from "react-router-dom";
import "./sidebar.css"


function SidebarText(props) {
    return (
        <div className='d-flex align-items-stretch justify-content-start'>
            <div>
                <button onClick={props.change} type='button' className='btn btn-outline-light me-2 circular-button text-decoration-none'>
                    {props.number}
                </button>
            </div>
            <div className="mb-4">
                <h6 className='fw-light fs-6 p-0 mb-1'>Step {props.number}</h6>
                <h5 className='fs-5'>{props.text}</h5>
            </div>
        </div>
    )
}

export default SidebarText;