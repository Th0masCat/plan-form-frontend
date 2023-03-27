import PlanCard from "./PlanCard";
import arcadeImage from "../assets/icon-arcade.svg";
import advancedImage from "../assets/icon-advanced.svg";
import proImage from "../assets/icon-pro.svg";
function PlanDetails() {
    return (
        <>
            <h1 className="fs-1 mb-2">Select your plan</h1>
            <p className="mb-4"> You have the option of monthly or yearly billing.
            </p>
            <div className="btn-group" data-bs-toggle="buttons">
                <PlanCard title='Arcade' price='$9/mo' image={arcadeImage} />
                <PlanCard title='Advanced' price='$12/mo' image={advancedImage} />
                <PlanCard title='Pro' price='$15/mo' image={proImage} />
            </div>
            <div className="d-flex justify-content-evenly mt-3 p-2 ">
            <div className="text-lighter">Monthly</div>
                <div className="form-check form-switch ">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                </div>
                <div className="text-lighter">Yearly</div>
            </div>

            <div className="d-flex mt-5 justify-content-between ">
            

            
            </div>

        </>
    );
}

export default PlanDetails;