function AddOnsCard(props) {
    return (
        <div>
            <div className="input-group-text w-100 mb-3 ">
                <input className="form-check-input" type="checkbox" value="" aria-label="Checkbox for following text input" />
                <div className="m-3 ps-2">
                    <h6 className="text-start m-0">{props.name}</h6>
                    <h6 className="text-start fw-lighter m-0">{props.sub}</h6>
                </div>
                <h6 className="text-start m-0">{props.name}</h6>
            </div>

        </div>
    )
}

export default AddOnsCard