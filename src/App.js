import React from "react";
import './App.css';
import {Route,Routes} from "react-router-dom";
import {Hello} from "./Hello";
import {Layout} from "./components/Layout";
import Volunteers from "./components/volunteers/Volunteers";
import ActualProjects from "./components/projects/actual/ActualProjects";
import ArchiveProjects from "./components/projects/archieve/ArchiveProjects";


function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path= "/" element={<Hello/>}/>
                <Route path= "/volunteers" element={<Volunteers/>}/>
                <Route path= "/actual" element={<ActualProjects/>}/>
                <Route path= "/archive" element={<ArchiveProjects/>}/>
            </Route>
        </Routes>
    </>

  );
}

export default App;
