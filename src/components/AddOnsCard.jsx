// Description: This component is used to create the AddOns card for the register page
import { useRecoilState } from "recoil";
import { registerFormState } from "../atoms/registerForms";

function AddOnsCard(props) {
    const [form, setForm] = useRecoilState(registerFormState);
    {()=>console.log(props.name)}
    const handleOnChange = () => {
        setForm({ ...form, [props.form_id]: !form[props.form_id] })
    };

    return (
        <div>
            <div className="input-group-text w-100 mb-3">
                <input checked={form[props.form_id]?true:false} onChange={handleOnChange} className="form-check-input" type="checkbox" value="" aria-label="Checkbox for following text input" />
                <div className="m-3 ps-2">
                    <h6 className="text-start m-0">{props.name}</h6>
                    <h6 className="text-start fw-lighter m-0">{props.sub}</h6>
                </div>
            </div>

        </div>
    )
}

export default AddOnsCard