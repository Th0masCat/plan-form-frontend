
function PlanCard(props){
    return(
        <button className="btn btn-light me-2" data-bs-toggle="button" style={{width: "9rem", height:"12rem"}}>
            <div className="d-flex flex-column align-items-start ms-2">
            <img src={props.image} className="w-50 mb-5" alt="..."/>
            <div>
                <h6 className="text-start">{props.title}</h6>
                <h6 className="text-start">{props.price}</h6>
            </div>
            </div>
            </button>
        
    )
}

export default PlanCard;