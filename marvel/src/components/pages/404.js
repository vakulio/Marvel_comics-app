import ErrorMessage from "../errorMessage/errorMessage"
import { Link } from "react-router-dom"


const Page404 = () => {

    return (
        <div>
            <ErrorMessage/>
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Page doesn't exist</p>
            <Link style={{'display':'block', 'paddingTop': '40px','textAlign': 'center', 'fontWeight': 'bold', 
            'fontSize': '24px', 'color': '#9F0013'}} to="/">Back to main page</Link>
        </div>
    )
}

export default Page404;