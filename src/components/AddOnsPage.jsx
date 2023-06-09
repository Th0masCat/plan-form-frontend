// Description: This is the AddOnsPage component
import AddOnsCard from "./AddOnsCard";

function AddOnsPage() {
    return (
        <div>
            <h1 className="fs-1 mb-2">Pick add-ons</h1>
            <p className="mb-4"> Add-ons help enhance your gaming experience.
            </p>
            <div className="input-group mb-3 d-flex flex-column">
                <AddOnsCard form_id="online_service" name="Online service" sub="Access to multiplayer games"/>
                <AddOnsCard form_id="larger_storage" name="Larger storage" sub="Extra 1TB of cloud save"/>
                <AddOnsCard form_id="customizable_profile" name="Customizable Profile" sub="Custom theme on your profile"/>
            </div>

        </div>
    )
}

export default AddOnsPage