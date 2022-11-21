import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <>
            <h1>404 Not Found</h1>
            <div>
                <Link to="home">Home</Link>
                <Link to="signup">Sign Up</Link>
            </div>
        </>
    )
}

export default NotFound;