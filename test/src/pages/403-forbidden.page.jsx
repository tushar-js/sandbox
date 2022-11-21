import {Link} from 'react-router-dom'

function Forbidden() {
    return (
        <div>
            <Link to="home">Home</Link>
            <Link to="signup">Sign Up</Link>
        </div>
    )
}

export default Forbidden;