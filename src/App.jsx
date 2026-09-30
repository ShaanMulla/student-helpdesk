import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Home() {
    return (
        <div className="page">
            <h1>Student Helpdesk</h1>

            <p>
                Welcome to the College Student Helpdesk.
            </p>

            <p>
                Get assistance with academic, technical,
                examination and other college-related issues.
            </p>

            <Link to="/help" className="button">
                Submit Help Request
            </Link>
        </div>
    );
}

function HelpRequest() {
    return (
        <div className="page">
            <h1>Help Request</h1>

            <form>
                <label>Student Name:</label>
                <input
                    type="text"
                    placeholder="Enter your name"
                />

                <label>Student ID:</label>
                <input
                    type="text"
                    placeholder="Enter your student ID"
                />

                <label>Email:</label>
                <input
                    type="email"
                    placeholder="Enter your college email"
                />

                <label>Category:</label>

                <select>
                    <option>Academic</option>
                    <option>Technical</option>
                    <option>Examination</option>
                    <option>Fees</option>
                    <option>Library</option>
                    <option>Other</option>
                </select>

                <label>Describe your problem:</label>

                <textarea
                    placeholder="Enter your issue"
                ></textarea>

                <button type="button">
                    Submit Request
                </button>
            </form>
        </div>
    );
}

function About() {
    return (
        <div className="page">
            <h1>About Student Helpdesk</h1>

            <p>
                The Student Helpdesk is designed to help
                college students submit and manage their
                academic and college-related queries.
            </p>

            <p>
                This application demonstrates React
                components and client-side routing.
            </p>
        </div>
    );
}

function App() {
    return (
        <HashRouter>
            <div className="app">

                <nav>
                    <h2>Student Helpdesk</h2>

                    <div className="links">
                        <Link to="/">Home</Link>
                        <Link to="/help">Help Request</Link>
                        <Link to="/about">About</Link>
                    </div>
                </nav>

                <Routes>

                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        path="/help"
                        element={<HelpRequest />}
                    />

                    <Route
                        path="/about"
                        element={<About />}
                    />

                </Routes>

            </div>
        </HashRouter>
    );
}

export default App;