import React from "react";
import Sidebar from "./Component/Sidebar";
import Header from "./Component/Header";
import Home from "./Pages/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Customers from "./Pages/Customers";

const App: React.FC = () => {
    return (
        <Router>
            <div className="flex">
                <Sidebar/>
                <div className="flex-1 flex flex-col">
                    <Header username="Vegeta"/>
                    <main className="flex bg-bray-100">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/customers" element={<Customers />} />
                        </Routes>
                    </main>
                </div>
            </div>
        </Router>
    );
};export default App;