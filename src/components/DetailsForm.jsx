import { useState } from "react";

function DetailsForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <form>
            <h1 className="fs-1 mb-2">Personal Info</h1>
            <p className="mb-4">Please provide your name, email address <br/>
            and phone number.</p>
            <div className="mb-3">
                <label className="form-label fw-light">Name</label>
                <input value={name} onChange={e=>{setName(e.target.value)}} type="text" className="form-control" id="name" aria-describedby="emailHelp" />
            </div>
            {console.log(name)}
            <div className="mb-3">
                <label className="form-label fw-light">Email address</label>
                <input value={email} onChange={e=>{setEmail(e.target.value)}} type="email" className="form-control" id="email" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label className="form-label fw-light">Password</label>
                <input value={password} onChange={e=>{setPassword(e.target.value)}} type="password" className="form-control" id="password" />
                {console.log(password)}
            </div>
            <div className="d-flex flex-row-reverse mt-5">
            </div>
        
        </form>
    )
}

export default DetailsForm;