
function SummaryPage() {
    return (
        <div>
            <h1 className="fs-1 mb-2">Finishing up</h1>
            <p className="mb-4">Double-check everything looks OK before confirming.
            </p>
            <div className="d-flex align-content-center bg-light flex-column p-3" style={{ borderRadius: "8px" }}>
                <table className="table table-borderless " >
                    <thead>
                        <tr>
                            <th scope="col">Arcade(Monthly)
                                <br /><a href="">Change</a>
                            </th>

                            <td scope="col" align="right" style={{ verticalAlign: "middle" }}>$9/mo</td>
                        </tr>

                        <tr>
                            <td scope="col">Online service</td>
                            <td align="right">+$1</td>
                        </tr>

                        <tr>
                            <td scope="col">Larger storage</td>
                            <td align="right">+$2</td>
                        </tr>
                    </thead>
                </table>
                <div className="d-flex justify-content-between">
                    <p>Total(per month)</p>
                    <p>+$12/mo</p>
                </div>

            </div>
        </div>
    );
}

export default SummaryPage;