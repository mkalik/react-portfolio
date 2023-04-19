// import './App.css';
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Header';
import Footer from './pages/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <Header />
                    <div>
                        <Routes>
                            {/* <Route path="/Home" element={<Home />} /> */}
                            <Route path="/About" element={<About />} />
                            <Route path="/Portfolio" element={<Portfolio />} />
                            <Route path="/Contact" element={<Contact />} />
                            <Route path="/Resume" element={<Resume />} />
                            <Route
                                path="*"
                                element={
                                    <Navigate to="/About" replace={true} />
                                }
                            />
                        </Routes>
                    </div>
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
