import PlanCard from "./PlanCard";
import arcadeImage from "../assets/icon-arcade.svg";
import advancedImage from "../assets/icon-advanced.svg";
import proImage from "../assets/icon-pro.svg";
import { useRecoilState } from "recoil";
import { registerFormState } from "../atoms/registerForms";

function PlanDetails() {
    const [form, setForm] = useRecoilState(registerFormState);

    return (
        <div>
            <h1 className="fs-1 mb-2">Select your plan</h1>
            <p className="mb-4"> You have the option of monthly or yearly billing.
            </p>
            <div className="btn-group w-100" data-bs-toggle="buttons">
                <PlanCard id="1" title='Arcade' price={form.plan_duration_is_monthly ? '$9/mo' : '$90/yr'} image={arcadeImage} />
                <PlanCard id="2" title='Advanced' price={form.plan_duration_is_monthly ? '$12/mo' : '$120/yr'} image={advancedImage} />
                <PlanCard id="3" title='Pro' price={form.plan_duration_is_monthly ? '$15/mo' : '$150/yr'} image={proImage} />
            </div>
            <div className="d-flex justify-content-evenly mt-3 p-2 ">
                <div className="text-lighter">Monthly</div>
                <div className="form-check form-switch ">
                    <input checked={form.plan_duration_is_monthly ? false : true}
                        onChange={e => setForm({ ...form, plan_duration_is_monthly: !form.plan_duration_is_monthly })}
                        className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                </div>
                <div className="text-lighter">Yearly</div>
            </div>
        </div>
    );
}

export default PlanDetails;