
import { useRecoilState } from "recoil";
import { registerFormState } from "../atoms/registerForms";

function PlanCard(props) {
    const [form, setForm] = useRecoilState(registerFormState);
    

    
    return (
        <label className="btn btn-light me-2" htmlFor={props.title} style={{ width: "9rem", height: "14rem" }}>
            <input onChange={e=>setForm({...form, plan_name:props.id})}  type="radio" name="options" id={props.title} style={{ visibility: "hidden" }} />
            <div className="d-flex flex-column align-items-start ms-2">
                <img src={props.image} className="w-50 mb-5" alt="..." />
                <div>
                    <h6 className="text-start">{props.title}</h6>
                    <h6 className="text-start">{props.price}</h6>
                </div>
            </div>
        </label>
        
    )
    
}

export default PlanCard;