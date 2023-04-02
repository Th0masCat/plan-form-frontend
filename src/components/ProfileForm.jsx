import { useRecoilState } from "recoil";
import { registerFormState } from "../atoms/registerForms";

function DetailsForm() {
    const [form, setForm] = useRecoilState(registerFormState);
        
    return (
        <form>
            <h1 className="fs-1 mb-2">Personal Info</h1>
            <p className="mb-4">Please provide your name, email address <br/>
            and phone number.</p>
            <div className="mb-3">
                <label className="form-label fw-light">Name</label>
                <input value={form.name} onChange={e=>setForm({...form, name: e.target.value})} type="text" className="form-control" id="name" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label className="form-label fw-light">Email address</label>
                <input value={form.email} onChange={e=>setForm({...form, email: e.target.value})} type="email" className="form-control" id="email" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label className="form-label fw-light">Phone Number</label>
                <input value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} type="tel" className="form-control" id="phone" />
            </div>
        
        </form>
    )
}

export default DetailsForm;