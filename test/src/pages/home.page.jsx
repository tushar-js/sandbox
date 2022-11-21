import {Link} from 'react-router-dom'

function Home() {
    return (
        <div>
            Home
            <Link to="login">Log in</Link>
            <Link to="signup">Sign Up</Link>
        </div>
    )
}

export default Home;