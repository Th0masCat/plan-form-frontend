import PlanCard from "./PlanCard";
import arcadeImage from "../assets/icon-arcade.svg";
import advancedImage from "../assets/icon-advanced.svg";
import proImage from "../assets/icon-pro.svg";
import { useRecoilState } from "recoil";
import { registerFormState } from "../atoms/registerForms";

function PlanDetails() {
    const [form, setForm] = useRecoilState(registerFormState);

    return (
        <>
            <h1 className="fs-1 mb-2">Select your plan</h1>
            <p className="mb-4"> You have the option of monthly or yearly billing.
            </p>
            <div className="btn-group" data-bs-toggle="buttons">
                <PlanCard id="1" title='Arcade' price='$9/mo' image={arcadeImage} />
                <PlanCard id="2" title='Advanced' price='$12/mo' image={advancedImage} />
                <PlanCard id="3" title='Pro' price='$15/mo' image={proImage} />
            </div>
            <div className="d-flex justify-content-evenly mt-3 p-2 ">
                <div className="text-lighter">Monthly</div>
                <div className="form-check form-switch ">
                    <input onChange={e => setForm({ ...form, plan_duration_is_monthly: !form.plan_duration_is_monthly })} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                </div>
                <div className="text-lighter">Yearly</div>
            </div>
        </>
    );
}

export default PlanDetails;