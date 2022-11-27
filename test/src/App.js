import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import NotFound from './pages/404-not-found.page';
import Home from './pages/home.page';
import Login from './pages/login.page';
import Signup from './pages/signup.page';
import Tree from './pages/tree/tree.page';


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={ <Home />} />
                <Route path="/login" element={ <Login />} />
                <Route path="/signup" element={ <Signup />} />
                <Route path="/tree" element={ <Tree />} />
                <Route path="*" element={ <NotFound />} />
                {/* <Route path="/404" element={ <NotFound /> } />
                <Route path="*" element={ <Navigate to="/404" replace />} />
                <Route path="" element={ <Navigate to="/404" replace />} /> */}
            </Routes>


        </div>
    );
}

export default App;
