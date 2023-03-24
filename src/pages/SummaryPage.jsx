import { Link } from "react-router-dom";

function SummaryPage(){
    return (
        <div>
            <h1>Summary</h1>
            <p>Thank you for your order!</p>
            <Link to={"/"}>
                <button type="submit" className="btn btn-primary">Back</button>
            </Link>
        </div>
    );
}

export default SummaryPage;