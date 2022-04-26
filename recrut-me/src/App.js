import Navbar from "./components/navbar/NavbarComp";  
import Home from "./components/pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Jobs from "./components/jobs/Jobs";
import Tips from "./components/pages/Tips/Tips";
import FormRecruter from "./components/Form/FormSignUpRecruter/Form";
import FormSignIn from "./components/Form/FormSignIn/Form";
import FormClient from "./components/Form/FormSignUpClient/Form";
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "./components/navbar/NavbarComp";
function App() {
    return (
        <BrowserRouter>
            <div className="App" >
                <NavbarComp />
                < >
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/jobs" element={<Jobs />} />
                        <Route exact path="/signup-client" element={<FormClient />} />
                        <Route exact path="/signup-recruter" element={<FormRecruter />} />
                        <Route exact path="/signin" element={<FormSignIn />} />
                        <Route exact path="/tips" element={<Tips />} />
                    </Routes>
                </>
            </div>
        </BrowserRouter>
    );
}

export default App;