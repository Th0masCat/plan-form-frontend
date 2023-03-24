import { Link } from "react-router-dom";
import AddOnsCard from "./AddOnsCard";

function AddOnsPage() {
    return (
        <div>
            <h1 className="fs-1 mb-2">Pick add-ons</h1>
            <p className="mb-4"> Add-ons help enhance your gaming experience.
            </p>
            <div className="input-group mb-3 d-flex flex-column">
                <AddOnsCard name="Online service" sub="Access to multiplayer games"/>
                <AddOnsCard name="Larger storage" sub="Extra 1TB of cloud save"/>
                <AddOnsCard name="Customizable Profile" sub="Custom theme on your profile"/>
            </div>

            <div className="d-flex mt-5 justify-content-between ">
                <Link to={"/plan"}>
                    <button type="submit" className="btn btn-light">Back</button>
                </Link>

                <Link to={"/summary"}>
                    <button type="submit" className="btn btn-primary">Next Step</button>
                </Link>
            </div>
        </div>
    )
}

export default AddOnsPage