
import { useRecoilState } from "recoil";
import { registerFormState } from "../atoms/registerForms";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { PageContext } from "../context/PageContext";

const PlanName = {
    '1': "Arcade",
    '2': "Advanced",
    '3': "Pro"
}

function SummaryPage(props) {

    const { setCurrentPage } = useContext(PageContext);
    const [form, setForm] = useRecoilState(registerFormState);
    const nav = useNavigate()
    const list = props.cost.add_ons.map((item) => {
        return (
            <tr key={item}>
                <td  scope="col" style={{textTransform: "capitalize"}}>
                    {item[0].replace(/_/g, " ")}
                </td>
                <td align="right">
                    +${item[1]}
                </td>
            </tr>)
    })

    return (
        <div>
            <h1 className="fs-1 mb-2">Finishing up</h1>
            <p className="mb-4">Double-check everything looks OK before confirming.
            </p>
            <div className="d-flex align-content-center bg-light flex-column p-3" style={{ borderRadius: "8px" }}>
                <table className="table table-borderless " >
                    <thead>
                        <tr key={1}>
                            <th scope="col">{PlanName[form.plan_name]} {form.plan_duration_is_monthly ? <>(Monthly)</> : <>(Yearly)</>}
                                <br /><Link to='/plan' onClick={() => setCurrentPage(2)}>Change</Link>
                            </th>

                            <td scope="col" align="right" style={{ verticalAlign: "middle" }}>${props.cost.plan_cost}/mo</td>
                        </tr>
                        {list}
                    </thead>
                </table>
                <div className="d-flex justify-content-between">
                    <p>Total(per {form.plan_duration_is_monthly ? <>month</> : <>year</>})</p>
                    <p>+${props.cost.total_cost}/mo</p>
                </div>

            </div>
        </div>
    );
}

export default SummaryPage;