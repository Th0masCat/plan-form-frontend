import { Link } from "react-router-dom";

function DetailsForm() {
    return (
        <form>
            <h1 className="fs-1 mb-2">Personal Info</h1>
            <p className="mb-4">Please provide your name, email address <br/>
            and phone number.</p>
            <div className="mb-3">
                <label className="form-label fw-light">Name</label>
                <input type="text" className="form-control" id="name" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label className="form-label fw-light">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label className="form-label fw-light">Password</label>
                <input type="password" className="form-control" id="password" />
            </div>
            <div className="d-flex flex-row-reverse">
            <Link to={"/plan"} >
                <button type="submit" className="btn btn-primary">Next Step</button>
            </Link>
            </div>

        </form>
    )
}

export default DetailsForm;