import {Link} from 'react-router-dom'
import './home.page.scss'

function Home() {
    return (
        <main className='home__main'>
            Home
            <Link to="login">Log in</Link>
            <Link to="signup">Sign Up</Link>
            <Link to="tree">Tree</Link>
            <Link to="counter">Counter</Link>
        </main>
    )
}

export default Home;